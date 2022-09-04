import Layout from "../../components/Layout";
import { getSortedProjectsData } from "../../libs/projects";
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
      <ProjectGallery allProjectsData={allProjectsData} />
    </Layout>
  );
}
