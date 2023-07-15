import ProjectGalleryItem from "./ProjectGalleryItem";
import { Project } from "../../lib/projects";
import React from "react";
import { FadeIn } from "../../utilities/FadeIn";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="px-8">
      <FadeIn>
        <div className="md:container mx-auto grid grid-flow-dense gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects.map((project: Project) => (
            <ProjectGalleryItem key={project.id} project={project} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
