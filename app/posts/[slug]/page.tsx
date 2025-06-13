import {
  getPostBySlug,
  generateStaticParams as generatePostSlugs,
  getAdjacentPosts,
  getRelatedPosts,
} from "@/lib/posts"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, ArrowLeft, ArrowRight } from "lucide-react"
import type { Post } from "@/lib/types"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return { title: "Post Not Found" }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return generatePostSlugs()
}

const ArticleNavigationBottom = ({
  adjacentPosts,
}: { adjacentPosts: Awaited<ReturnType<typeof getAdjacentPosts>> }) => {
  const commonLinkClasses =
    "text-sm font-sans text-brand-accent hover:text-brand-accentHover transition-colors flex items-center group"
  const wrapperClasses = "flex justify-between items-center py-4 mt-12 pt-8 border-t border-brand-lightBorder"

  if (!adjacentPosts.previous && !adjacentPosts.next) return null

  return (
    <nav className={wrapperClasses}>
      {adjacentPosts.previous ? (
        <Link href={`/posts/${adjacentPosts.previous.slug}`} className={commonLinkClasses}>
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Previous Article
        </Link>
      ) : (
        <div />
      )}
      {adjacentPosts.next ? (
        <Link href={`/posts/${adjacentPosts.next.slug}`} className={commonLinkClasses}>
          Next Article
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}

const RelatedPostsSection = ({ relatedPosts }: { relatedPosts: Post[] }) => {
  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-16 pt-12 border-t border-brand-lightBorder">
      <h2 className="text-2xl font-bold font-serif text-brand-heading mb-8 text-center">You might also like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {relatedPosts.map((post) => (
          <div key={post.slug} className="py-2">
            <h3 className="text-xl font-bold font-serif mb-1">
              <Link
                href={`/posts/${post.slug}`}
                className="text-brand-heading hover:text-brand-accent transition-colors"
              >
                {post.title}
              </Link>
            </h3>
            <p className="text-xs text-brand-mutedText font-sans">
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const adjacentPosts = await getAdjacentPosts(params.slug)
  const relatedPosts = await getRelatedPosts(params.slug, 2)

  // Approximate header height for padding.
  // Values based on header's py-2 sm:py-3 and text-lg sm:text-xl
  const headerHeightApproximation = "pt-[56px] sm:pt-[64px]"

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`max-w-2xl lg:max-w-3xl mx-auto ${headerHeightApproximation} pb-12 md:pb-20`}>
        <article>
          <header className="mb-10 md:mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-brand-heading mb-6 leading-tight balance-text">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-brand-mutedText space-x-4 sm:space-x-6 font-sans">
              <div className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <span>By {post.author.name}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <ArticleNavigationBottom adjacentPosts={adjacentPosts} />
        <RelatedPostsSection relatedPosts={relatedPosts} />
      </div>
    </div>
  )
}
