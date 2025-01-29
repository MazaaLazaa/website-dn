import Link from 'next/link';

const projects = [
  {
    title: 'Pulaar - Afro-European Fashion Brand',
    description: 'A high-end unisex clothing brand with Afro-European influences.',
    link: 'https://pulaar.co',
    image: '/images/pulaar.png',
  },
  {
    title: 'Sophie Lukacs - Kora Player',
    description: 'Personal website for Sophie Lukacs, a talented kora player.',
    link: 'https://sophielukacs.com',
    image: '/images/sophie-lukacs.png',
  },
  {
    title: 'NBA Analytics Dashboard',
    description: 'An interactive dashboard for NBA data analysis using machine learning.',
    link: 'https://nba-analytics-demo.vercel.app',
    image: '/images/nba-dashboard.png',
  },
];

export function Work() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {projects.map(({ title, link }) => (
              <Link
                key={link}
                href={link}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <section className="py-12 bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">Websites I Developed</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}

export default Work;
