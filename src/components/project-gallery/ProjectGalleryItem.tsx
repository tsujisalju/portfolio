import { Project } from "../../lib/projects";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import React from "react";
import { FormattedDate } from "react-intl";
import { shimmer, toBase64 } from "../ImageSkeleton";

export default function ProjectGalleryItem({ project }: { project: Project }) {
  const [isShowing, setIsShowing] = React.useState<boolean>(true);
  function HandleOnClick() {
    setIsShowing(false);
  }
  return (
    <div
      className={
        project.id === "lumen" || project.id === "antiquity"
          ? "md:col-span-2 md:row-span-2"
          : project.id === "ultimatum"
          ? "md:col-span-4 md:row-span-2"
          : project.width > project.height
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
        scale={1.04}
        className={"parentParallax flex flex-auto flex-col relative "}
      >
        <div
          className={
            "transition shadow-sm duration-400 hover:shadow-xl " +
            (!isShowing ? "transform scale-95 ease-out" : " ease-in-out")
          }
        >
          <Link href={"/projects/" + project.id}>
            <a onClick={HandleOnClick}>
              <Image
                id={project.id}
                alt={project.id}
                className="transition duration-400 rounded-md"
                src={project.img}
                width={project.width / 2}
                height={project.height / 2}
                layout="responsive"
                placeholder="blur"
                blurDataURL={
                  `data:image/svg+xml;base64,${toBase64(
                    shimmer(project.width, project.height)
                  )}` /*img.replace(".jpg", "-placeholder.png")*/
                }
              ></Image>
            </a>
          </Link>
        </div>
        <div
          className={
            "md:childParallax sm:block md:absolute sm:bg-none md:backdrop-blur-md md:dark:bg-black/50 md:bg-white/50 md:py-3 md:px-5 md:m-4 m-1 rounded md:shadow-lg transition duration-400 transform "
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
