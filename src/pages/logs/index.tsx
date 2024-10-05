import { Log, getSortedLogsData } from "../../lib/logs";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import LogLink from "../../components/logs/LogLink";
import { useEffect } from "react";
import { useIntl } from "react-intl";

export const getStaticProps: GetStaticProps = async () => {
  const allLogsData: Log[] = getSortedLogsData();
  return {
    props: {
      allLogsData,
    },
  };
};

export default function Logs({ allLogsData }: { allLogsData: Log[] }) {
  const intl = useIntl();
  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <div className="mx-auto max-w-7xl grid grid-cols-1 px-4 md:px-8 lg:grid-cols-3 my-8 gap-8 h-full">
        <div className="flex flex-col space-y-4 py-8">
          <div className="flex flex-row items-start space-x-2">
            <h1 className="font-display text-4xl">
              {intl.formatMessage({ id: "Logs" })}
            </h1>
            <div className="text-sm font-sans px-2 rounded-full border-solid border-2 border-black/10 dark:border-white/10">
              BETA
            </div>
          </div>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "Reports, recollections and reflections.",
            })}
          </p>
        </div>
        <div className="grid grid-cols-1 col-span-1 lg:col-span-2 gap-4 flex-1 px-2 md:px-6 py-8">
          {allLogsData.map((log: Log) => (
            <LogLink key={log.title} log={log} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
