import PostCard from "@/app/components/post-card"
import { getPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <>
      {/* Full-width Hero Section with clean grey background */}
      <section
        id="home-hero-banner"
        className="min-h-screen w-full flex flex-col justify-center 
             bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300
             relative overflow-hidden -translate-y-[75px]"
      >
        {/* Inner container for text content, centered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-35px] md:mt-[-35px] relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-10 md:mb-12 balance-text">
            Cloud Tech <span className="animated-gradient-text">I Thought I Understood</span>
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
