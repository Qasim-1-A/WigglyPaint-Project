export async function getAllPosts() {
  try {
    const res = await fetch("https://www.wigglypaint.tech/wp-json/wp/v2/posts?_embed", {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return []; // return empty list instead of crashing
  }
}
export async function getPostBySlug(slug: string) {
  const res = await fetch(`https://wigglypaint.tech/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  const posts = await res.json();
  return posts?.length ? posts[0] : null;
}
