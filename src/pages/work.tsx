import Layout from "../components/Layout";
import React from "react";
import { useIntl, FormattedDate } from "react-intl";
import Image from "next/image";
import Button from "../components/Button";
import { FadeIn } from "../utilities/FadeIn";
import MinswapLogo from "../components/svg/MinswapLogo";
//import SteelSwapLogo from "../components/svg/SteelSwapLogo";

export default function Achernar() {
  const intl = useIntl();
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <FadeIn>
        {/*<section className="relative sm:px-0 sm:container mx-4 sm:mx-auto overflow-hidden h-[700px]">
          <Image
            className="z-[-1] object-cover lg:object-contain inline bg-bottom rounded-lg opacity-90"
            src={"/img/steelswap/steelswap-bg.png"}
            alt="steelswap cityscape"
            fill
          />
          <div className="container mx-auto max-w-5xl flex flex-1 flex-col p-16 pt-20 xl:px-0 space-y-4">
            <SteelSwapLogo className="text-[#2F272E] dark:text-[#ffeddc] h-24" />
            <div className="flex flex-row gap-2">
              <div className="px-3 py-1 rounded-full font-sans bg-stone-50 dark:bg-stone-800 shadow-md">
                {intl.formatMessage({
                  id: "Graphic Design",
                })}
              </div>
              <div className="px-3 py-1 rounded-full font-sans bg-stone-50 dark:bg-stone-800 shadow-md">
                {intl.formatMessage({
                  id: "UI/UX Design",
                })}
              </div>
            </div>
            <h2 className="font-sans font-light text-lg">
              <FormattedDate
                value={"2024-01"}
                month={"long"}
                year={"numeric"}
              />
            </h2>
            <p className="font-sans text-lg">
              {intl.formatMessage({
                id: "SteelSwap is a DEX aggregator on the Cardano blockchain. Taking its foundation to the next level with various illustrations and interface designs with a rusty cyberpunk aesthetic.",
              })}
            </p>
            <p className="font-sans text-lg italic">
              &quot;0 regrets on this design purrnama. You are doing amazing
              work.&quot;
            </p>
            <p className="font-sans text-lg">- ElderM, Founder of SteelSwap</p>
          </div>
            </section>*/}
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
            <MinswapLogo className="slate-950 dark:slate-50 w-[210px]" />
            <div className="flex flex-row gap-2">
              <div className="px-3 py-1 rounded-full font-sans bg-stone-50 dark:bg-stone-800 shadow-md">
                {intl.formatMessage({
                  id: "Graphic Design",
                })}
              </div>
              <div className="px-3 py-1 rounded-full font-sans bg-stone-50 dark:bg-stone-800 shadow-md">
                {intl.formatMessage({
                  id: "Front End",
                })}
              </div>
              <div className="px-3 py-1 rounded-full font-sans bg-stone-50 dark:bg-stone-800 shadow-md">
                {intl.formatMessage({
                  id: "Merchandise",
                })}
              </div>
            </div>
            <h2 className="font-sans font-light text-lg">
              <FormattedDate
                value={"2021-05"}
                month={"long"}
                year={"numeric"}
              />
              {" - "}
              <FormattedDate
                value={"2024-01"}
                month={"long"}
                year={"numeric"}
              />
            </h2>
            <p className="font-sans text-lg pb-8">
              {intl.formatMessage({
                id: "Minswap is a decentralized exchange on the Cardano blockchain. I worked with a global team of agile individuals to provide promotional content, merchandise and interface designs.",
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
        {/*
        <section className="relative sm:px-0 sm:container mx-4 sm:mx-auto overflow-hidden">
          <div className="container mx-auto max-w-5xl flex flex-1 flex-col p-16 pt-20 xl:px-0 space-y-4">
            <h2 className="font-display text-3xl">
              {intl.formatMessage({ id: "Taskaru" })}
            </h2>

            <h2 className="font-sans font-light text-lg">
              <FormattedDate
                value={"2023-09"}
                month={"long"}
                year={"numeric"}
              />
            </h2>
          </div>
        </section>
        <section className="mx-4 sm:container sm:mx-auto my-4">
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
