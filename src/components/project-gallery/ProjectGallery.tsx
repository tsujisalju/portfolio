import ProjectGalleryItem from "./ProjectGalleryItem";
import { Project } from "../../lib/projects";
import React from "react";
import { FadeIn } from "../../utilities/FadeIn";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  let shuffled = projects
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return (
    <section className="px-4">
      <FadeIn>
        <div className="md:px-8 mx-auto grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-dense auto-rows-fr">
          {projects.map((project: Project) => (
            <ProjectGalleryItem key={project.id} project={project} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
