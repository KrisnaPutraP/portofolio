"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const Contact = () => {
  const socialLinks = Object.entries(DATA.contact.social).filter(([_, value]) => value.navbar);

  return (
    <section id="contact" className="w-full py-16">
      <BlurFade delay={0.05 * 16}>
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-lg mb-4">
              Let&apos;s Connect
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent sm:text-4xl">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Have a project in mind or just want to chat? I&apos;d love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map(([platform, data]) => (
                <a
                  key={platform}
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                    {data.icon({ className: "h-6 w-6 text-blue-500" })}
                  </div>
                  <div>
                    <h3 className="font-semibold">{data.name}</h3>
                    <p className="text-sm text-muted-foreground">Connect on {platform}</p>
                  </div>
                </a>
              ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message" className="min-h-[120px]" />
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </BlurFade>
    </section>
  );
};

export default Contact;