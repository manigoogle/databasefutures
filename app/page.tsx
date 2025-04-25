"use client"

import { useState, useEffect } from "react"
import { HeroBanner } from "@/components/hero-banner"
import { IdeaCard } from "@/components/idea-card"
import { IdeaSidePanel } from "@/components/idea-side-panel"
import { Footer } from "@/components/footer"
import { Pagination } from "@/components/pagination"
import { ideas } from "@/data/ideas-direct"
import type { Idea } from "@/types/idea"

export default function Home() {
  const [ideasLoaded, setIdeasLoaded] = useState<Idea[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const ideasPerPage = 10

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

  // Calculate pagination
  const totalPages = Math.ceil(ideasLoaded.length / ideasPerPage)
  const indexOfLastIdea = currentPage * ideasPerPage
  const indexOfFirstIdea = indexOfLastIdea - ideasPerPage
  const currentIdeas = ideasLoaded.slice(indexOfFirstIdea, indexOfLastIdea)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-[#050b1f]">
      <HeroBanner />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Updated text from "Future possibilities" to "Total ideas" */}
        <div className="mb-8 text-blue-800/60 text-lg font-medium">
          <p>Total ideas ({ideas.length})</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentIdeas.map((idea, index) => (
            <IdeaCard key={idea.id} idea={idea} onClick={handleCardClick} index={index} />
          ))}
        </div>

        {/* Pagination component */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
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
