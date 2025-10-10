// app/blog/page.tsx

import { Key } from 'react'
import { getAllPosts } from '../../lib/wordpress'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const POSTS_PER_PAGE = 5
  const posts = await getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  const currentPage = 1
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      {initialDisplayPosts.map((post: { id: Key | null | undefined; slug: any; title: { rendered: any }; excerpt: { rendered: any } }) => (
        <div key={post.id} className="mb-10 border-b pb-4">
          <a href={`/blog/${post.slug}`}>
            <h2
              className="text-2xl font-semibold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </a>
          <div
            className="text-gray-600 mt-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      ))}

      {/* Pagination UI (you can enhance this later) */}
      {totalPages > 1 && (
        <div className="mt-10 text-center">
          <a
            href={`/blog/page/2`}
            className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Next Page →
          </a>
        </div>
      )}
    </main>
  )
}
