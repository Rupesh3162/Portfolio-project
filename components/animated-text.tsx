"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  delay?: number
  className?: string
  speed?: number
}

export default function AnimatedText({ text, delay = 0, className, speed = 50 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Initial delay before starting the animation
    timeout = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(intervalId)
          setIsTyping(false)
        }
      }, speed)

      return () => clearInterval(intervalId)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [text, delay, speed])

  return (
    <span className={cn(className)}>
      {displayedText}
      {isTyping && <span className="inline-block w-1 h-5 ml-1 bg-blue-500 animate-blink"></span>}
    </span>
  )
}
