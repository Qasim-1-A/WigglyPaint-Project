export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    ['wp:featuredmedia']?: { source_url: string }[];
  };
}


export async function getAllPosts(): Promise<WPPost[]> {
  const res = await fetch("https://www.wigglypaint.tech/wp-json/wp/v2/posts?_embed", {
    cache: 'no-store', // revalidate every 60 sec
  });

  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost> {
  const res = await fetch(
    `https://www.wigglypaint.tech/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error("Failed to fetch post");
  const posts = await res.json();
  return posts[0];
}
