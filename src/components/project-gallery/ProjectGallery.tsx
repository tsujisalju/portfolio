import ProjectGalleryItem from "./ProjectGalleryItem";
import { Project } from "../../lib/projects";
import React from "react";
import { FadeIn } from "../../utilities/FadeIn";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="md:px-12 px-6">
      <FadeIn>
        <div className="grid grid-flow-dense gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project: Project) => (
            <ProjectGalleryItem key={project.id} project={project} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
