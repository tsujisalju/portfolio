import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { Log, getSortedLogsData } from "../../lib/logs";
import { FormattedDate } from "react-intl";
import Link from "next/link";
import { FadeIn } from "../../utilities/FadeIn";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const allLogsData: Log[] = getSortedLogsData();
  return {
    props: {
      allLogsData,
    },
  };
};

export default function Logs({ allLogsData }: { allLogsData: Log[] }) {
  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <FadeIn>
        <div className="max-w-7xl mx-auto grid grid-cols-1 px-8 lg:grid-cols-3 my-8 gap-8 h-full">
          <div className="flex flex-col space-y-4 py-8">
            <div className="flex flex-row items-start space-x-2">
              <h1 className="font-display text-4xl">Logs</h1>
              <div className="text-sm font-sans px-2 rounded-full border-solid border-2 border-black/10 dark:border-white/10">
                BETA
              </div>
            </div>
            <p className="font-sans text-lg">
              Reports, recollections and reflections.
            </p>
          </div>
          <div className="flex flex-col col-span-2 flex-1 space-y-2 px-6 py-8 rounded-lg bg-black/10 shadow-inner h-[600px] overflow-y-auto">
            {allLogsData.map((log: Log) => (
              <Link href={"/logs/" + log.id} key={log.id} id={log.id}>
                <Tilt
                  tiltMaxAngleY={3}
                  tiltReverse
                  scale={1.03}
                  tiltAxis={"y"}
                  className="flex flex-col space-y-2 px-3 py-4 rounded-md bg-stone-50 dark:bg-white/5 shadow-sm hover:shadow-lg"
                >
                  <h1 className="font-display text-2xl">{log.title}</h1>
                  <p className="font-code font-light text-md">
                    <FormattedDate
                      value={log.date}
                      year="numeric"
                      month="long"
                      day="numeric"
                    />
                  </p>
                </Tilt>
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </Layout>
  );
}
