import { FormattedDate, FormattedRelativeTime } from "react-intl";
import Link from "next/link";
import { Log } from "../../lib/logs";
import LogAuthorAvatar from "./LogAuthorAvatar";
import Tilt from "react-parallax-tilt";

export default function LogLink({ log }: { log: Log }) {
  return (
    <Link scroll={false} href={"/logs/" + log.id} key={log.id} id={log.id}>
      <Tilt
        tiltMaxAngleY={3}
        tiltReverse
        scale={1.03}
        tiltAxis={"y"}
        className="relative overflow-hidden  border-solid border border-black/20 dark:border-white/20 bg-stone-50 dark:bg-white/5 shadow-sm hover:shadow-lg"
      >
        <div className="absolute h-8 w-8 -bottom-4 -right-4 rotate-45 bg-black/20 dark:bg-white/20"></div>
        <div className="flex flex-col p-4 space-y-2">
          <div className="flex flex-row flex-1 items-start">
            <h1 className="font-display text-xl md:text-2xl grow">
              {log.title}
            </h1>
            <p className="hidden xl:inline font-code font-light text-md">
              <FormattedDate
                value={log.date}
                year="numeric"
                month="long"
                day="numeric"
              />
            </p>
            <p className="inline xl:hidden font-code font-light text-md">
              <FormattedDate
                value={log.date}
                year="numeric"
                month="numeric"
                day="numeric"
              />
            </p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row grow space-x-3 items-center">
              <LogAuthorAvatar
                className="w-6 h-6 rounded-full"
                author={log.author}
                height={48}
                width={48}
              ></LogAuthorAvatar>
              <p className="font-code font-light text-md">{log.author}</p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <p className="hidden xl:inline font-code font-light text-md">
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
      </Tilt>
    </Link>
  );
}
