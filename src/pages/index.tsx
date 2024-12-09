import { FormattedDate, useIntl } from "react-intl";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Log, getSortedLogsData } from "../lib/logs";
import { Project, getSortedProjectsData } from "../lib/projects";
import { shimmer, toBase64 } from "../components/ImageSkeleton";
import BlueSkyIcon from "../lib/svg/BlueSkyIcon";
import GeoDiv from "../components/GeoDiv";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import LogLink from "../components/logs/LogLink";
import React from "react";
import { Socials } from "../lib/socials";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allProjectsData: Project[] = getSortedProjectsData(locale as string);
  const allLogsData: Log[] = getSortedLogsData();
  return {
    props: {
      allProjectsData,
      allLogsData,
    },
  };
};

export default function Home({
  allProjectsData,
  allLogsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intl = useIntl();
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <div className="min-h-[90vh] w-full relative grid gap-y-32 place-content-center overflow-hidden">
        <Image
          className="object-cover object-top opacity-50 lg:opacity-90 -z-10 transition duration-300"
          src="/img/favor.webp"
          alt="favor"
          fill
          priority
          unoptimized
        />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-8">
          <div className="max-w-xl flex flex-1 flex-col space-y-4">
            <GeoDiv
              className="flex flex-col lg:items-start gap-8 p-12"
              borderx
              cornertr
              cornersize="large"
            >
              <Image
                className="dark:hidden"
                src={"/img/logo-dark-v2.png"}
                alt="purrnama logo dark"
                height={48}
                width={48}
              />
              <Image
                className="hidden dark:inline"
                src={"/img/logo-light-v2.png"}
                alt="purrnama logo light"
                height={48}
                width={48}
              />
              <div className="flex flex-col space-y-4">
                <div>
                  <h1 className="font-display text-4xl lg:text-5xl">
                    {intl.formatMessage({
                      id: "Be the change you want to be.",
                    })}
                  </h1>
                </div>
                <div>
                  <p className="font-sans">
                    {intl.formatMessage({
                      id: "I'm Qayyum, a freelance developer and designer based in Johore, Malaysia.",
                    })}
                  </p>
                  <p className="font-sans">
                    {intl.formatMessage({
                      id: "The world is ours to explore, design and nurture, for the betterment of all walks of life.",
                    })}
                  </p>
                </div>
                <div className="flex flex-row pt-4 space-x-3 place-items-center">
                  <Link
                    href={Socials.Github}
                    target={"_blank"}
                    className={
                      "text-stone-700 hover:text-stone-800 dark:text-stone-300 hover:dark:text-stone-200 transition duration-200"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </Link>
                  <Link
                    href={Socials.Bluesky}
                    target={"_blank"}
                    className={
                      "text-stone-700 hover:text-stone-800 dark:text-stone-300 hover:dark:text-stone-200 transition duration-100"
                    }
                  >
                    <BlueSkyIcon className="" />
                  </Link>
                </div>
              </div>
            </GeoDiv>
          </div>
        </div>
        <div className="container mx-auto lg:grid hidden grid-cols-2 mb-8">
          <div></div>
          <div className="backdrop-blur-sm">
            <GeoDiv
              className="flex flex-col gap-4 p-8 bg-white/20 dark:bg-black/20"
              border
              cornertl
              cornersize="normal"
            >
              <div className="max-w-xl w-full flex flex-1 flex-col space-y-2">
                <h1 className="text-3xl font-display">VAN CARINA</h1>
                <p className="font-sans">Turkish Van Cat</p>
              </div>
            </GeoDiv>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:px-4">
        <div className="w-full lg:col-span-2">
          <div className="p-4">
            <GeoDiv
              className="text-center lg:text-left px-4 py-2 border-r-0"
              border
              cornerbl
              cornerbr
              cornersize="normal"
            >
              <Link scroll={false} href={"/logs"}>
                <h1 className="font-code uppercase text-xl">
                  {intl.formatMessage({ id: "Latest Logs" })}
                  {" >"}
                </h1>
              </Link>
            </GeoDiv>
          </div>
          <div className="flex flex-col col-span-2 flex-1 space-y-2 mx-4 p-4 rounded-lg bg-black/10 shadow-inner h-[600px] overflow-y-auto">
            {allLogsData.slice(0, 5).map((log: Log) => (
              <LogLink key={log.title} log={log} simple />
            ))}
          </div>
        </div>
        <div className="w-full order-first lg:-order-none lg:col-span-3">
          <div className="p-4">
            <GeoDiv
              className="text-center lg:text-left px-4 py-2 border-l-0"
              border
              cornerbl
              cornerbr
              cornersize="normal"
            >
              <Link scroll={false} href={"/artworks"}>
                <h1 className="font-code uppercase text-xl">
                  {intl.formatMessage({ id: "Latest Artworks" })}
                  {" >"}
                </h1>
              </Link>
            </GeoDiv>
          </div>
          <div className="p-4 mx-4 bg-black/10 shadow-inner h-[600px]">
            <Link scroll={false} href={"/projects/" + allProjectsData[0].id}>
              <div className="relative w-full h-full">
                <Image
                  src={allProjectsData[0].img}
                  alt={allProjectsData[0].title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(
                      allProjectsData[0].width,
                      allProjectsData[0].height,
                    ),
                  )}`}
                />
                <div className="absolute w-full top-0 p-4 border bg-white/50 dark:bg-black/50 border-black/20 dark:border-white/20">
                  <div className="flex flex-row space-x-4 content-center">
                    <h1 className="font-display md:text-2xl text-xl">
                      {allProjectsData[0].title}
                    </h1>

                    <p className="font-sans font-lg font-light">
                      <FormattedDate
                        value={allProjectsData[0].date}
                        day={"numeric"}
                        month={"long"}
                        year={"numeric"}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
