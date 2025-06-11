"use client"

import type React from "react"

import { useState } from "react"
import Button from "../ui/Button"
import { IconX } from "@tabler/icons-react"


interface ModalSectionProps {
  buttonText: string
  buttonIcon?: React.ReactNode
  buttonVariant?: "basic" | "outline" | "basic-gray" | "outline-gray"
  title: string
  content: React.ReactNode
}

export default function ModalSection({
  buttonText,
  buttonIcon,
  buttonVariant = "basic",
  title,
  content,
}: ModalSectionProps) {
  const [open, setOpen] = useState(false)

  const getButtonClasses = () => {
    switch (buttonVariant) {
      case "basic":
        return "bg-red-600 hover:bg-red-700 text-white font-medium group transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
      case "outline":
        return "border-2 border-gray-300 bg-white text-gray-800 hover:bg-gray-50 font-medium group transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
      case "basic-gray":
        return "bg-gray-300 hover:bg-gray-400 text-white font-medium group transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
      case "outline-gray":
        return "text-white border-2 border-white hover:bg-red-700/50 font-medium group transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
      default:
        return "bg-red-600 hover:bg-red-700 text-white font-medium group transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
    }
  }

  return (
    <>
      <Button
        type="button"
        style={buttonVariant === "outline" || buttonVariant === "outline-gray" ? "outline" : "basic"}
        aditionalsStyles={`${getButtonClasses()} min-w-[120px] py-2 px-4`}
        onClick={() => setOpen(true)}
      >
        {buttonText}
        {buttonIcon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">{buttonIcon}</span>
        )}
      </Button>

      <div className={`${open ? "block" : "hidden"}`}>
        <div className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <Button
              type="button"
              style="gray"
              aditionalsStyles="absolute right-4 top-4 rounded-full"
              onClick={() => setOpen(false)}
            >
              <IconX className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="mt-4">{content}</div>
        </div>
      </div>
    </>
  )
}
