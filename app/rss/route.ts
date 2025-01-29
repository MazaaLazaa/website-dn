import { baseUrl } from 'app/sitemap';
import { getBlogPosts } from 'app/blog/utils';

export async function GET() {
  let allBlogs = (await getBlogPosts()) || []; // Ensure it's an array

  const itemsXml = allBlogs
    .filter((post) => post && post.metadata && post.slug) // Prevent undefined errors
    .sort((a, b) => {
      const dateA = new Date(a.metadata?.publishedAt || 0);
      const dateB = new Date(b.metadata?.publishedAt || 0);
      return dateB - dateA;
    })
    .map((post) => {
      const title = post.metadata?.title || "Untitled";
      const slug = post.slug || "unknown-slug";
      const summary = post.metadata?.summary || "";
      const pubDate = post.metadata?.publishedAt
        ? new Date(post.metadata.publishedAt).toUTCString()
        : new Date().toUTCString();

      return `<item>
        <title>${title}</title>
        <link>${baseUrl || "https://defaulturl.com"}/blog/${slug}</link>
        <description>${summary}</description>
        <pubDate>${pubDate}</pubDate>
      </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl || "https://defaulturl.com"}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
