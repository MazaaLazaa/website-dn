import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'content/blog')
  
  try {
    // Ensure the directory exists
    if (!fs.existsSync(blogDir)) {
      console.warn('Blog directory does not exist')
      return []
    }

    // Read all files in the blog directory
    const files = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))

    const posts = files.map(filename => {
      const slug = filename.replace(/\.mdx?$/, '')
      const fullPath = path.join(blogDir, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: {
          title: data.title || 'Untitled',
          publishedAt: data.publishedAt || new Date().toISOString(),
          summary: data.summary || '',
          ...data
        },
        content
      }
    }).sort((a, b) => 
      new Date(b.metadata.publishedAt).getTime() - 
      new Date(a.metadata.publishedAt).getTime()
    )

    return posts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
