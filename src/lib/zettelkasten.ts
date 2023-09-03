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
    const id = filename.replace(/\.md$/, "").replace(/\s/g, "-");

    const fullPath = path.join(zettelDirectory, filename);
    const fileContents = readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as {
        date: string;
      }),
    };
  });
}
