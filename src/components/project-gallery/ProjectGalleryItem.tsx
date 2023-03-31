import { shimmer, toBase64 } from "../ImageSkeleton";
import { FormattedDate } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../lib/projects";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function ProjectGalleryItem({ project }: { project: Project }) {
  const [isShowing, setIsShowing] = React.useState<boolean>(true);
  function HandleOnClick() {
    setIsShowing(false);
  }
  return (
    <div
      className={
        project.id === "ultimatum" || project.id === "tailwind"
          ? "md:col-span-2 lg:col-span-3 xl:col-span-4  md:row-span-2"
          : project.width > project.height ||
            project.id === "khatvanga" ||
            project.id === "mirth"
          ? "md:col-span-2"
          : project.width < project.height
          ? "md:row-span-2"
          : ""
      }
    >
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        tiltReverse
        scale={1.03}
        className={"parentParallax flex flex-auto flex-col relative "}
      >
        <Link href={"/projects/" + project.id} onClick={HandleOnClick}>
          <Image
            id={project.id}
            alt={project.id}
            className={
              "transition shadow-sm hover:shadow-xl duration-400 rounded-md " +
              (!isShowing ? "transform scale-95 ease-out" : "ease-in-out")
            }
            src={project.img}
            width={project.width}
            height={project.height}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(project.width, project.height)
            )}`}
          ></Image>
        </Link>
        <div
          className={
            "md:childParallax block md:absolute bg-none md:backdrop-blur-md md:dark:bg-black/50 md:bg-white/50 md:py-3 md:px-5 md:m-4 m-1 rounded md:shadow-lg transition duration-400 transform "
          }
        >
          <h1 className="font-display md:text-2xl text-xl">{project.title}</h1>

          <div className="font-sans font-lg font-light">
            <FormattedDate
              value={project.date}
              day={"numeric"}
              month={"long"}
              year={"numeric"}
            />
          </div>
        </div>
      </Tilt>
    </div>
  );
}
