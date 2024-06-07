import React from "react";
import reactLogo from "../assets/images/logos/react.png";
import sparks from "../assets/images/logos/sparks.png";

const projects = [
  {
    name: "News Feed App",
    description: "Currating news feed for a variety of sources",
    link: "https://github.com/veryobinna/news-feed-app",
    logo: reactLogo,
  },
  {
    name: "Document manager",
    description: "Organise personal documents",
    link: "https://github.com/veryobinna/doc-mgt",
    logo: reactLogo,
  },
  {
    name: "New Sentiment analysis",
    description: "Real-time news sentiment analysis.",
    link: "https://github.com/veryobinna/NewsSentimentAnalysis",
    logo: sparks,
  },
  {
    name: "Water and Air pollution analysis",
    description:
      "The operating system that powers our Planetaria space shuttles.",
    link: "https://github.com/veryobinna/case-studies-project",
    logo: sparks,
  },
];

const ProjectCard = ({ project }) => (
  <div className="flex flex-col items-center text-center p-4">
    <img
      src={project.logo}
      alt={`${project.name} logo`}
      className="w-12 h-12 mb-4"
    />
    <a href={project.link} className="text-blue-500">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
    </a>
    <p className="text-sm mb-4">{project.description}</p>
  </div>
);

const Project = () => (
  <section
    id="projects"
    className="min-h-screen bg-gray-50 p-8 max-w-6xl mx-auto"
  >
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-lg">Here are some of my public projects</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
);

export default Project;
