import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Pulaar - Afro-European Fashion Brand",
    description: "A high-end unisex clothing brand with Afro-European influences.",
    link: "https://pulaar.co",
    image: "/images/pulaar.png",
  },
  {
    title: "Sophie Lukacs - Kora Player",
    description: "Personal website for Sophie Lukacs, a talented kora player.",
    link: "https://sophielukacs.com",
    image: "/images/sophie-lukacs.png",
  },
  {
    title: "NBA Analytics Dashboard",
    description: "An interactive dashboard for NBA data analysis using machine learning.",
    link: "https://nba-analytics-demo.vercel.app",
    image: "/images/nba-dashboard.png",
  },
];

export default function Work() {
  return (
    <Layout>
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
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
