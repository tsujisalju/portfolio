import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getSortedProjectsData } from "../lib/projects";
import Date from "../components/Date";
import ProjectGallery from "../components/ProjectGallery";
import Hero from "../components/Hero";

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
  return (
    <Layout>
      <Hero />
      <ProjectGallery allProjectsData={allProjectsData} />
    </Layout>
  );
}
