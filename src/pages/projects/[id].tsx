import { GetStaticPaths, GetStaticProps } from "next";
import { ProjectData, getProjectData } from "../../lib/projects";
import React, { useState } from "react";
import { shimmer, toBase64 } from "../../components/ImageSkeleton";
import { FormattedDate } from "react-intl";
import GeoDiv from "../../components/GeoDiv";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import { useTheme } from "next-themes";

const projectsDirectory = path.join(process.cwd(), "src/projects");

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const projectData: ProjectData = await getProjectData(
    params?.id as string,
    locale as string,
  );
  return {
    props: {
      projectData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let collectPath: string[] = [];
  locales?.map((locale) => {
    collectPath = collectPath.concat(
      fs.readdirSync(projectsDirectory + "/" + locale),
    );
  });
  const fileNames = collectPath;
  const paths: {
    params: {
      id: string;
    };
    locale: string;
  }[] = [];

  fileNames.map((filename) => {
    locales?.map((locale) => {
      paths.push({ params: { id: filename.replace(/\.md$/, "") }, locale });
    });
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export default function Project({ projectData }: { projectData: ProjectData }) {
  const paragraphs = projectData.contentHtml.split("</p>");
  const excerpt = paragraphs[0] + "</p>";
  const { theme } = useTheme();
  const [isVideoMode, setIsVideoMode] = useState<boolean>(false);

  React.useEffect(() => {
    document.body.style.backgroundImage = `url(${projectData.img})`;
    document.body.className =
      (theme === "light" ? "bg-stone-100 " : "bg-stone-800 ") +
      "bg-fixed bg-center bg-cover backdrop-blur-lg bg-blend-overlay";
  }, [projectData.img, theme]);

  React.useEffect(() => {
    if (isVideoMode) {
      const vid: HTMLVideoElement = document.getElementById(
        "timelapse",
      ) as HTMLVideoElement;
      vid.volume = 0.3;
    }
  }, [isVideoMode]);

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@smolpadok" />
        <meta name="twitter:title" content={projectData.title} />
        <meta name="twitter:description" content={excerpt} />
        <meta
          name="twitter:image"
          content={"https://tsujisalju.dev" + projectData.img}
        />
        <meta property="og:title" content={projectData.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={"https://tsujisalju.dev" + projectData.img}
        />
        <meta property="og:description" content={excerpt} />
      </Head>
      <Layout disableMeta>
        <section
          className={
            "sm:container mx-auto grid grid-cols-1 gap-4 " +
            (projectData.width <= projectData.height && "lg:grid-cols-5")
          }
        >
          <div className="lg:col-span-3 relative">
            {projectData.vid && (
              <button
                className="absolute top-0 right-0 m-4 p-4 rounded-full bg-stone-50 shadow-lg z-10"
                onClick={() => setIsVideoMode((prev) => !prev)}
              >
                {isVideoMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 text-stone-900"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 text-stone-900"
                  >
                    <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                  </svg>
                )}
              </button>
            )}
            {isVideoMode && (
              <video
                id="timelapse"
                className="absolute"
                width={projectData.width}
                height={projectData.height}
                controls
                controlsList="nodownload"
                autoPlay
              >
                <source src={projectData.vid} type="video/mp4" />
              </video>
            )}
            <Image
              className="transition duration-500 ease-in-out shadow-lg"
              alt={projectData.title}
              src={projectData.img}
              width={projectData.width}
              height={projectData.height}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(projectData.width, projectData.height),
              )}`}
            />
          </div>
          <GeoDiv className="lg:col-span-2 h-max" border corner>
            <div className={"flex flex-col p-8 gap-4 "}>
              <div className="flex flex-col gap-2 mb-4">
                <h1 className="font-display text-5xl lg:text-6xl ">
                  {projectData.title}
                </h1>
                <div className="font-sans font-light font-lg">
                  <FormattedDate
                    value={projectData.date}
                    day={"numeric"}
                    month={"long"}
                    year={"numeric"}
                  />
                </div>
              </div>
              <hr className="text-black dark:text-white opacity-20" />
              <div
                className="flex flex-col gap-4 font-serif font-normal text-lg"
                dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
              />
            </div>
          </GeoDiv>
        </section>
      </Layout>
    </>
  );
}
