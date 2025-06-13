import PostCard from "@/app/components/post-card"
import { getPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <>
      {/* Full-width Hero Section - position remains translated up */}
      <section
        id="home-hero-banner"
        className="min-h-screen w-full flex flex-col justify-center 
                   bg-gradient-to-br from-brand-geminiGradientStart via-brand-geminiGradientVia to-brand-geminiGradientEnd
                   relative overflow-hidden -translate-y-[75px]"
      >
        {/* Inner container for text content, centered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-35px] md:mt-[-35px]">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-heading mb-10 md:mb-12 balance-text">
            Cloud technologies I thought I understood
          </h1>
          <div className="max-w-2xl mx-auto text-left">
            <p className="font-sans text-base md:text-lg text-brand-text mb-2">
              <span className="text-2xl mr-2 align-middle">📝</span>
              <strong className="font-semibold text-brand-heading align-middle">Why I write this:</strong>
            </p>
            <p className="font-sans text-base md:text-lg text-brand-text leading-relaxed mb-4">
              Every Friday, I share what I’ve been learning about cloud—especially databases. Writing helps me think
              more clearly, and sharing it is my way of helping us all learn a little more, together. I hope this sparks
              discussions within the team about our product and technology.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-mutedText text-right">— Mani HK</p>
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
