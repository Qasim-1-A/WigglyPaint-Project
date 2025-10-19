import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const queryParams = url.searchParams.toString();

    // WordPress API base URL
    const wpDomain: string = "http://wp.wigglypaint.tech";
    const wpUrl: string = wpDomain + "/wp-json/wp/v2/posts";

    // Build full URL safely
    let fullUrl: string;
    if (queryParams) {
      fullUrl = wpUrl + "?" + queryParams + "&_embed";
    } else {
      fullUrl = wpUrl + "?_embed";
    }

    // Fetch posts
    const response = await fetch(fullUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch posts" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}