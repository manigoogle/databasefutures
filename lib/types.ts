export interface Post {
  slug: string
  title: string
  date: string // Keep as YYYY-MM-DD for sorting
  excerpt: string
  content: string
  imageUrl?: string // Optional, as per new requirements
  author: {
    name: string
    // avatarUrl?: string // Removed
  }
}

export interface AdjacentPosts {
  previous: Post | null
  next: Post | null
}
