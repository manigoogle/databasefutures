import PostCard from "@/app/components/post-card"
import { getPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <>
      {/* Full-width Hero Section with light grey gradient and fractal/tesseract animations */}
      <section
        id="home-hero-banner"
        className="min-h-screen w-full flex flex-col justify-center 
             bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200
             relative overflow-hidden -translate-y-[75px]"
      >
        {/* Animated Fractal and Tesseract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* SVG Fractal and Tesseract Geometry */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tesseract (4D cube projection) - Main structure */}
            <g className="animate-tesseract-rotate" style={{ transformOrigin: "600px 400px" }}>
              {/* Outer cube */}
              <path
                d="M400,200 L600,200 L600,400 L400,400 Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
                className="animate-tesseract-edge"
                style={{ animationDelay: "0s" }}
              />
              {/* Inner cube */}
              <path
                d="M500,300 L700,300 L700,500 L500,500 Z"
                stroke="#6B7280"
                strokeWidth="1.5"
                fill="none"
                className="animate-tesseract-edge"
                style={{ animationDelay: "0.5s" }}
              />
              {/* Connecting edges (4D projection) */}
              <path
                d="M400,200 L500,300"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-tesseract-connection"
                style={{ animationDelay: "1s" }}
              />
              <path
                d="M600,200 L700,300"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-tesseract-connection"
                style={{ animationDelay: "1.2s" }}
              />
              <path
                d="M600,400 L700,500"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-tesseract-connection"
                style={{ animationDelay: "1.4s" }}
              />
              <path
                d="M400,400 L500,500"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-tesseract-connection"
                style={{ animationDelay: "1.6s" }}
              />
            </g>

            {/* Fractal Tree Structure - Left side */}
            <g className="animate-fractal-grow" style={{ transformOrigin: "200px 600px" }}>
              {/* Main trunk */}
              <path
                d="M200,700 L200,600"
                stroke="#9CA3AF"
                strokeWidth="3"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "0s" }}
              />
              {/* First level branches */}
              <path
                d="M200,600 L150,550"
                stroke="#9CA3AF"
                strokeWidth="2"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "0.5s" }}
              />
              <path
                d="M200,600 L250,550"
                stroke="#9CA3AF"
                strokeWidth="2"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "0.7s" }}
              />
              {/* Second level branches */}
              <path
                d="M150,550 L125,525"
                stroke="#B3B8C2"
                strokeWidth="1.5"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "1s" }}
              />
              <path
                d="M150,550 L175,525"
                stroke="#B3B8C2"
                strokeWidth="1.5"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "1.2s" }}
              />
              <path
                d="M250,550 L225,525"
                stroke="#B3B8C2"
                strokeWidth="1.5"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "1.4s" }}
              />
              <path
                d="M250,550 L275,525"
                stroke="#B3B8C2"
                strokeWidth="1.5"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "1.6s" }}
              />
              {/* Third level branches */}
              <path
                d="M125,525 L112,512"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "2s" }}
              />
              <path
                d="M125,525 L138,512"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "2.2s" }}
              />
              <path
                d="M275,525 L262,512"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "2.4s" }}
              />
              <path
                d="M275,525 L288,512"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-fractal-branch"
                style={{ animationDelay: "2.6s" }}
              />
            </g>

            {/* Sierpinski Triangle Fractal - Right side */}
            <g className="animate-fractal-pulse" style={{ transformOrigin: "1000px 200px" }}>
              {/* Level 1 - Main triangle */}
              <path
                d="M1000,100 L900,250 L1100,250 Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                fill="none"
                className="animate-fractal-triangle"
                style={{ animationDelay: "0s" }}
              />
              {/* Level 2 - Inner triangles */}
              <path
                d="M1000,100 L950,175 L1050,175 Z"
                stroke="#B3B8C2"
                strokeWidth="1"
                fill="none"
                className="animate-fractal-triangle"
                style={{ animationDelay: "1s" }}
              />
              <path
                d="M925,212.5 L875,250 L975,250 Z"
                stroke="#B3B8C2"
                strokeWidth="1"
                fill="none"
                className="animate-fractal-triangle"
                style={{ animationDelay: "1.5s" }}
              />
              <path
                d="M1025,212.5 L1125,250 L1075,250 Z"
                stroke="#B3B8C2"
                strokeWidth="1"
                fill="none"
                className="animate-fractal-triangle"
                style={{ animationDelay: "2s" }}
              />
            </g>

            {/* Hypercube edges - Additional 4D geometry */}
            <g className="animate-hypercube-morph" style={{ transformOrigin: "800px 600px" }}>
              {/* Front face */}
              <path
                d="M750,550 L850,550 L850,650 L750,650 Z"
                stroke="#9CA3AF"
                strokeWidth="1"
                fill="none"
                className="animate-hypercube-face"
                style={{ animationDelay: "0s" }}
              />
              {/* Back face */}
              <path
                d="M780,520 L880,520 L880,620 L780,620 Z"
                stroke="#6B7280"
                strokeWidth="1"
                fill="none"
                className="animate-hypercube-face"
                style={{ animationDelay: "0.5s" }}
              />
              {/* Connecting edges */}
              <path
                d="M750,550 L780,520"
                stroke="#D1D5DB"
                strokeWidth="0.8"
                fill="none"
                className="animate-hypercube-edge"
              />
              <path
                d="M850,550 L880,520"
                stroke="#D1D5DB"
                strokeWidth="0.8"
                fill="none"
                className="animate-hypercube-edge"
              />
              <path
                d="M850,650 L880,620"
                stroke="#D1D5DB"
                strokeWidth="0.8"
                fill="none"
                className="animate-hypercube-edge"
              />
              <path
                d="M750,650 L780,620"
                stroke="#D1D5DB"
                strokeWidth="0.8"
                fill="none"
                className="animate-hypercube-edge"
              />
            </g>

            {/* Mandelbrot-inspired recursive patterns */}
            <g className="animate-mandelbrot-zoom" style={{ transformOrigin: "300px 300px" }}>
              <circle
                cx="300"
                cy="300"
                r="80"
                stroke="#E5E7EB"
                strokeWidth="1"
                fill="none"
                className="animate-mandelbrot-circle"
                style={{ animationDelay: "0s" }}
              />
              <circle
                cx="300"
                cy="300"
                r="50"
                stroke="#D1D5DB"
                strokeWidth="1"
                fill="none"
                className="animate-mandelbrot-circle"
                style={{ animationDelay: "1s" }}
              />
              <circle
                cx="300"
                cy="300"
                r="30"
                stroke="#B3B8C2"
                strokeWidth="1"
                fill="none"
                className="animate-mandelbrot-circle"
                style={{ animationDelay: "2s" }}
              />
              <circle
                cx="300"
                cy="300"
                r="15"
                stroke="#9CA3AF"
                strokeWidth="1"
                fill="none"
                className="animate-mandelbrot-circle"
                style={{ animationDelay: "3s" }}
              />
            </g>
          </svg>
        </div>

        {/* Inner container for text content, centered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-35px] md:mt-[-35px] relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-10 md:mb-12 balance-text">
            Cloud Tech I Thought I Understood
          </h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-base md:text-lg text-gray-700 mb-2">
              <span className="text-2xl mr-2 align-middle">📝</span>
              <strong className="font-semibold text-gray-800 align-middle">Why I write this:</strong>
            </p>
            <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Every Friday, I share what I've been learning about cloud—especially databases. Writing helps me think
              more clearly, and sharing it is my way of helping us all learn a little more, together.
            </p>
            <p className="font-sans text-sm md:text-base text-gray-600">— Mani HK</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section - starts with a solid white background */}
      {/* Added negative top margin to reduce space from hero */}
      <section className="bg-brand-backgroundFrom py-12 md:py-20 mt-[-150px] relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {posts.length > 0 ? (
              <div className="space-y-10 md:space-y-16">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-brand-mutedText font-sans">No articles published yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
