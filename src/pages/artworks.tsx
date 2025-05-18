import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Project, getSortedProjectsData } from "../lib/projects";
import GeoDiv from "../components/GeoDiv";
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
      <div className="lg:container mx-auto text-center">
        <GeoDiv
          className="px-4 py-6 my-8 mx-4 md:mx-8 lg:mt-0"
          bordery
          corner
          cornersize="large"
        >
          <div className="hidden md:inline absolute aspect-square rotate-45 inset-y-0 left-6 border-solid border border-black/20 dark:border-white/20"></div>
          <div className="hidden md:inline absolute aspect-square rotate-45 inset-y-0 right-6 border-solid border border-black/20 dark:border-white/20"></div>
          <h1 className="font-display text-3xl">
            {intl.formatMessage({ id: "Artworks" })}
          </h1>
          <p className="font-sans">
            {intl.formatMessage(
              {
                id: "A picture paints a thousand words. Here, there are {value} words.",
                defaultMessage:
                  "A picture paints a thousand words. Here, there are {value} words.",
              },
              { value: allProjectsData.length * 1000 },
            )}
          </p>
        </GeoDiv>
      </div>
      <div className="lg:container mx-auto">
        <ProjectGallery projects={allProjectsData} />
      </div>
    </Layout>
  );
}
