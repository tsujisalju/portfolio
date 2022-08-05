import Image from "next/image";
import Link from "next/link";
import Date from "./Date";

export default function ProjectGallery({
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
    <section className="px-4">
      <div className="grid grid-flow-dense gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allProjectsData.map(({ id, date, title, img, width, height }) => (
          <div
            key={id}
            className={
              "flex flex-1 flex-col relative " +
              (id === "lumen"
                ? "md:col-span-2 md:row-span-2"
                : width > height
                ? "md:col-span-2"
                : width < height
                ? "md:row-span-2"
                : "")
            }
          >
            <div className="transition duration-400 ease-in-out  hover:scale-[1.03] shadow-sm hover:shadow-lg">
              <Link href={"/projects/" + id}>
                <a>
                  <Image
                    id={id}
                    alt={id}
                    className="rounded"
                    src={img}
                    width={width}
                    height={height}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={img.replace(".", "-placeholder.")}
                  ></Image>
                </a>
              </Link>
            </div>
            <div className="sm:static md:absolute sm:bg-none md:bg-black md:py-2 md:px-4 m-2 rounded text-stone-200">
              <h1 className="font-serif md:text-2xl sm:text-xl">{title}</h1>
              <Date dateString={date}></Date>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
