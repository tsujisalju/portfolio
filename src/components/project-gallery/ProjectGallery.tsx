import { circOut, motion } from "motion/react";
import { Project } from "../../lib/projects";
import ProjectGalleryItem from "./ProjectGalleryItem";
import React from "react";

const itemVariants = {
  hidden: {
    opacity: 0,
    rotateY: 90,
  },
  visible: (index: number) => ({
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.2, delay: index * 0.05, easing: circOut },
  }),
};

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="px-4">
      <div className="md:px-8 mx-auto grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-dense auto-rows-fr">
        {projects.map((project: Project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial={"hidden"}
            animate={"visible"}
            variants={itemVariants}
            className={
              "min-h-80 hover:z-10 " +
              (project.height < project.width
                ? "sm:col-span-2"
                : project.height > project.width
                  ? "row-span-2"
                  : "")
            }
          >
            <ProjectGalleryItem project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
