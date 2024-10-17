import { FormattedDate, useIntl } from "react-intl";
import { GetStaticPaths, GetStaticProps } from "next";
import { LogData, getLogData } from "../../lib/logs";
import { useEffect, useState } from "react";
import GeoDiv from "../../components/GeoDiv";
import Layout from "../../components/Layout";
import Link from "next/link";
import LogAuthorAvatar from "../../components/logs/LogAuthorAvatar";
import Typewriter from "../../utilities/Typewriter";
import path from "path";
import { readdirSync } from "fs";
import useKeyPressed from "../../utilities/KeyPressed";

const logsDirectory = path.join(process.cwd(), "src/logs");

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const logData: LogData = await getLogData(params?.id as string);
  return {
    props: {
      logData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let collectPath: string[] = [];
  collectPath = collectPath.concat(readdirSync(logsDirectory + "/"));
  const fileNames = collectPath;
  const paths: {
    params: {
      id: string;
    };
  }[] = [];

  fileNames.map((filename) => {
    paths.push({ params: { id: filename.replace(/\.md$/, "") } });
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export default function Log({ logData }: { logData: LogData }) {
  const intl = useIntl();
  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [currentParagraph, setCurrentParagraph] = useState<number>(0);
  const paragraphs = logData.contentHtml.split("</p>");
  const typeParagraphs = paragraphs
    .map((p) => p.replace("<p>", "").replace("\n", ""))
    .slice(0, -1);

  const handleOnFinished = () => {
    if (currentParagraph < typeParagraphs.length - 1) {
      setIsFinished(true);
    }
  };

  const handleKeyPressed = () => {
    if (currentParagraph < typeParagraphs.length) {
      setCurrentParagraph((prev) => prev + 1);
      setIsFinished(false);
    }
  };

  useKeyPressed("Enter", handleKeyPressed);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto grid grid-cols-1 px-4 md:px-8 lg:grid-cols-3 my-8 gap-6">
        <div className="flex flex-col space-y-6 mb-4 py-2">
          <Link href={"/logs" + "#" + logData.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <h1 className="font-display text-3xl ">{logData.title}</h1>
          <div className="font-sans font-light font-lg">
            <FormattedDate
              value={logData.date}
              day={"numeric"}
              month={"long"}
              year={"numeric"}
            />
          </div>
          <GeoDiv
            className="p-4 flex flex-row items-center space-x-4"
            border
            cornertr
          >
            <LogAuthorAvatar
              className="h-16 w-16 bg-black/30 rounded-full"
              author={logData.author}
              height={120}
              width={120}
            />
            <p className="font-sans text-lg">{logData.author}</p>
          </GeoDiv>
        </div>
        <div className="col-span-2 flex flex-col space-y-6 p-8 text-justify font-code text-md bg-black/10 rounded-lg shadow-inner min-h-[300px] lg:h-[600px] lg:overflow-y-auto">
          <div className="mt-auto" />
          {typeParagraphs.map((p, i) => {
            if (i < currentParagraph) {
              return <span key={i}>{p}</span>;
            } else if (i == currentParagraph) {
              return (
                <span key={i}>
                  <Typewriter text={p} onFinished={handleOnFinished} />
                </span>
              );
            }
          })}
          <button
            className={
              "place-self-end grow-0 p-4 pb-6 pr-16 lg:p-1 lg:pb-2 lg:pr-4 font-code text-sm border-2 border-b-4 border-r-4 rounded-md border-black/50 dark:border-white/50 transition " +
              (isFinished ? "animate-pulse" : "opacity-0")
            }
            disabled={!isFinished}
            onClick={handleKeyPressed}
          >
            {intl.formatMessage({ id: "Enter" })}
          </button>
        </div>
      </div>
    </Layout>
  );
}
