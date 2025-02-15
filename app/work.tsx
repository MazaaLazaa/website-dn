export default function WorkPage() {
  const projects = [
    {
      name: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://project1.com',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://project2.com',
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
