import PostCard from "@/app/components/post-card"
import { getPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <>
      {/* Full-width Hero Section with light grey gradient and geometric animations */}
      <section
        id="home-hero-banner"
        className="min-h-screen w-full flex flex-col justify-center 
             bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200
             relative overflow-hidden -translate-y-[75px]"
      >
        {/* Animated Geometric Shapes Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles */}
          <div
            className="geometric-circle absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 animate-float-slow"
            style={{ top: "10%", left: "10%", animationDelay: "0s" }}
          ></div>
          <div
            className="geometric-circle absolute w-24 h-24 rounded-full bg-gradient-to-br from-green-100/30 to-blue-100/30 animate-float-medium"
            style={{ top: "20%", right: "15%", animationDelay: "2s" }}
          ></div>
          <div
            className="geometric-circle absolute w-40 h-40 rounded-full bg-gradient-to-br from-purple-100/20 to-pink-100/20 animate-float-slow"
            style={{ bottom: "15%", left: "20%", animationDelay: "4s" }}
          ></div>

          {/* Floating squares/rectangles */}
          <div
            className="geometric-square absolute w-16 h-16 bg-gradient-to-br from-indigo-100/40 to-blue-100/40 rotate-45 animate-float-fast"
            style={{ top: "30%", left: "70%", animationDelay: "1s" }}
          ></div>
          <div
            className="geometric-square absolute w-12 h-12 bg-gradient-to-br from-teal-100/40 to-green-100/40 rotate-12 animate-float-medium"
            style={{ top: "60%", right: "25%", animationDelay: "3s" }}
          ></div>
          <div
            className="geometric-square absolute w-20 h-20 bg-gradient-to-br from-rose-100/30 to-orange-100/30 -rotate-12 animate-float-slow"
            style={{ bottom: "25%", right: "10%", animationDelay: "5s" }}
          ></div>

          {/* Hexagons */}
          <div
            className="geometric-hex absolute w-28 h-28 animate-float-medium"
            style={{ top: "50%", left: "5%", animationDelay: "1.5s" }}
          >
            <div
              className="w-full h-full bg-gradient-to-br from-cyan-100/30 to-blue-100/30 transform rotate-30"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            ></div>
          </div>
          <div
            className="geometric-hex absolute w-20 h-20 animate-float-fast"
            style={{ top: "15%", left: "50%", animationDelay: "3.5s" }}
          >
            <div
              className="w-full h-full bg-gradient-to-br from-violet-100/30 to-purple-100/30 transform -rotate-15"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            ></div>
          </div>

          {/* Lines/Connectors */}
          <div
            className="geometric-line absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent animate-pulse-slow"
            style={{ top: "25%", left: "30%", transform: "rotate(25deg)", animationDelay: "2s" }}
          ></div>
          <div
            className="geometric-line absolute w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-pulse-slow"
            style={{ bottom: "35%", right: "35%", transform: "rotate(-15deg)", animationDelay: "4s" }}
          ></div>
          <div
            className="geometric-line absolute w-40 h-0.5 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent animate-pulse-slow"
            style={{ top: "70%", left: "40%", transform: "rotate(45deg)", animationDelay: "6s" }}
          ></div>
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
