import { shimmer, toBase64 } from "../ImageSkeleton";
import { FormattedDate } from "react-intl";
import Link from "next/link";
import { Project } from "../../lib/projects";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function ProjectGalleryItem({ project }: { project: Project }) {
  const [isShowing, setIsShowing] = React.useState<boolean>(false);
  return (
    <Link
      href={"/projects/" + project.id}
      className={
        "relative min-h-80 " +
        (project.height < project.width
          ? "sm:col-span-2"
          : project.height > project.width
          ? "sm:row-span-2"
          : "")
      }
    >
      <Tilt
        tiltReverse
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.04}
        style={{ backgroundImage: "url(" + project.img + ")" }}
        className="h-full w-full bg-cover bg-center rounded-md shadow-sm hover:shadow-lg hover:z-10 parallax-parent bg-black/10 "
        onEnter={() => {
          setIsShowing(true);
        }}
        onLeave={() => {
          setIsShowing(false);
        }}
      >
        <div
          className={
            "block md:absolute md:top-0 md:left-0 md:parallax-child bg-white/50 dark:bg-black/50 px-4 lg:px-5 py-3 md:rounded-md md:backdrop-blur md:shadow-lg transition duration-300 " +
            (isShowing ? "opacity-100" : "opacity-0")
          }
        >
          <div className="flex flex-row space-x-2 md:space-x-0 md:flex-col content-center">
            <h1 className="font-display text-xl md:text-2xl">
              {project.title}
            </h1>
            <p className="font-sans font-light">
              <FormattedDate
                value={project.date}
                day="numeric"
                month="long"
                year="numeric"
              />
            </p>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}
