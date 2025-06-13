import Link from "next/link"
import type { Post } from "@/lib/types"
import { CalendarDays } from "lucide-react"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="py-8 border-b border-brand-lightBorder last:border-b-0">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center text-xs text-brand-mutedText mb-2 font-sans space-x-1">
          <CalendarDays size={13} className="inline-block mr-0.5" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-3 leading-tight">
          {" "}
          {/* Changed to font-serif and font-bold */}
          <Link href={`/posts/${post.slug}`} className="text-brand-heading hover:text-brand-accent transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="font-sans text-brand-text text-base leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>{" "}
        {/* Ensure excerpt is sans-serif */}
        <Link
          href={`/posts/${post.slug}`}
          className="text-sm font-sans font-medium text-brand-accent hover:text-brand-accentHover transition-colors group"
        >
          Read article{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  )
}
