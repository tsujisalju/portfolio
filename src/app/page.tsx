import Link from "next/link";
import { getZettelkasten } from "../lib/zettelkasten";
import { getSortedProjectsData } from "../lib/projects";
import Image from "next/image";
import { karla } from "../lib/fonts";

export default async function Page() {
  const zettels = getZettelkasten();
  const projects = getSortedProjectsData("en-US");

  return (
    <main className={`h-[1500px] ${karla.variable}`}>
      <div className="relative">
        <Image
          className="-z-10 opacity-50"
          src={projects[37].img}
          fill
          alt=""
          style={{ objectFit: "cover" }}
        />
        <div className="container relative mx-auto max-w-6xl flex flex-1 flex-col p-16 py-28 xl:px-0 space-y-4">
          <div>
            <h1 className="font-display text-4xl">
              Hold power to fate. Hold faith in the fated.
            </h1>
          </div>
          <div>
            <p className="font-sans text-lg">
              I&apos;m Qayyum, a frontend developer and designer based in
              Johore, Malaysia.
            </p>
            <p className="font-sans text-lg">
              In a sea of conflict and convolution, I seek solace in the few
              things I have left.
            </p>
          </div>
          <div className="flex flex-row pt-4 space-x-3">
            <Link
              href={"https://github.com/purrnama"}
              target={"_blank"}
              className={
                "text-stone-700 hover:text-stone-800 dark:text-stone-300 hover:dark:text-stone-200 transition duration-200"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </Link>
            <Link
              href={"https://twitter.com/purrnama__"}
              target={"_blank"}
              className={
                "text-stone-700 hover:text-stone-800 dark:text-stone-300 hover:dark:text-stone-200 transition duration-200"
              }
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full pt-16 pb-8">
        <div className="mx-auto max-w-6xl pb-6">
          <h1 className="font-display text-3xl">Latest Artworks</h1>
        </div>
        <div className="bg-stone-200 dark:bg-stone-950 dark:bg-opacity-50 px-1 py-2">
          <div className="relative flex flex-row flex-nowrap h-[400px] overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-[200px] bg-gradient-to-l from-stone-100 dark:from-stone-950" />

            {projects.slice(0, 4).map((project) => (
              <Image
                key={project.id}
                src={project.img}
                alt={project.id}
                width={project.width}
                height={project.height}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full py-8">
        <div className="mx-auto max-w-6xl pb-6">
          <h1 className="font-display text-3xl">Latest Entries</h1>
        </div>
        <div className="relative w-full bg-stone-200 dark:bg-stone-950 dark:bg-opacity-50 px-1 py-2 overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-[200px] bg-gradient-to-l from-stone-100 dark:from-stone-950"></div>
          <div className="flex flex-nowrap gap-1">
            {zettels.slice(0, 4).map((zettel) => (
              <div
                className="bg-stone-50 dark:bg-stone-900 px-8 py-6 rounded-lg flex flex-col flex-none gap-1 shadow-md"
                key={zettel.id}
              >
                <p className="font-sans font-light text-sm">{zettel.id}</p>
                <h1 className="font-sans font-bold text-xl">{zettel.title}</h1>
                <p className="font-sans text-md mt-4">
                  {zettel.excerpt + "..."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
