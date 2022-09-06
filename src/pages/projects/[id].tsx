import Link from "next/link";
import Layout from "../../components/Layout";
import { getProjectData, ProjectData } from "../../lib/projects";
import { GetStaticProps, GetStaticPaths } from "next";
import Date from "../../components/Date";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { useTheme } from "next-themes";
import path from "path";
import fs from "fs";

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
  const fileNames = fs.readdirSync(projectsDirectory);
  console.log(fileNames);
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
        <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center">
          <div>
            <Image
              className="transition duration-500 ease-in-out"
              alt={projectData.title}
              src={projectData.img}
              width={projectData.width}
              height={projectData.height}
              placeholder="blur"
              blurDataURL={projectData.img.replace(".jpg", "-placeholder.png")}
            />
          </div>
          <div>
            <div className="flex flex-col p-8 space-y-4 lg:w-[500px]">
              <Link href="/">
                <a className="font-sans">Back to home</a>
              </Link>
              <div className="flex flex-col space-y-2 mb-4">
                <h1 className="font-serif text-5xl lg:text-6xl ">
                  {projectData.title}
                </h1>
                <Date dateString={projectData.date} />
              </div>
              <div
                className="flex flex-col space-y-4 text-lg"
                dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
