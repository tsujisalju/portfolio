import { useIntl } from "react-intl";

export default function Hero() {
  const intl = useIntl();
  return (
    <div className="flex flex-1 flex-col pb-8 px-8 space-y-4 items-center">
      <h1 className="font-serif text-3xl md:text-5xl">
        {intl.formatMessage({ id: "Greetings traveler" })}
      </h1>
      <p className="font-sans text-lg">
        {intl.formatMessage({ id: "Each one is a story to tell" })}
      </p>
    </div>
  );
}
