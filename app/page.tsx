import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Welcome to my website! I’m Djim, a passionate professional at the crossroads of coding, marketing, and analytics. I love turning data into insights, building scalable solutions, and crafting strategic campaigns that drive real impact. Explore my work and let’s connect!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
