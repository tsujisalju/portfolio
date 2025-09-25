import { FormattedDate, FormattedRelativeTime } from "react-intl";
import LogAuthorAvatar, { getAuthor } from "./LogAuthorAvatar";
import Image from "next/image";
import Link from "next/link";
import { Log } from "../../lib/logs";
import Tilt from "react-parallax-tilt";

export default function LogLink({
  log,
  simple = false,
}: {
  log: Log;
  simple?: boolean;
}) {
  return (
    <Link scroll={false} href={"/logs/" + log.id} key={log.id} id={log.id}>
      <Tilt
        tiltMaxAngleY={3}
        tiltReverse
        scale={1.03}
        tiltAxis={"y"}
        glareEnable
        glareMaxOpacity={0.1}
        glareColor="#ffffff"
        glarePosition="left"
        glareReverse
        className="relative overflow-hidden border-solid border border-black/20 dark:border-white/20 bg-stone-50 dark:bg-white/5 shadow-xs hover:shadow-lg"
      >
        <div className="absolute h-8 w-8 -bottom-4 -right-4 rotate-45 bg-black/20 dark:bg-white/20"></div>
        {simple ? (
          <div className="flex flex-col p-4 gap-2">
            <div className="flex flex-row flex-1 items-start">
              <h1 className="font-display text-xl md:text-xl grow">
                {log.title}
              </h1>
              <p className="hidden xl:inline font-sans font-light text-md min-w-max pl-4">
                <FormattedDate
                  value={log.date}
                  year="numeric"
                  month="long"
                  day="numeric"
                />
              </p>
              <p className="inline xl:hidden font-sans font-light text-md">
                <FormattedDate
                  value={log.date}
                  year="numeric"
                  month="numeric"
                  day="numeric"
                />
              </p>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row grow gap-3 items-center">
                <LogAuthorAvatar
                  className="w-6 h-6 rounded-full"
                  author={log.author}
                  height={48}
                  width={48}
                ></LogAuthorAvatar>
                <p className="font-sans font-light text-md">{log.author}</p>
              </div>
              <div className="flex flex-row items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="hidden xl:inline font-sans font-light text-md">
                  <FormattedRelativeTime value={log.readtime} unit="minute" />
                </p>
                <p className="inline xl:hidden font-code font-light text-md">
                  <FormattedRelativeTime
                    value={log.readtime}
                    unit="minute"
                    style="narrow"
                  />
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={getAuthor(log.author)}
              alt={log.author}
              height={250}
              width={250}
              className={
                "absolute -bottom-[20%] -right-[20%] sm:-right-[5%] opacity-60 -z-10"
              }
            />
            <div className="flex flex-col p-6 gap-2">
              <div className="flex flex-col flex-1 items-start gap-2">
                <h1 className="font-display text-xl md:text-2xl grow">
                  {log.title}
                </h1>
                <div className="flex flex-row gap-2">
                  <p className="font-sans font-light text-md">{log.author}</p>
                  <p className="hidden xl:inline font-sans font-light text-md">
                    •
                  </p>
                  <p className="hidden xl:inline font-sans font-light text-md">
                    <FormattedDate
                      value={log.date}
                      year="numeric"
                      month="long"
                      day="numeric"
                    />
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <p className="hidden xl:inline font-sans font-light text-md">
                    <FormattedRelativeTime value={log.readtime} unit="minute" />
                  </p>
                  <p className="inline xl:hidden font-code font-light text-md">
                    <FormattedRelativeTime
                      value={log.readtime}
                      unit="minute"
                      style="narrow"
                    />
                  </p>
                </div>
                <p className="inline xl:hidden font-sans font-light text-md">
                  <FormattedDate
                    value={log.date}
                    year="numeric"
                    month="numeric"
                    day="numeric"
                  />
                </p>
              </div>
            </div>
          </>
        )}
      </Tilt>
    </Link>
  );
}
