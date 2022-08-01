import Image from "next/image";
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
    <section className="p-4">
      <div className="grid grid-flow-dense gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
              className="transition duration-400 ease-in-out rounded hover:scale-105"
              src={img}
              width={width}
              height={height}
              layout="responsive"
              placeholder="blur"
              blurDataURL={img.replace(".", "-placeholder.")}
            ></Image>
            <div className="sm:static md:absolute sm:bg-none md:bg-black md:py-2 md:px-4 m-2 rounded">
              <h1 className="font-serif md:text-2xl sm:text-xl">{title}</h1>
              <Date dateString={date}></Date>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
