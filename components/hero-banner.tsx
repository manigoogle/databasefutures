"use client"

import { useEffect, useRef } from "react"

export function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animation for the grid and moving dots
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Animation variables
    const gridSize = 80 // Size of grid cells in pixels
    const particles: Particle[] = []
    let lastParticleTime = 0
    const particleInterval = 1200 // Reduced from 2000ms to 1200ms (more frequent dots)
    const dotsPerInterval = 2 // Send 2 dots at once instead of 1

    // Grid lines
    interface GridLine {
      x1: number
      y1: number
      x2: number
      y2: number
      isHorizontal: boolean
    }

    const gridLines: GridLine[] = []

    // Particle class for moving dots
    class Particle {
      line: GridLine
      position: number
      speed: number
      size: number
      color: string

      constructor(line: GridLine) {
        this.line = line
        this.position = 0
        this.speed = 0.003 // Consistent speed
        this.size = 2.0 // Increased from 1.2 to 2.0 (larger dots)
        this.color = Math.random() > 0.5 ? "rgba(64, 92, 219, 0.6)" : "rgba(6, 182, 212, 0.6)" // Slightly increased opacity
      }

      update() {
        this.position += this.speed
        return this.position <= 1 // Return false when particle completes its journey
      }

      draw(ctx: CanvasRenderingContext2D) {
        let x, y
        if (this.line.isHorizontal) {
          x = this.line.x1 + (this.line.x2 - this.line.x1) * this.position
          y = this.line.y1
        } else {
          x = this.line.x1
          y = this.line.y1 + (this.line.y2 - this.line.y1) * this.position
        }

        ctx.beginPath()
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Initialize grid
    function initGrid() {
      if (!canvas) return

      gridLines.length = 0
      particles.length = 0

      const width = canvas.width
      const height = canvas.height

      // Create horizontal grid lines
      for (let y = gridSize; y < height; y += gridSize) {
        gridLines.push({
          x1: 0,
          y1: y,
          x2: width,
          y2: y,
          isHorizontal: true,
        })
      }

      // Create vertical grid lines
      for (let x = gridSize; x < width; x += gridSize) {
        gridLines.push({
          x1: x,
          y1: 0,
          x2: x,
          y2: height,
          isHorizontal: false,
        })
      }
    }

    // Add new particles at random grid lines
    function addParticles() {
      if (gridLines.length === 0) return

      // Add multiple dots at once
      for (let i = 0; i < dotsPerInterval; i++) {
        // Select a random grid line
        const randomLine = gridLines[Math.floor(Math.random() * gridLines.length)]
        particles.push(new Particle(randomLine))
      }
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        canvas.width = width
        canvas.height = height
        initGrid()
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Animation loop
    let animationFrameId: number
    function animate(timestamp: number) {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Check if it's time to add new particles
      if (timestamp - lastParticleTime > particleInterval) {
        addParticles()
        lastParticleTime = timestamp
      }

      // Draw grid lines
      ctx.beginPath()
      gridLines.forEach((line) => {
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
      })
      ctx.strokeStyle = "rgba(64, 92, 219, 0.07)" // Very subtle grid lines
      ctx.lineWidth = 1
      ctx.stroke()

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const isActive = particles[i].update()
        if (isActive) {
          particles[i].draw(ctx)
        } else {
          // Remove completed particles
          particles.splice(i, 1)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Handle glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      const glowElements = containerRef.current.querySelectorAll(".glow")
      glowElements.forEach((el: Element) => {
        const glowEl = el as HTMLElement
        glowEl.style.left = `${x * 100}%`
        glowEl.style.top = `${y * 100}%`
        glowEl.style.transform = `translate(-50%, -50%)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#050b1f] py-36 px-4">
      {/* Grid animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      <div className="glow opacity-60" style={{ left: "30%", top: "30%" }}></div>
      <div className="glow glow-cyan opacity-40" style={{ left: "70%", top: "60%" }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-blue-950/50 border border-blue-800/30 text-blue-400 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            go/databasefutures
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white leading-none">
            <span className="block mb-0 tracking-tighter">Database</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
              Futures
            </span>
          </h1>

          <p className="text-xl text-blue-200/80 max-w-xl tracking-normal font-light leading-relaxed">
            AI driven ideas for Cloud Databases that transform how we build, manage, and scale data infrastructure
          </p>
        </div>
      </div>
    </div>
  )
}
