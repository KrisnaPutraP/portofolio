"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SendIcon, UserIcon, BotIcon, MinimizeIcon, SparklesIcon } from 'lucide-react'
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
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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

  const suggestedQuestions = [
    "What's Krisna's experience?",
    "Tell me about his projects",
    "What skills does he have?",
    "What's his educational background?"
  ]

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
              bottom-20
              right-4
              w-[calc(100vw-2rem)]
              h-[70vh]
              max-w-md
              max-h-[32rem]
              z-40
              sm:bottom-8
              sm:right-8
              sm:w-96
              sm:h-[32rem]
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
                dark:from-gray-900/95
                dark:to-gray-800/95
                backdrop-blur-xl
                border
                border-gray-200/60
                dark:border-gray-700/60
                shadow-2xl
                shadow-black/10
                dark:shadow-black/30
                rounded-2xl
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200/60 dark:border-gray-700/60 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/15">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="size-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                      <BotIcon className="size-5 text-primary-foreground" />
                    </div>
                    {/* Simplified AI indicator - no animation for mobile performance */}
                    <div className="absolute -top-1 -right-1">
                      <SparklesIcon className="size-3 text-yellow-400" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">Krisna&apos;s AI Assistant</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <div className="size-2 bg-green-500 rounded-full" />
                      Online & ready to help
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="size-9 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <MinimizeIcon className="size-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-auto p-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`
                          size-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm
                          ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                              : "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-muted-foreground"
                          }
                        `}
                      >
                        {message.role === "user" ? <UserIcon className="size-4" /> : <BotIcon className="size-4" />}
                      </div>
                      <div
                        className={`
                          max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                          ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ml-auto rounded-br-md"
                              : "bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-foreground rounded-bl-md border border-gray-200/50 dark:border-gray-600/50"
                          }
                        `}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Suggested Questions (only show initially) */}
                  {messages.length === 1 && !isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2"
                    >
                      <p className="text-xs text-muted-foreground text-center">Try asking:</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedQuestions.map((question, index) => (
                          <button
                            key={index}
                            onClick={() => setInput(question)}
                            className="px-3 py-1.5 text-xs bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary rounded-full transition-colors duration-200 border border-primary/20"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Loading indicator - simplified animation */}
                  {isLoading && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="flex gap-3"
                    >
                      <div className="size-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-sm">
                        <BotIcon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 p-3 rounded-2xl rounded-bl-md border border-gray-200/50 dark:border-gray-600/50">
                        <div className="flex gap-1">
                          <div className="size-2 bg-primary/60 rounded-full animate-pulse" />
                          <div className="size-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                          <div className="size-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Scroll anchor */}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200/60 dark:border-gray-700/60 bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Krisna's experience, projects, skills..."
                    className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200/60 dark:border-gray-600/60 focus:border-primary/50 dark:focus:border-primary/50 rounded-xl"
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    disabled={isLoading}
                  />
                  <Button 
                    onClick={handleSend} 
                    disabled={isLoading || !input.trim()} 
                    size="icon"
                    className="bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg rounded-xl"
                  >
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
