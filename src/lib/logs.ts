import { readFileSync, readdirSync } from "fs";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

const logsDirectory = path.join(process.cwd(), "src/logs");

export type Log = {
  date: string;
  title: string;
  author: string;
  id: string;
};

export type LogData = Log & {
  contentHtml: string;
};

export function getSortedLogsData() {
  const fileNames = readdirSync(logsDirectory);
  const allLogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(logsDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        author: string;
      }),
    };
  });

  return allLogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getLogData(id: string) {
  const fullPath = path.join(logsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
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
      author: string;
    }),
  };
}
