import Image from "next/image";
import Link from "next/link";
import { Project } from "../lib/projects";
import Date from "./Date";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#555" offset="20%" />
      <stop stop-color="#444" offset="50%" />
      <stop stop-color="#555" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#444" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="px-4">
      <div className="grid grid-flow-dense gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className={
              "flex flex-1 flex-col relative " +
              (project.id === "lumen" || project.id === "peer"
                ? "md:col-span-2 md:row-span-2"
                : project.width > project.height
                ? "md:col-span-2"
                : project.width < project.height
                ? "md:row-span-2"
                : "")
            }
          >
            <div className="transition duration-400 ease-in-out  hover:scale-[1.03] shadow-sm hover:shadow-lg">
              <Link href={"/projects/" + project.id}>
                <a>
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
            <div className="sm:block md:absolute sm:bg-none md:backdrop-blur-md md:dark:bg-black/50 md:bg-white/50 md:py-2 md:px-4 m-2 rounded">
              <h1 className="font-serif md:text-2xl text-xl">
                {project.title}
              </h1>
              <Date dateString={project.date}></Date>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
