import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Djim, a results-driven professional with a deep passion for marketing, analytics, and coding. I thrive at the intersection of data-driven decision-making and creative problem-solving, leveraging my analytical expertise to uncover insights that drive business growth.
With a strong foundation in data analytics, I excel at transforming complex datasets into strategic recommendations. My background in coding ensures I can build scalable solutions, automate workflows, and optimize performance across digital platforms. In marketing, I blend analytical rigor with creative storytelling to craft compelling campaigns that resonate with audiences and deliver measurable impact.
I am always seeking opportunities where I can combine my technical skills and strategic mindset to create meaningful solutions. If you're looking for someone who brings both analytical precision and marketing vision, let's connect!
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
