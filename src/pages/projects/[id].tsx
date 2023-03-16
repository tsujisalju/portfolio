import Layout from "../../components/Layout";
import { ProjectData, getProjectData } from "../../lib/projects";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { useTheme } from "next-themes";
import path from "path";
import fs from "fs";
import { FormattedDate } from "react-intl";
import { shimmer, toBase64 } from "../../components/ImageSkeleton";
import { FadeIn } from "../../utilities/FadeIn";

const projectsDirectory = path.join(process.cwd(), "src/projects");

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const projectData: ProjectData = await getProjectData(
    params?.id as string,
    locale as string
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
      fs.readdirSync(projectsDirectory + "/" + locale)
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

  React.useEffect(() => {
    document.body.style.backgroundImage = `url(${projectData.img})`;
    document.body.className =
      (theme === "light" ? "bg-stone-100 " : "bg-stone-800 ") +
      "bg-fixed bg-center bg-cover backdrop-blur-lg bg-blend-overlay";
  }, [projectData.img, theme]);
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@smolpadok" />
        <meta name="twitter:title" content={projectData.title} />
        <meta name="twitter:description" content={excerpt} />
        <meta
          name="twitter:image"
          content={"https://portfolio-smolpadok.vercel.app" + projectData.img}
        />
        <meta property="og:title" content={projectData.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={"https://portfolio-smolpadok.vercel.app" + projectData.img}
        />
        <meta property="og:description" content={excerpt} />
      </Head>
      <Layout>
        <section
          className={"sm:container mx-auto grid grid-cols-1 " + (projectData.width < projectData.height && "lg:grid-cols-3")}
        >
          <div className="lg:col-span-2">

          <Image
            className="transition duration-500 ease-in-out shadow-lg"
            alt={projectData.title}
            src={projectData.img}
            width={projectData.width
            }
            height={projectData.height
            }
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(projectData.width, projectData.height)
            )}`}
          />
          </div>
          <div>
            <div className={"flex flex-col p-8 space-y-4 "}>
              <div className="flex flex-col space-y-2 mb-4">
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
              <hr className="opacity-20" />
              <div
                className="flex flex-col space-y-4 font-serif font-normal text-lg"
                dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
