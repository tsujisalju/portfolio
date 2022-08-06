import Layout from "../../components/Layout";
import Link from "next/link";
import { getSortedProjectsData } from "../../lib/projects";
import { GetStaticProps } from "next";
import ProjectGallery from "../../components/ProjectGallery";

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default function Projects({
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
      <div className="flex flex-col items-center space-y-4 py-2">
        <h1 className="font-serif text-4xl">Each is a story to telle</h1>
      </div>
      <ProjectGallery allProjectsData={allProjectsData} />
    </Layout>
  );
}
