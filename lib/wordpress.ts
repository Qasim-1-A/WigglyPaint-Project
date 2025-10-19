// lib/wordpress.ts

// Fetch all posts via your API proxy
export async function getAllPosts() {
  try {
    const res = await fetch("/api/posts"); // ✅ your proxy
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch a single post by slug directly from WordPress
