import ProjectGalleryItem from "./ProjectGalleryItem";
import { Project } from "../../lib/projects";
import React from "react";
import { FadeIn } from "../../utilities/FadeIn";
import Tilt from "react-parallax-tilt";
import { FormattedDate } from "react-intl";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="px-4">
      <FadeIn>
        <div className="md:px-8 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr grid-flow-dense">
          {projects.map((project: Project) => (
            <ProjectGalleryItem key={project.id} project={project} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
