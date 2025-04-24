"use client"

import { useEffect } from "react"
import type { Idea } from "@/types/idea"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface IdeaSidePanelProps {
  idea: Idea | null
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function IdeaSidePanel({ idea, isOpen, onClose, onNext, onPrevious }: IdeaSidePanelProps) {
  // Handle escape key to close panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Prevent scrolling when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!idea) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Side Panel - adjusted to 50% width */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[50%] bg-gradient-to-b from-blue-950 to-[#050b1f] border-l border-blue-900/30 z-50 shadow-xl overflow-y-auto"
            aria-label="Idea details"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    onClick={onPrevious}
                    className="flex items-center border-blue-900/50 bg-blue-950/50 hover:bg-blue-900/50 text-blue-300 h-8 px-3"
                    aria-label="Previous idea"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onNext}
                    className="flex items-center border-blue-900/50 bg-blue-950/50 hover:bg-blue-900/50 text-blue-300 h-8 px-3"
                    aria-label="Next idea"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-xs font-medium">
                  Idea #{idea.id}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6 leading-tight">{idea.name}</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-blue-400 mb-2">Customer Use Journey</h3>
                  <p className="text-blue-100/90 leading-relaxed">{idea.cuj}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-blue-400 mb-2">Description</h3>
                  <p className="text-blue-100/90 leading-relaxed">{idea.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-blue-400 mb-2">Pain Point Solved</h3>
                  <p className="text-blue-100/90 leading-relaxed">{idea.painPointSolved}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-blue-400 mb-2">Why This Is Important</h3>
                  <p className="text-blue-100/90 leading-relaxed">{idea.importance}</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-blue-400 mb-2">Difficulty Level</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-300 text-sm">
                      {idea.difficultyLevel}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-blue-400 mb-2">Technology</h3>
                    <p className="text-blue-100/90 text-sm leading-relaxed">{idea.technologyRequirements}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
