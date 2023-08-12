import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Project, getSortedProjectsData } from "../lib/projects";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Link from "next/link";
import ProjectGallery from "../components/project-gallery/ProjectGallery";

import React from "react";
import { useIntl } from "react-intl";
import { FadeIn } from "../utilities/FadeIn";
import { Parallax } from "react-scroll-parallax";

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
  const intl = useIntl();
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <FadeIn>
        <ProjectGallery projects={allProjectsData} />
      </FadeIn>
    </Layout>
  );
}
