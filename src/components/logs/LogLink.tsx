import { FormattedDate } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import { Log } from "../../lib/logs";
import Tilt from "react-parallax-tilt";

function getAuthor(name: string) {
  if (name == "Cooper Baihaqi") {
    return "/img/avatars/cooper.png";
  }
  if (name == "Van Carina") {
    return "/img/avatars/van.png";
  }
}

export default function LogLink({ log }: { log: Log }) {
  return (
    <Link href={"/logs/" + log.id} key={log.id} id={log.id}>
      <Tilt
        tiltMaxAngleY={3}
        tiltReverse
        scale={1.03}
        tiltAxis={"y"}
        className="relative overflow-hidden  border-solid border border-black/20 dark:border-white/20 bg-stone-50 dark:bg-white/5 shadow-sm hover:shadow-lg"
      >
        <div className="absolute h-8 w-8 -bottom-4 -right-4 rotate-45 bg-black/20 dark:bg-white/20"></div>
        <div className="flex flex-col md:flex-row md:space-x-8 p-4">
          <div className="flex flex-col space-y-3">
            <h1 className="font-display text-2xl">{log.title}</h1>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row space-x-3 items-center">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={getAuthor(log.author) ?? ""}
                  alt={log.author}
                  height={48}
                  width={48}
                ></Image>
                <p className="font-code font-light text-md">{log.author}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:justify-end mt-4 md:mt-0 text-end">
            <p className="font-code font-light text-md">
              <FormattedDate
                value={log.date}
                year="numeric"
                month="long"
                day="numeric"
              />
            </p>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}
