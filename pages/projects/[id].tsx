import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import { GetStaticProps, GetStaticPaths } from "next";
import Date from "../../components/Date";
import Image from "next/image";

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

export default function Project({
  projectData,
}: {
  projectData: {
    title: string;
    date: string;
    img: string;
    width: number;
    height: number;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
        <div>
          <Image
            alt={projectData.title}
            src={projectData.img}
            width={projectData.width}
            height={projectData.height}
            placeholder="blur"
            blurDataURL={projectData.img.replace(".", "-placeholder.")}
          />
        </div>
        <div>
          <div className="flex flex-col p-8 space-y-4 bg-black md:w-[500px]">
            <Link href="/">
              <a className="font-sans">Back to home</a>
            </Link>
            <div className="flex flex-col space-y-2">
              <h1 className="font-serif text-5xl md:text-6xl">
                {projectData.title}
              </h1>
              <Date dateString={projectData.date} />
            </div>
            <div
              className="flex flex-col space-y-4 text-lg"
              dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
