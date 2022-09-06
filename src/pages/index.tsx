import Layout from "../components/Layout";
import ProjectGallery from "../components/ProjectGallery";
import Hero from "../components/Hero";
import React from "react";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getSortedProjectsData, Project } from "../lib/projects";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allProjectsData: Project[] = getSortedProjectsData(locale as string);
  return {
    props: {
      allProjectsData,
    },
  };
};

export default function Home({
  allProjectsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <Hero />
      <ProjectGallery projects={allProjectsData} />
    </Layout>
  );
}
