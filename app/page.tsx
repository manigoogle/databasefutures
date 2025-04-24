"use client"

import { useState, useEffect } from "react"
import { HeroBanner } from "@/components/hero-banner"
import { IdeaCard } from "@/components/idea-card"
import { IdeaSidePanel } from "@/components/idea-side-panel"
import { Footer } from "@/components/footer"
import { ideas } from "@/data/ideas-direct"
import type { Idea } from "@/types/idea"

export default function Home() {
  const [ideasLoaded, setIdeasLoaded] = useState<Idea[]>([])

  useEffect(() => {
    // Set the ideas to state after component mounts
    setIdeasLoaded(ideas)
  }, [])

  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleCardClick = (idea: Idea) => {
    setSelectedIdea(idea)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleNext = () => {
    if (selectedIdea) {
      const currentIndex = ideasLoaded.findIndex((idea) => idea.id === selectedIdea.id)
      const nextIndex = (currentIndex + 1) % ideasLoaded.length
      setSelectedIdea(ideasLoaded[nextIndex])
    }
  }

  const handlePrevious = () => {
    if (selectedIdea) {
      const currentIndex = ideasLoaded.findIndex((idea) => idea.id === selectedIdea.id)
      const previousIndex = (currentIndex - 1 + ideasLoaded.length) % ideasLoaded.length
      setSelectedIdea(ideasLoaded[previousIndex])
    }
  }

  return (
    <main className="min-h-screen bg-[#050b1f]">
      <HeroBanner />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Updated to include the total count */}
        <div className="mb-8 text-blue-800/60 text-lg font-medium">
          <p>Future possibilities ({ideas.length})</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideasLoaded.map((idea, index) => (
            <IdeaCard key={idea.id} idea={idea} onClick={handleCardClick} index={index} />
          ))}
        </div>
      </div>

      <IdeaSidePanel
        idea={selectedIdea}
        isOpen={isOpen}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />

      <Footer />
    </main>
  )
}
