"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SendIcon, UserIcon, BotIcon, MinimizeIcon } from "lucide-react"
import { Button } from "@/components/magicui/button"
import { Input } from "@/components/magicui/input"
import { Card } from "@/components/magicui/card"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface ChatInterfaceProps {
  isOpen: boolean
  onClose: () => void
}

export const ChatInterface = ({ isOpen, onClose }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm Krisna's AI assistant. I can help you learn more about his experience, projects, skills, education, and even some personal details like his favorite foods! What would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble responding right now. Please try again later.",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={onClose}
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
              fixed
              bottom-6
              right-6
              w-96
              h-[32rem]
              max-w-[calc(100vw-3rem)]
              max-h-[calc(100vh-6rem)]
              z-40
              sm:bottom-8
              sm:right-8
            "
          >
            <Card
              className="
                h-full
                flex
                flex-col
                bg-gradient-to-br
                from-white/95
                to-gray-50/95
                dark:from-gray-800/95
                dark:to-gray-700/95
                backdrop-blur-md
                border
                border-gray-200/60
                dark:border-gray-600/60
                shadow-2xl
                rounded-2xl
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200/60 dark:border-gray-600/60">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="size-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <BotIcon className="size-4 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
                    <p className="text-xs text-muted-foreground">Ask me anything!</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="size-8">
                  <MinimizeIcon className="size-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="overflow-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`
                          size-8 rounded-full flex items-center justify-center flex-shrink-0
                          ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }
                        `}
                      >
                        {message.role === "user" ? <UserIcon className="size-4" /> : <BotIcon className="size-4" />}
                      </div>
                      <div
                        className={`
                          max-w-[80%] p-3 rounded-2xl text-sm
                          ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted text-muted-foreground"
                          }
                        `}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                      <div className="size-8 rounded-full bg-muted flex items-center justify-center">
                        <BotIcon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="bg-muted p-3 rounded-2xl">
                        <div className="flex gap-1">
                          <div className="size-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                          <div className="size-2 bg-muted-foreground/50 rounded-full animate-bounce delay-100" />
                          <div className="size-2 bg-muted-foreground/50 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200/60 dark:border-gray-600/60">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Krisna's experience, projects, skills, favorite foods..."
                    className="flex-1"
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    disabled={isLoading}
                  />
                  <Button onClick={handleSend} disabled={isLoading || !input.trim()} size="icon">
                    <SendIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
