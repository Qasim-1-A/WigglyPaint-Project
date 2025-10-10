import type { Metadata, ResolvingMetadata } from 'next'
import { getPostBySlug } from '../../../lib/wordpress'

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Not Found' }
  return { title: post.title.rendered }
}

type SegmentParams = { slug: string }

// The key: accept params as Promise<SegmentParams> or SegmentParams directly
type PageProps = {
  params?: SegmentParams | Promise<SegmentParams>
  searchParams?: any // or Promise<any> if you want to support async searchParams
}

export default async function Page({ params }: PageProps) {
  // await if params is a promise
  const resolvedParams = params instanceof Promise ? await params : params

  if (!resolvedParams) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-2xl font-semibold text-red-600">Invalid Params</h2>
      </main>
    )
  }

  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-2xl font-semibold text-red-600">404 - Post Not Found</h2>
      </main>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose dark:prose-invert">
      <header>
        <h2 className="mb-2 text-3xl font-bold">{post.title.rendered}</h2>
      </header>

      <section dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  )
}
