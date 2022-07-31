import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getSortedProjectsData } from "../lib/projects";
import Date from "../components/date";

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
      <section className="p-4">
        <div className="grid grid-flow-dense gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allProjectsData.map(({ id, date, title, img, width, height }) => (
            <div
              key={id}
              className={
                "flex flex-1 flex-col relative " +
                (width > height
                  ? "col-span-2"
                  : width < height
                  ? "row-span-2"
                  : "")
              }
            >
              <Image
                alt="id"
                className="rounded"
                src={img}
                width={width}
                height={height}
                layout="responsive"
                placeholder="blur"
                blurDataURL={img.replace(".", "-placeholder.")}
              ></Image>
              <div className="absolute bg-black py-2 px-4 m-2 rounded">
                <h1 className="font-serif md:text-3xl sm:text-2xl">{title}</h1>
                <Date dateString={date}></Date>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
