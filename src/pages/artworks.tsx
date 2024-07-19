import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Project, getSortedProjectsData } from "../lib/projects";
import { FadeIn } from "../utilities/FadeIn";
import Layout from "../components/Layout";
import ProjectGallery from "../components/project-gallery/ProjectGallery";
import { useEffect } from "react";
import { useIntl } from "react-intl";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allProjectsData: Project[] = getSortedProjectsData(locale as string);
  return {
    props: {
      allProjectsData,
    },
  };
};

export default function Artworks({
  allProjectsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intl = useIntl();
  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <FadeIn>
        <div className="mx-auto text-center">
          <div className="relative px-4 py-6 my-8 mx-4 md:mx-8 lg:mx-12 border-solid border-y border-black/20 dark:border-white/20 overflow-hidden">
            <div className="absolute h-8 w-8 -top-4 -right-4 rotate-45 bg-black/20 dark:bg-white/20"></div>
            <div className="absolute h-8 w-8 -top-4 -left-4 rotate-45 bg-black/20 dark:bg-white/20"></div>
            <div className="absolute h-8 w-8 -bottom-4 -right-4 rotate-45 bg-black/20 dark:bg-white/20"></div>
            <div className="absolute h-8 w-8 -bottom-4 -left-4 rotate-45 bg-black/20 dark:bg-white/20"></div>
            <div className="hidden md:inline absolute aspect-square rotate-45 inset-y-0 left-6 border-solid border border-black/20 dark:border-white/20"></div>
            <div className="hidden md:inline absolute aspect-square rotate-45 inset-y-0 right-6 border-solid border border-black/20 dark:border-white/20"></div>
            <h1 className="font-display text-3xl">
              {intl.formatMessage({ id: "Artworks" })}
            </h1>
            <p className="font-sans text-lg">
              {intl.formatMessage(
                {
                  id: "A picture paints a thousand words.",
                  defaultMessage:
                    "A picture paints a thousand words. Here, there are {value} words.",
                },
                { value: allProjectsData.length * 1000 },
              )}
            </p>
          </div>
        </div>
        <ProjectGallery projects={allProjectsData} />
      </FadeIn>
    </Layout>
  );
}
