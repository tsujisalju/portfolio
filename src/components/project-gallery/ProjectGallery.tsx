import { Project } from "../../lib/projects";
import ProjectGalleryItem from "./ProjectGalleryItem";
import React from "react";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="px-4">
      <div className="md:px-8 mx-auto grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-dense auto-rows-fr">
        {projects.map((project: Project) => (
          <ProjectGalleryItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
