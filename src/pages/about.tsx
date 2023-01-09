import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "react-intl";
import { FadeIn } from "../utilities/FadeIn";

const styles = {
  nurtureImage: {
    backgroundImage: "url(/img/about/nurture-2.jpg)",
  },
} as const;

export default function About() {
  const [nameToggle, setNameToggle] = React.useState<Boolean>(false);
  const intl = useIntl();
  function HandleNameToggle(value: Boolean) {
    setNameToggle(value);
  }

  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <div className="md:container md:mx-auto px-4 mt-8">
        <div className="flex flex-col-reverse lg:flex-row justify-center space-x-4">
          <FadeIn>
            <div className="flex flex-col lg:max-w-xl p-8 space-y-6 text-lg">
              <h1 className="font-display text-5xl">
                {intl.formatMessage({ id: "Hello, friend! I'm Qayyum." })}
              </h1>
              <p className="font-sans">
                {intl.formatMessage({
                  id: "I was born in Malaysia, previously based in Germany and now starting fresh back in home country. I'm a hobbyist frontend developer and designer for almost 10 years.",
                })}
              </p>
              <p className="font-sans">
                {intl.formatMessage({
                  id: "At a young age, my mother introduced me to programming and game making. I was so fascinated at the idea of creating anything with the power of programming, and the passion burns strong since. I have dabbled in various hobby projects relating to game development, web design and content creation.",
                })}
              </p>
              <p className="font-sans">
                {intl.formatMessage({
                  id: "Currently, I work remotely as a frontend dev and designer for Minswap DEX on the Cardano blockchain. I am always on the lookout for new opportunities, and I found a place where my style and ideas can contribute to bleeding edge technology.",
                })}
              </p>
              <p className="font-sans">
                {intl.formatMessage({
                  id: "I aspire to tell my own little story through my illustrations and creations. I am always passionate about creative story-telling and elegant use of technology. I prioritize on efficiency and making experiences effortless for anyone. In the end, I wish my creations bring benefit to all walks of life.",
                })}
              </p>
            </div>
          </FadeIn>

          <div className="inline-block text-center space-y-4 py-4">
            <Image
              className="transition duration-400"
              alt="a turkish van cat named Carina"
              src={"/img/about/profile.png"}
              width={450}
              height={450}
              placeholder={"blur"}
              blurDataURL={"/img/about/profile-placeholder.png"}
            ></Image>
          </div>
        </div>
      </div>

      <div
        className="flex flex-1 bg-center bg-fixed saturate-50 h-[500px] my-8"
        style={styles.nurtureImage}
      ></div>
      <div className="flex flex-col justify-center items-center py-20">
        <div className="flex flex-row justify-center pb-6">
          <p
            className={
              "font-display text-6xl md:text-8xl " +
              (!nameToggle
                ? "text-stone-800 dark:text-stone-200"
                : "text-stone-400 dark:text-stone-700")
            }
            onMouseEnter={() => HandleNameToggle(false)}
          >
            smol
          </p>
          <p
            className={
              "font-display text-6xl md:text-8xl " +
              (nameToggle
                ? "text-stone-800 dark:text-stone-200"
                : "text-stone-400 dark:text-stone-700")
            }
            onMouseEnter={() => HandleNameToggle(true)}
          >
            padok
          </p>
        </div>
        <div className="container mx-auto text-center h-12">
          <p className={"font-sans text-lg " + (nameToggle && "hidden")}>
            {intl.formatMessage({
              id: "When I was a kid I had always been a little smaller in size than my peers. Even today, but only a minor difference.",
            })}
          </p>
          <p className={"font-sans text-lg " + (!nameToggle && "hidden")}>
            {intl.formatMessage({
              id: "Padok is a Malay slang for padu, which means powerful.",
            })}
          </p>
        </div>
      </div>
      <div className="md:container md:mx-auto md:px-4 sm:px-2">
        <div className="flex flex-col lg:flex-row justify-center items-center p-4 md:p-8"></div>
      </div>
      <div className="md:container md:mx-auto my-auto md:px-4 sm:px-2 bg-stone-200 dark:bg-stone-800">
        <div className="flex flex-col lg:flex-row justify-center items-center p-8">
          <div className="flex flex-col lg:w-1/2 p-8 space-y-6 text-lg">
            <h1 className="font-display text-6xl">
              {intl.formatMessage({ id: "Cats?" })}
            </h1>
            <p className="font-sans text-justify">
              {intl.formatMessage({
                id: "The illustrations I make, describe a world of places I'm passionate about, the things I want to do and the kind of person I wish to become. They are not tied to a particular story, leaving enough room for self-interpretation.",
              })}
            </p>
            <p className="font-sans text-justify">
              {intl.formatMessage({
                id: "I take great lessons from cats, being a person who has pet cats in real life. Cats are resilient, loving, intelligent yet whimsical and they are more aware of the existence of higher beings, things of greater good. If granted sentience, I believe they can create better worlds than we do. That is a narrative I'd like to bring in my illustrations, as a motivation for myself, and hopefully for others to explore and learn for the betterment of society.",
              })}
            </p>
          </div>
          <div className="inline-block text-center space-y-4 p-4">
            <Image
              className="transition duration-400"
              alt="Carina the turkish van using a laptop, with a cup of coffee next to her."
              src={"/img/about/glasgow.png"}
              width={550}
              height={550}
              placeholder={"empty"}
            ></Image>
            <h1 className="">
              {intl.formatMessage({ id: "Khajiit today makes 'soft wares'." })}
            </h1>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </Layout>
  );
}
