import { workProjects, sideProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [...workProjects, ...sideProjects]; // combine named exports

  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      {/* Stretch items so cards in the same row share height */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

