// app/blog/[slug]/page.tsx

import { getPostBySlug } from '../../../lib/wordpress'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic' // Always fetch fresh data (no caching)

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title.rendered,
    description: post.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, '') || '',
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, '') || '',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: post.title.rendered,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <main className="prose lg:prose-xl mx-auto py-10 px-4">
      <h1
        className="text-4xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="blog-content"
      />
    </main>
  )
}
