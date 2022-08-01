import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params?.id as string);
  return {
    props: {
      projectData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export default function Project() {
  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <h1 className="font-serif text-4xl">Projects</h1>
        <h2 className="font-sans">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
}
