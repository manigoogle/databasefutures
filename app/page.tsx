import PostCard from "@/app/components/post-card"
import { getPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <>
      {/* Full-width Hero Section with light grey gradient and line animations */}
      <section
        id="home-hero-banner"
        className="min-h-screen w-full flex flex-col justify-center 
             bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200
             relative overflow-hidden -translate-y-[75px]"
      >
        {/* Animated Line Network Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* SVG Line Network */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Network nodes (dots) */}
            <circle
              cx="100"
              cy="150"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "0s" }}
            />
            <circle
              cx="300"
              cy="100"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="500"
              cy="200"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "2s" }}
            />
            <circle
              cx="700"
              cy="120"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "3s" }}
            />
            <circle
              cx="900"
              cy="180"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "4s" }}
            />
            <circle
              cx="1100"
              cy="140"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "5s" }}
            />

            <circle
              cx="150"
              cy="400"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="350"
              cy="450"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "2.5s" }}
            />
            <circle
              cx="550"
              cy="380"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "3.5s" }}
            />
            <circle
              cx="750"
              cy="420"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "4.5s" }}
            />
            <circle
              cx="950"
              cy="400"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "5.5s" }}
            />

            <circle
              cx="200"
              cy="650"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="400"
              cy="700"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="600"
              cy="620"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "2.5s" }}
            />
            <circle
              cx="800"
              cy="680"
              r="2"
              fill="#6B7280"
              className="animate-pulse-node"
              style={{ animationDelay: "3.5s" }}
            />
            <circle
              cx="1000"
              cy="640"
              r="3"
              fill="#9CA3AF"
              className="animate-pulse-node"
              style={{ animationDelay: "4.5s" }}
            />

            {/* Connecting lines with draw animation */}
            <path
              d="M100,150 Q200,125 300,100"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "0s" }}
            />
            <path
              d="M300,100 Q400,150 500,200"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M500,200 Q600,160 700,120"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "2s" }}
            />
            <path
              d="M700,120 Q800,150 900,180"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "3s" }}
            />
            <path
              d="M900,180 Q1000,160 1100,140"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "4s" }}
            />

            {/* Vertical connections */}
            <path
              d="M150,400 Q125,275 100,150"
              stroke="#E5E7EB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "1.5s" }}
            />
            <path
              d="M350,450 Q325,275 300,100"
              stroke="#E5E7EB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "2.5s" }}
            />
            <path
              d="M550,380 Q525,290 500,200"
              stroke="#E5E7EB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "3.5s" }}
            />
            <path
              d="M750,420 Q725,270 700,120"
              stroke="#E5E7EB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "4.5s" }}
            />

            {/* Bottom row connections */}
            <path
              d="M200,650 Q300,675 400,700"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "5s" }}
            />
            <path
              d="M400,700 Q500,660 600,620"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "6s" }}
            />
            <path
              d="M600,620 Q700,650 800,680"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "7s" }}
            />
            <path
              d="M800,680 Q900,660 1000,640"
              stroke="#D1D5DB"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "8s" }}
            />

            {/* Cross connections for complexity */}
            <path
              d="M150,400 Q450,300 750,420"
              stroke="#F3F4F6"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw-line-slow"
              style={{ animationDelay: "9s" }}
            />
            <path
              d="M350,450 Q650,350 950,400"
              stroke="#F3F4F6"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw-line-slow"
              style={{ animationDelay: "10s" }}
            />
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
