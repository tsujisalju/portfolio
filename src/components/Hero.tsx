import { useIntl } from "react-intl";
import { FadeIn } from "../utilities/FadeIn";

export default function Hero() {
  const intl = useIntl();
  return (
    <FadeIn>
      <div className="flex flex-1 flex-col h-[200px] p-8 space-y-4 items-center">
        <h1 className="font-display text-4xl md:text-5xl">
          {intl.formatMessage({ id: "Greetings traveler." })}
        </h1>
        <p className="font-sans text-lg">
          {intl.formatMessage({
            id: "Each one is a story to tell. Discover one and find out what's in store!",
          })}
        </p>
      </div>
    </FadeIn>
  );
}
