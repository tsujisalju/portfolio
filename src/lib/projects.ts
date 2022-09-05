import * as fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "src/projects");

export type Project = {
  date: string;
  title: string;
  img: string;
  width: number;
  height: number;
  id: string;
};
export type ProjectData = Project & {
  contentHtml: string;
};

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        img: string;
        width: number;
        height: number;
      }),
    };
  });

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const enFiles = fileNames.map((filename) => {
    return { params: { id: filename.replace(/\.md$/, "") }, locale: "en-US" };
  });
  const deFiles = fileNames.map((filename) => {
    return { params: { id: filename.replace(/\.md$/, "") }, locale: "de-DE" };
  });
  const msFiles = fileNames.map((filename) => {
    return { params: { id: filename.replace(/\.md$/, "") }, locale: "ms-MY" };
  });
  return [...enFiles, ...deFiles, ...msFiles];
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      img: string;
      width: number;
      height: number;
    }),
  };
}
