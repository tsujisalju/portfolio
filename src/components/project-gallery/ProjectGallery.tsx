import { Project } from "../../lib/projects";
import ProjectGalleryItem from "./ProjectGalleryItem";
import React from "react";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="px-6">
      <div className="grid grid-flow-dense gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project: Project) => (
          <ProjectGalleryItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
