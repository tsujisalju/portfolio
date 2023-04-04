import Tilt from "react-parallax-tilt";
import Image from "next/image";

export default function ScrapbookPhoto({
  alt,
  src,
  height,
  width,
  className,
}: {
  alt: string;
  src: string;
  height: number;
  width: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        tiltReverse
        scale={1.03}
        className="flex flex-auto"
      >
        <Image
          alt={alt}
          src={src}
          height={height}
          width={width}
          className="border-4 border-solid border-white shadow-md hover:shadow-xl transition duration-400"
        ></Image>
      </Tilt>
    </div>
  );
}
