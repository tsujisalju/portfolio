export default function SkillBar({
  title,
  width,
}: {
  title: string;
  width: string;
}) {
  return (
    <div className="flex flex-col md:flex-row flex-1 space-y-2 md:space-x-2">
      <div className="md:w-1/5">
        <p>{title}</p>
      </div>
      <div className="h-6 w-4/5 rounded-full bg-stone-300 dark:bg-stone-700">
        <div
          className={"h-6 rounded-full bg-stone-700 dark:bg-stone-400"}
          style={{ width: `${width}` } as const}
        />
      </div>
    </div>
  );
}
