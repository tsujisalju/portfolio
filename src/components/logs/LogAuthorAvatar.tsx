import Image from "next/image";

export function getAuthor(name: string) {
  if (name == "Cooper Baihaqi") {
    return "/img/avatars/cooper.png";
  }
  if (name == "Van Carina") {
    return "/img/avatars/van.png";
  }
  if (name == "Mynx Amina") {
    return "/img/avatars/mynx.png";
  }
  return "";
}
export default function LogAuthorAvatar({
  className,
  author,
  height,
  width,
}: {
  className: string;
  author: string;
  height: number;
  width: number;
}) {
  return (
    <Image
      className={className}
      src={getAuthor(author)}
      alt={author}
      height={height}
      width={width}
    />
  );
}
