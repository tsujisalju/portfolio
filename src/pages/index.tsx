import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import { getSortedProjectsData } from "../libs/projects";
import Date from "../components/Date";
import ProjectGallery from "../components/ProjectGallery";
import Hero from "../components/Hero";
import React from "react";

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default function Home({
  allProjectsData,
}: {
  allProjectsData: {
    date: string;
    title: string;
    id: string;
    img: string;
    width: number;
    height: number;
  }[];
}) {
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <Hero />
      <ProjectGallery allProjectsData={allProjectsData} />
    </Layout>
  );
}
