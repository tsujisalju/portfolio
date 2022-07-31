import Layout from "../../components/layout";
import Link from "next/link";
import { getSortedProjectsData } from "../../lib/projects";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default function Projects() {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="font-sans">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <h1 className="font-serif text-4xl">Projects</h1>
      </div>
    </Layout>
  );
}
