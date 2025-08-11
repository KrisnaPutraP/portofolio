"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircleIcon, XIcon, SparklesIcon } from 'lucide-react'
import { Button } from "@/components/magicui/button"
import { ChatInterface } from "./chat-interface"

export const ChatbotFAB = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-20 right-4 z-40 sm:bottom-8 sm:right-8 md:bottom-8 md:right-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="
            relative
            size-14 sm:size-16
            rounded-full
            bg-gradient-to-br
            from-primary
            to-primary/80
            hover:from-primary/90
            hover:to-primary/70
            shadow-lg
            hover:shadow-xl
            hover:shadow-primary/25
            transition-all
            duration-300
            group
            border-2
            border-primary/20
            backdrop-blur-sm
          "
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XIcon className="size-6 text-primary-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircleIcon className="size-6 text-primary-foreground" />
                {/* AI indicator - simplified for mobile performance */}
                <div className="absolute -top-1 -right-1">
                  <SparklesIcon className="size-3 text-yellow-300" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle glow effect instead of ping animation */}
          <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ delay: 3 }}
              className="
                absolute
                right-full
                top-0
                bottom-0
                my-auto
                mr-4
                px-3
                py-2
                bg-gray-800
                dark:bg-gray-900
                text-white
                text-sm
                font-medium
                rounded-lg
                shadow-lg
                whitespace-nowrap
                pointer-events-none
                hidden
                sm:block
                h-fit
              "
            >
              Get to know Krisna better!
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800 dark:border-l-gray-900" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Interface */}
      <ChatInterface isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
     