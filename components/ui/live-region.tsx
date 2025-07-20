"use client"

import * as React from "react"

interface LiveRegionProps {
  message: string
  politeness?: "polite" | "assertive" | "off"
  clearOnUnmount?: boolean
}

export function LiveRegion({ 
  message, 
  politeness = "polite", 
  clearOnUnmount = true 
}: LiveRegionProps) {
  const [announcement, setAnnouncement] = React.useState("")

  React.useEffect(() => {
    if (message) {
      // Clear first, then set the message to ensure it's announced
      setAnnouncement("")
      const timer = setTimeout(() => {
        setAnnouncement(message)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [message])

  React.useEffect(() => {
    return () => {
      if (clearOnUnmount) {
        setAnnouncement("")
      }
    }
  }, [clearOnUnmount])

  return (
    <div
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  )
}

// Hook for managing announcements
export function useAnnouncement() {
  const [message, setMessage] = React.useState("")

  const announce = React.useCallback((text: string) => {
    setMessage(text)
    // Clear the message after a short delay to allow for re-announcements
    setTimeout(() => setMessage(""), 1000)
  }, [])

  return { message, announce }
}
