"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BlurFade from "@/components/magicui/blur-fade";
import { Mail, Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useToast } from "@/components/hooks/use-toast";
import ShimmerButton from "@/components/ui/shimmer-button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contacts = () => {
  const [focusedField, setFocusedField] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Enhanced Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields.",
      });
      setIsLoading(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address.",
      });
      setIsLoading(false);
      return;
    }

    if (formData.message.length > 1000) { 
      toast({
        variant: "destructive",
        title: "Error",
        description: "Your message is too long. Please limit it to 1000 characters.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to send email');

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="contact" className="w-full py-16 px-4">
      <BlurFade delay={0.05 * 16}>
        <Card className="max-w-2xl mx-auto overflow-hidden p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />
          <CardHeader className="relative text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-sm opacity-70" />
                <div className="relative rounded-full bg-background p-3">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Let&apos;s Create Something Together
            </CardTitle>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have an exciting project in mind? I&apos;m always open to discussing new opportunities and ideas.
            </p>
          </CardHeader>
          <CardContent className="relative space-y-6 p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-sm transition-opacity duration-300 ${focusedField === "name" ? "opacity-30" : "group-hover:opacity-20"}`} />
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    className="relative bg-background"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    required
                  />
                </div>
                <div className="relative group">
                  <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-sm transition-opacity duration-300 ${focusedField === "email" ? "opacity-30" : "group-hover:opacity-20"}`} />
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    type="email" 
                    className="relative bg-background"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    required
                  />
                </div>
              </div>
              <div className="relative group">
                <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-sm transition-opacity duration-300 ${focusedField === "subject" ? "opacity-30" : "group-hover:opacity-20"}`} />
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  className="relative bg-background"
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField("")}
                />
              </div>
              <div className="relative group">
                <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-sm transition-opacity duration-300 ${focusedField === "message" ? "opacity-30" : "group-hover:opacity-20"}`} />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message" 
                  className="relative min-h-[120px] bg-background"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  required
                />
              </div>
              <ShimmerButton 
                type="submit"
                disabled={isLoading}
                shimmerColor="#ffffff" 
                shimmerSize="0.05em" 
                borderRadius="100px" 
                shimmerDuration="3s" 
                background="linear-gradient(to right, #3b82f6, #06b6d4)" 
                hoverBackground="linear-gradient(to right, #2563eb, #0891b2)" 
                className="w-full flex items-center justify-center" 
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <span className="relative z-10 font-bold">Send Message</span>
                )}
              </ShimmerButton>
            </form>
          </CardContent>
        </Card>
      </BlurFade>
    </section>
  );
};

export default Contacts;
