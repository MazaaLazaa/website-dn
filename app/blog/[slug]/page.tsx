import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { baseUrl } from 'app/sitemap';

export async function generateStaticParams() {
  let posts = (await getBlogPosts()) || []; // Ensure posts is an array

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let posts = getBlogPosts() || []; // Ensure posts is an array
  let post = posts.find((post) => post.slug === params.slug);

  if (!post || !post.metadata) {
    return {};
  }

  let {
    title = 'Untitled Post',
    publishedAt: publishedTime = new Date().toISOString(),
    summary: description = '',
    image,
  } = post.metadata;

  let ogImage = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let posts = getBlogPosts() || []; // Ensure posts is an array
  let post = posts.find((post) => post.slug === params.slug);

  if (!post || !post.metadata) {
    return notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title || 'Untitled Post',
            datePublished: post.metadata.publishedAt || new Date().toISOString(),
            dateModified: post.metadata.publishedAt || new Date().toISOString(),
            description: post.metadata.summary || '',
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title || 'Untitled Post')}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title || 'Untitled Post'}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt || new Date().toISOString())}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content || ''} />
      </article>
    </section>
  );
}
