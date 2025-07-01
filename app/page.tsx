import PostCard from "@/app/components/post-card"
import { getPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <>
      {/* Full-width Hero Section with dark grey gradient and animated digital bits */}
      <section
        id="home-hero-banner"
        className="min-h-screen w-full flex flex-col justify-center 
             bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800
             relative overflow-hidden -translate-y-[75px]"
      >
        {/* Animated Digital Bits Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="digital-bit absolute left-[10%] animate-float-bits" style={{ animationDelay: "0s" }}>
            10110101
          </div>
          <div className="digital-bit absolute left-[20%] animate-float-bits" style={{ animationDelay: "1s" }}>
            01001110
          </div>
          <div className="digital-bit absolute left-[30%] animate-float-bits" style={{ animationDelay: "2s" }}>
            11010011
          </div>
          <div className="digital-bit absolute left-[40%] animate-float-bits" style={{ animationDelay: "3s" }}>
            00111010
          </div>
          <div className="digital-bit absolute left-[50%] animate-float-bits" style={{ animationDelay: "4s" }}>
            10101100
          </div>
          <div className="digital-bit absolute left-[60%] animate-float-bits" style={{ animationDelay: "5s" }}>
            01110001
          </div>
          <div className="digital-bit absolute left-[70%] animate-float-bits" style={{ animationDelay: "6s" }}>
            11001010
          </div>
          <div className="digital-bit absolute left-[80%] animate-float-bits" style={{ animationDelay: "7s" }}>
            00101101
          </div>
          <div className="digital-bit absolute left-[90%] animate-float-bits" style={{ animationDelay: "1.5s" }}>
            10011100
          </div>
          <div className="digital-bit absolute left-[15%] animate-float-bits" style={{ animationDelay: "2.5s" }}>
            01101011
          </div>
          <div className="digital-bit absolute left-[25%] animate-float-bits" style={{ animationDelay: "3.5s" }}>
            11100110
          </div>
          <div className="digital-bit absolute left-[35%] animate-float-bits" style={{ animationDelay: "4.5s" }}>
            00110101
          </div>
          <div className="digital-bit absolute left-[45%] animate-float-bits" style={{ animationDelay: "5.5s" }}>
            10010111
          </div>
          <div className="digital-bit absolute left-[55%] animate-float-bits" style={{ animationDelay: "6.5s" }}>
            01011001
          </div>
          <div className="digital-bit absolute left-[65%] animate-float-bits" style={{ animationDelay: "0.5s" }}>
            11101010
          </div>
        </div>

        {/* Inner container for text content, centered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-35px] md:mt-[-35px] relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 md:mb-12 balance-text">
            Cloud Tech I Thought I Understood
          </h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-base md:text-lg text-slate-200 mb-2">
              <span className="text-2xl mr-2 align-middle">📝</span>
              <strong className="font-semibold text-white align-middle">Why I write this:</strong>
            </p>
            <p className="font-sans text-base md:text-lg text-slate-200 leading-relaxed mb-4">
              Every Friday, I share what I've been learning about cloud—especially databases. Writing helps me think
              more clearly, and sharing it is my way of helping us all learn a little more, together.
            </p>
            <p className="font-sans text-sm md:text-base text-slate-300">— Mani HK</p>
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
