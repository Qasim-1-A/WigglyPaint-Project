// app/api/posts/route.ts
export async function GET() {
  try {
    const res = await fetch("http://wp.wigglypaint.tech/wp-json/wp/v2/posts?_embed", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Proxy fetch error:", error);
    return Response.json({ error: "Failed to load posts" }, { status: 500 });
  }
}
