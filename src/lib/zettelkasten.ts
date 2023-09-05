import path from "path";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";

const zettelDirectory = path.join(process.cwd(), "src/obsidian/Zettelkasten/");

export type Zettel = {
  id: string;
  date: string;
  time: string;
  tags: string[];
  title: string;
  content: string;
};

export function getZettelkasten() {
  const filenames = readdirSync(zettelDirectory);
  const allZettel = filenames.map((filename) => {
    const fullPath = path.join(zettelDirectory, filename);
    const fileContents = readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const excerpt = matterResult.content.substring(0, 50);
    return {
      excerpt,
      ...(matterResult.data as {
        id: string;
        title: string;
      }),
    };
  });

  const filteredZettel = allZettel.filter((zettel) => {
    if (!zettel.id) {
      return false;
    } else {
      return true;
    }
  });

  return filteredZettel.sort((a, b) => {
    if (Number(a.id) < Number(b.id)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getZettel() {}
