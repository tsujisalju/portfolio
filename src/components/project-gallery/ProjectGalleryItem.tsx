import { shimmer, toBase64 } from "../ImageSkeleton";
import { FormattedDate } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../lib/projects";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

export default function ProjectGalleryItem({ project }: { project: Project }) {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  return (
    <Link
      scroll={false}
      href={"/projects/" + project.id}
      className={
        "min-h-80 hover:z-10 " +
        (project.height < project.width
          ? "sm:col-span-2"
          : project.height > project.width
            ? "row-span-2"
            : "")
      }
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        tiltReverse
        scale={1.03}
        className={"relative h-full w-full md:parallax-parent "}
      >
        <Image
          id={project.id}
          alt={project.id}
          className={
            "shadow-sm hover:shadow-xl rounded-md object-cover object-center"
          }
          src={project.img}
          fill
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(project.width, project.height),
          )}`}
        ></Image>
        <div
          className={
            "absolute overflow-hidden border-solid border border-black/20 dark:border-white/20 w-full bottom-0 rounded-b-md md:rounded-none md:bottom-auto md:w-auto md:parallax-child bg-white/50 dark:bg-black/50 px-4 lg:px-5 py-3 md:backdrop-blur md:shadow-lg transition duration-300 " +
            (isShowing ? "md:opacity-100" : "md:opacity-0")
          }
        >
          <div className="flex flex-row space-x-2 md:space-x-0 md:flex-col content-center">
            <div className="hidden md:inline absolute h-8 w-8 -bottom-4 -right-4 rotate-45 bg-black dark:bg-white opacity-20"></div>
            <h1 className="font-display md:text-2xl text-xl">
              {project.title}
            </h1>

            <p className="font-sans font-lg font-light">
              <FormattedDate
                value={project.date}
                day={"numeric"}
                month={"long"}
                year={"numeric"}
              />
            </p>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}
