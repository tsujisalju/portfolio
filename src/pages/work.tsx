import Layout from "../components/Layout";
import React from "react";
import { useIntl, FormattedDate } from "react-intl";
import Image from "next/image";
import Button from "../components/Button";
import { FadeIn } from "../utilities/FadeIn";

export default function Achernar() {
  const intl = useIntl();
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <FadeIn>
        <section className="relative sm:px-0 sm:container mx-4 sm:mx-auto overflow-hidden">
          <Image
            className="z-[-1] object-cover inline dark:hidden bg-bottom rounded-lg"
            src={"/img/minswap/background2_light.png"}
            alt="minswap "
            fill
          />
          <Image
            className="z-[-1] object-cover hidden dark:inline bg-bottom rounded-lg"
            src={"/img/minswap/background2_dark.png"}
            alt="minswap "
            fill
          />
          <div className="container mx-auto max-w-5xl flex flex-1 flex-col p-16 pt-20 xl:px-0 space-y-4">
            <h2 className="font-display text-3xl">
              {intl.formatMessage({ id: "Minswap" })}
            </h2>
            <h2 className="font-sans font-light text-lg">
              <FormattedDate
                value={"2021-05"}
                month={"long"}
                year={"numeric"}
              />
              {intl.formatMessage({ id: " - Present" })}
            </h2>
            <p className="font-sans text-lg pb-8">
              {intl.formatMessage({
                id: "Minswap is a decentralized exchange on the Cardano blockchain. I work with a global team of agile individuals to provide promotional content, merchandise and interface designs. Below is the mascot I designed, named Merlin!",
              })}
            </p>
            <Button href="https://minswap.org">
              {intl.formatMessage({ id: "Visit Website" })}
            </Button>
          </div>
          <div className="max-w-full overflow-x-hidden whitespace-nowrap">
            <div
              id="minswap-gallery"
              className="h-[400px] min-w-max left-0 flex flex-row"
            >
              <Image
                alt="Catdano tokenomics"
                className="scroller"
                src="/img/minswap/catdano-minomics.png"
                width={320}
                height={400}
              />
              <Image
                alt="Catdano cneta"
                className="scroller"
                src="/img/minswap/catdano-cneta.png"
                width={500}
                height={400}
              />
              <Image
                alt="Catdano yummi"
                className="scroller"
                src="/img/minswap/catdano-yummi.png"
                width={320}
                height={400}
              />
              <Image
                alt="Catdano hosky"
                className="scroller"
                src="/img/minswap/catdano-hosky.png"
                width={320}
                height={400}
              />
              <Image
                alt="Catdano christmas"
                className="scroller"
                src="/img/minswap/catdano-christmas.png"
                width={400}
                height={400}
              />
              <Image
                alt="Catdano lunar new year"
                className="scroller"
                src="/img/minswap/catdano-lny.png"
                width={668}
                height={400}
              />
              <Image
                alt="Catdano 1st anniversary"
                className="scroller"
                src="/img/minswap/catdano-1stanniversary.png"
                width={322}
                height={400}
              />
              <Image
                alt="Catdano tokenomics"
                className="scroller"
                src="/img/minswap/catdano-minomics.png"
                width={320}
                height={400}
              />
              <Image
                alt="Catdano cneta"
                className="scroller"
                src="/img/minswap/catdano-cneta.png"
                width={500}
                height={400}
              />
              <Image
                alt="Catdano yummi"
                className="scroller"
                src="/img/minswap/catdano-yummi.png"
                width={320}
                height={400}
              />
              <Image
                alt="Catdano hosky"
                className="scroller"
                src="/img/minswap/catdano-hosky.png"
                width={320}
                height={400}
              />
              <Image
                alt="Catdano christmas"
                className="scroller"
                src="/img/minswap/catdano-christmas.png"
                width={400}
                height={400}
              />
              <Image
                alt="Catdano lunar new year"
                className="scroller"
                src="/img/minswap/catdano-lny.png"
                width={668}
                height={400}
              />
              <Image
                alt="Catdano 1st anniversary"
                className="scroller"
                src="/img/minswap/catdano-1stanniversary.png"
                width={322}
                height={400}
              />
            </div>
          </div>
        </section>
        {/*<section className="mx-4 sm:container sm:mx-auto my-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="h-[400px] bg-stone-500 bg-opacity-10 rounded-lg"></div>
            <div className="h-[400px] bg-stone-500 bg-opacity-10 rounded-lg"></div>
            <div className="h-[400px] bg-stone-500 bg-opacity-10 rounded-lg"></div>
          </div>
            </section>*/}
      </FadeIn>
    </Layout>
  );
}
