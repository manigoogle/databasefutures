"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trash2, Edit, Plus, Save, X } from "lucide-react"
import type { Post } from "@/lib/types"

// Mock data for existing posts (in a real app, this would come from a database)
const mockPosts = [
  {
    slug: "demystifying-kubernetes-objects",
    title: "Demystifying Kubernetes Objects: A Beginner's Guide",
    date: "2025-06-10",
    excerpt:
      "Pods, Services, Deployments, Oh My! Understanding the fundamental building blocks of Kubernetes can be daunting. This guide breaks them down.",
    content: `<p>Kubernetes, the de facto container orchestrator, has a rich set of objects that define the state of your applications...</p>`,
    author: { name: "Mani HK" },
  },
  {
    slug: "serverless-vs-containers-choosing-right",
    title: "Serverless vs. Containers: Choosing the Right Tool for the Job",
    date: "2025-05-22",
    excerpt:
      "The cloud offers powerful paradigms: serverless functions and container orchestration. When should you use which? A practical comparison.",
    content: `<p>In the world of cloud-native development, 'serverless' and 'containers' are two dominant approaches...</p>`,
    author: { name: "Mani HK" },
  },
]

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [isCreating, setIsCreating] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
  })

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingPost) {
      // Update existing post
      setPosts(
        posts.map((post) =>
          post.slug === editingPost.slug
            ? {
                ...post,
                title: formData.title,
                excerpt: formData.excerpt,
                content: formData.content,
                date: formData.date,
                slug: generateSlug(formData.title),
              }
            : post,
        ),
      )
      setEditingPost(null)
    } else {
      // Create new post
      const newPost: Post = {
        slug: generateSlug(formData.title),
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        date: formData.date,
        author: { name: "Mani HK" },
      }
      setPosts([newPost, ...posts])
      setIsCreating(false)
    }

    // Reset form
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
    })
  }

  const handleEdit = (post: Post) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
    })
    setIsCreating(true)
  }

  const handleDelete = (slug: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.slug !== slug))
    }
  }

  const handleCancel = () => {
    setIsCreating(false)
    setEditingPost(null)
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Admin</h1>
          <p className="text-gray-600">Manage your blog posts and content</p>
        </div>

        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="posts">All Posts</TabsTrigger>
            <TabsTrigger value="create">{editingPost ? "Edit Post" : "Create Post"}</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Published Posts ({posts.length})</h2>
              <Button onClick={() => setIsCreating(true)} className="bg-brand-accent hover:bg-brand-accentHover">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="grid gap-4">
              {posts.map((post) => (
                <Card key={post.slug} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{post.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-500 mb-2">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </CardDescription>
                        <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(post.slug)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        /{post.slug}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {post.author.name}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>{editingPost ? "Edit Post" : "Create New Post"}</CardTitle>
                <CardDescription>
                  {editingPost ? "Update your blog post content and settings" : "Add a new blog post to your site"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Post Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter post title..."
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Publish Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Brief description of the post..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content (WYSIWYG)</Label>
                    <div className="border rounded-md">
                      <div className="bg-gray-50 px-3 py-2 border-b text-sm text-gray-600">
                        Rich Text Editor - Paste formatted content here
                      </div>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Paste your rich formatted content here. You can include HTML tags for formatting..."
                        rows={15}
                        className="border-0 resize-none focus:ring-0 font-mono text-sm"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Tip: You can paste HTML content directly, or write in HTML format. Use tags like &lt;p&gt;,
                      &lt;h2&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt; etc.
                    </p>
                  </div>

                  {formData.title && (
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>URL Slug:</strong> /posts/{generateSlug(formData.title)}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="bg-brand-accent hover:bg-brand-accentHover">
                      <Save className="w-4 h-4 mr-2" />
                      {editingPost ? "Update Post" : "Publish Post"}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleCancel}>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
