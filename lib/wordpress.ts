// lib/wordpress.ts
export async function getAllPosts(): Promise<any[]> {
  try {
    const res = await fetch("/api/posts", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    return data || [];
  } catch (err: unknown) {
    console.error("Error fetching posts:", err);
    return [];
  }
}
