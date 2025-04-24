"use client"

import type { Idea } from "@/types/idea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface IdeaCardProps {
  idea: Idea
  onClick: (idea: Idea) => void
  index: number
}

export function IdeaCard({ idea, onClick, index }: IdeaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card
        className="h-full border-0 bg-gradient-to-b from-blue-950/40 to-blue-900/10 backdrop-blur-sm hover:from-blue-900/40 hover:to-blue-800/20 transition-all duration-300 cursor-pointer overflow-hidden group shadow-lg shadow-blue-950/20"
        onClick={() => onClick(idea)}
      >
        <CardContent className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {idea.name}
          </h3>

          <div className="mb-3 text-sm font-medium text-blue-400">{idea.cuj}</div>

          <p className="text-blue-100/70 line-clamp-2 text-sm leading-relaxed">{idea.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
