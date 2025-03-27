//import { FormattedDate, useIntl } from "react-intl";
//import Button from "../components/Button";
import GeoDiv from "../components/GeoDiv";
import Image from "next/image";
import Layout from "../components/Layout";
import MinswapLogo from "../components/svg/MinswapLogo";
//import MuwafaqahLogo from "../components/svg/MuwafaqahLogo";
import PurritoGeneralLogo from "../components/svg/PurritoGeneralLogo";
import React from "react";
import SteelSwapLogo from "../components/svg/SteelSwapLogo";
//import Tag from "../components/Tag";
import Tilt from "react-parallax-tilt";
import Tag from "../components/Tag";

export default function Achernar() {
  //const intl = useIntl();
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <div className="px-4 lg:px-0 max-w-7xl mx-auto flex flex-col space-y-6">
        <Tilt
          tiltMaxAngleY={1}
          tiltMaxAngleX={1}
          tiltReverse
          scale={1.02}
          glareEnable
          glareMaxOpacity={0.1}
          glareColor="#ffffff"
          glarePosition="left"
          glareReverse
          className="relative overflow-hidden bg-stone-50 dark:bg-white/5 shadow-sm hover:shadow-lg"
        >
          <GeoDiv borderx corner>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4">
              <div className="grid w-full h-full place-items-center p-8">
                <PurritoGeneralLogo className="text-[#2F272E] dark:text-[#ffeddc] h-16" />
                <div className="flex flex-row gap-2 justify-center flex-wrap">
                  <Tag>Illustration</Tag>
                  <Tag>Graphic Design</Tag>
                  <Tag>Branding</Tag>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="max-w-full overflow-x-hidden whitespace-nowrap">
                  <div
                    id="scrolling-gallery"
                    className="h-full min-w-max left-0 flex flex-row"
                  >
                    <Image
                      src={"/img/purritogeneral/purrito-header-thumb.png"}
                      alt="purrito header"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/purritogeneral/purrita-busy-at-work-thumb.png"}
                      alt="purrita busy at work"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={
                        "/img/purritogeneral/purrito-raining-coins-thumb.png"
                      }
                      alt="purrito raining coins"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/purritogeneral/purrito-storytime-thumb.png"}
                      alt="purrito storytime"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/purritogeneral/purrito-header-thumb.png"}
                      alt="purrito header"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/purritogeneral/purrita-busy-at-work-thumb.png"}
                      alt="purrita busy at work"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={
                        "/img/purritogeneral/purrito-raining-coins-thumb.png"
                      }
                      alt="purrito raining coins"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/purritogeneral/purrito-storytime-thumb.png"}
                      alt="purrito storytime"
                      height={240}
                      width={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </GeoDiv>
        </Tilt>

        <Tilt
          tiltMaxAngleY={1}
          tiltMaxAngleX={1}
          tiltReverse
          scale={1.02}
          glareEnable
          glareMaxOpacity={0.1}
          glareColor="#ffffff"
          glarePosition="left"
          glareReverse
          className="relative overflow-hidden bg-stone-50 dark:bg-white/5 shadow-sm hover:shadow-lg"
        >
          <GeoDiv borderx corner>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4">
              <div className="grid w-full h-full place-items-center py-8">
                <SteelSwapLogo className="text-[#2F272E] dark:text-[#ffeddc] h-16" />
                <div className="flex flex-row gap-2 justify-center flex-wrap">
                  <Tag>Graphic Design</Tag>
                  <Tag>UI/UX Design</Tag>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="relative max-w-full overflow-x-hidden whitespace-nowrap h-[240px] clip">
                  <div
                    id="scrolling-gallery-reverse"
                    className="absolute h-full min-w-max right-0 flex flex-row"
                  >
                    <Image
                      src={"/img/steelswap/steelswap-ui-prototype-thumb.png"}
                      alt="steelswap ui prototype"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/steelswap/steelswap-bg2-thumb.png"}
                      alt="steelswap bg"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/steelswap/steelswap-graphics.png"}
                      alt="steelswap graphics"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/steelswap/steelswap-bg-thumb.png"}
                      alt="steelswap bg"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/steelswap/steelswap-ui-prototype-thumb.png"}
                      alt="steelswap ui prototype"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/steelswap/steelswap-bg2-thumb.png"}
                      alt="steelswap bg"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/steelswap/steelswap-graphics.png"}
                      alt="steelswap graphics"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/steelswap/steelswap-bg-thumb.png"}
                      alt="steelswap bg"
                      height={240}
                      width={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </GeoDiv>
        </Tilt>

        <Tilt
          tiltMaxAngleY={1}
          tiltMaxAngleX={1}
          tiltReverse
          scale={1.02}
          glareEnable
          glareMaxOpacity={0.1}
          glareColor="#ffffff"
          glarePosition="left"
          glareReverse
          className="relative overflow-hidden bg-stone-50 dark:bg-white/5 shadow-sm hover:shadow-lg"
        >
          <GeoDiv borderx corner>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4">
              <div className="grid w-full h-full place-items-center py-8">
                <div className=" flex flex-row space-x-4 items-center">
                  <MinswapLogo className="slate-950 dark:slate-50 w-[210px] h-16" />
                  <p className="font-code">V1</p>
                </div>
                <div className="flex flex-row gap-2 justify-center flex-wrap">
                  <Tag>Graphic Design</Tag>
                  <Tag>Front-end</Tag>
                  <Tag>Merchandise</Tag>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="max-w-full overflow-x-hidden whitespace-nowrap">
                  <div
                    id="scrolling-gallery"
                    className="h-full min-w-max left-0 flex flex-row"
                  >
                    <Image
                      src={"/img/minswap/minswap-ui-thumb.png"}
                      alt="minswap ui"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-graphics-thumb.png"}
                      alt="minswap graphics"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-governance.gif"}
                      alt="minswap governance"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-volume.jpeg"}
                      alt="minswap volume"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-orcfax.png"}
                      alt="minswap orcfax"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-ui-thumb.png"}
                      alt="minswap ui"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-graphics-thumb.png"}
                      alt="minswap graphics"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-governance.gif"}
                      alt="minswap governance"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-volume.jpeg"}
                      alt="minswap volume"
                      height={240}
                      width={350}
                    />
                    <Image
                      src={"/img/minswap/minswap-orcfax.jpeg"}
                      alt="minswap orcfax"
                      height={240}
                      width={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </GeoDiv>
        </Tilt>
        {/*
        <GeoDiv
          borderx
          corner
          cornersize="normal"
          className="grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-8 gap-12"
        >
          <div className="relative h-[300px]">
            <Image
              className="object-cover rounded-sm shadow-md"
              src={"/img/purritogeneral/purrito-avatar.png"}
              alt="purritogeneral avatar"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <div className="lg:col-span-2 flex flex-1 flex-col gap-y-6 ">
            <PurritoGeneralLogo className="text-[#2F272E] dark:text-[#ffeddc] h-16" />
            <div className="flex flex-row gap-2 flex-wrap">
              <Tag>
                {intl.formatMessage({
                  id: "Illustration",
                })}
              </Tag>
              <Tag>
                {intl.formatMessage({
                  id: "Graphic Design",
                })}
              </Tag>
              <Tag>
                {intl.formatMessage({
                  id: "Branding",
                })}
              </Tag>
            </div>
            <h2 className="font-sans font-light">
              <FormattedDate
                value={"2024-10"}
                month={"long"}
                year={"numeric"}
              />
              {" - "}
              <FormattedDate
                value={"2024-12"}
                month={"long"}
                year={"numeric"}
              />
            </h2>
            <p className="font-sans">
              {intl.formatMessage({
                id: "A brand revamp for PurritoGeneral, Lead Growth at Minswap and Content Creator on X. Featuring a new mascot design and a slew of brand assets with a unique twist of cats, anime and military.",
              })}
            </p>
            <div className="font-serif py-4 px-6 bg-stone-50 dark:bg-stone-950/20 max-w-fit rounded-md shadow-inner">
              <p className="italic">
                &quot;holy moply...this is so awesome. i cant wait to release
                it. we are taking purrito to a whole new level!&quot;
              </p>
              <br />
              <p className="font-sans">- PurritoGeneral</p>
            </div>
            <Button href="https://x.com/PurritoGeneral">
              {intl.formatMessage({ id: "View on X" })}
            </Button>
          </div>
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="relative h-[400px] lg:col-span-5">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/purritogeneral/purrito-header.png"}
                alt="purrito header"
                sizes="100vw"
                fill
                priority
              />
            </div>
            <div className="relative h-[400px] lg:col-span-2">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/purritogeneral/purrita-busy-at-work.png"}
                alt="purrita - busy at work"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <div className="relative h-[400px] lg:col-span-3">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/purritogeneral/purrito-raining-coins.png"}
                alt="purrito - raining coins"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                fill
              />
            </div>
          </div>
        </GeoDiv>
        <hr className="text-black dark:text-white opacity-20" />
        <GeoDiv
          borderx
          corner
          cornersize="normal"
          className="grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-8 gap-12"
        >
          <div className="relative h-[300px]">
            <Image
              className="object-contain"
              src={"/img/muwafaqah/muwafaqah-lulu-full.png"}
              alt="lulu the cat"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <div className="lg:col-span-2 flex flex-1 flex-col gap-y-6 ">
            <MuwafaqahLogo className="text-stone-950 dark:text-stone-50 h-16" />
            <div className="flex flex-row gap-2 flex-wrap">
              <Tag>
                {intl.formatMessage({
                  id: "System Admin",
                })}
              </Tag>
              <Tag>
                {intl.formatMessage({
                  id: "Linux",
                })}
              </Tag>
              <Tag>
                {intl.formatMessage({
                  id: "Raspberry Pi",
                })}
              </Tag>
            </div>
            <h2 className="font-sans font-light">
              <FormattedDate
                value={"2024-07"}
                month={"long"}
                year={"numeric"}
              />
              {" - "}
              {intl.formatMessage({
                id: "Forever (hopefully)",
              })}
            </h2>
            <p className="font-sans">
              {intl.formatMessage({
                id: "A personal DIY home server using Nextcloud, powered by a Raspberry Pi 5 running Ubuntu Server.",
              })}
            </p>
            <p className="font-sans">
              {intl.formatMessage({
                id: " Creating a place where I can fully trust to store my data and the things I care for, all while learning about running a server in general, from hardware considerations, networking and security measures.",
              })}
            </p>
            <Button href="/logs/muwafaqah-proposal">
              {intl.formatMessage({ id: "More info" })}
            </Button>
          </div>

          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-5 gap-4"></div>
        </GeoDiv>
        <hr className="text-black dark:text-white opacity-20" />
        <GeoDiv
          borderx
          corner
          cornersize="normal"
          className="grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-8 gap-12"
        >
          <div className="relative h-[300px]">
            <Image
              className="object-cover rounded-sm shadow-md"
              src={"/img/steelswap/steelswap-bg.png"}
              alt="steelswap cityscape"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <div className="lg:col-span-2 flex flex-1 flex-col gap-y-6 ">
            <SteelSwapLogo className="text-[#2F272E] dark:text-[#ffeddc] h-16" />
            <div className="flex flex-row gap-2 flex-wrap">
              <Tag>
                {intl.formatMessage({
                  id: "Graphic Design",
                })}
              </Tag>
              <Tag>
                {intl.formatMessage({
                  id: "UI/UX Design",
                })}
              </Tag>
            </div>
            <h2 className="font-sans font-light">
              <FormattedDate
                value={"2023-12"}
                month={"long"}
                year={"numeric"}
              />
              {" - "}
              <FormattedDate
                value={"2024-03"}
                month={"long"}
                year={"numeric"}
              />
            </h2>
            <p className="font-sans">
              {intl.formatMessage({
                id: "SteelSwap is a DEX aggregator on the Cardano blockchain. Taking its foundation to new heights with various illustrations and interface designs with a rusty cyberpunk aesthetic.",
              })}
            </p>
            <div className="font-serif py-4 px-6 bg-stone-50 dark:bg-stone-950/20 max-w-fit rounded-md shadow-inner">
              <p className="italic">
                &quot;0 regrets on this design purrnama. You are doing amazing
                work.&quot;
              </p>
              <br />
              <p className="font-sans">- ElderM, Founder of SteelSwap</p>
            </div>
            <Button href="https://steelswap.io">
              {intl.formatMessage({ id: "Visit Website" })}
            </Button>
          </div>
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="relative h-[400px] lg:col-span-5">
              <Image
                className="object-cover rounded-md shadow-md"
                src={"/img/steelswap/steelswap-bg2.png"}
                alt="steelswap forge"
                sizes="100vw"
                fill
              />
            </div>
            <div className="relative h-[400px] lg:col-span-3">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/steelswap/steelswap-ui-prototype.png"}
                alt="steelswap design"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                fill
              />
            </div>
            <div className="relative h-[400px] lg:col-span-2">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/steelswap/steelswap-graphics.png"}
                alt="steelswap graphics"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
          </div>
        </GeoDiv>
        <hr className="text-black dark:text-white opacity-20" />
        <GeoDiv
          borderx
          corner
          cornersize="normal"
          className="grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-8  gap-12"
        >
          <div className="relative h-[300px]">
            <Image
              className="inline dark:hidden object-cover rounded-sm shadow-md"
              src={"/img/minswap/background2_light.png"}
              alt="minswap "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
            <Image
              className="hidden dark:inline -ml-2 object-cover rounded-sm shadow-md"
              src={"/img/minswap/background2_dark.png"}
              alt="minswap "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <div className="col-span-2 flex flex-1 flex-col gap-y-6">
            <div className=" flex flex-row space-x-4 items-center">
              <MinswapLogo className="slate-950 dark:slate-50 w-[210px] h-16" />
              <p className="font-code text-xl">V1</p>
            </div>
            <div className="flex flex-row gap-2 flex-wrap">
              <Tag>
                {intl.formatMessage({
                  id: "Graphic Design",
                })}
              </Tag>
              <Tag>
                {intl.formatMessage({
                  id: "Front End",
                })}
              </Tag>
              <Tag>
                {intl.formatMessage({
                  id: "Merchandise",
                })}
              </Tag>
            </div>
            <h2 className="font-sans font-light">
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
            <p className="font-sans">
              {intl.formatMessage({
                id: "Minswap is a decentralized exchange on the Cardano blockchain. I worked with a global team of agile individuals to provide promotional content, merchandise and interface designs.",
              })}
            </p>
            <Button href="https://minswap.org">
              {intl.formatMessage({ id: "Visit Website" })}
            </Button>
          </div>
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="relative h-[400px] lg:col-span-5">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/minswap/minswap-graphics.png"}
                alt="minswap graphics"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <div className="relative h-[400px] lg:col-span-2">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/minswap/minswap-governance.gif"}
                alt="minswap governance"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                unoptimized
              />
            </div>
            <div className="relative h-[400px] lg:col-span-3">
              <Image
                className="object-cover rounded-sm shadow-md"
                src={"/img/minswap/minswap-ui.png"}
                alt="minswap ui"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                fill
              />
            </div>
          </div>
        </GeoDiv>
         */}
      </div>
    </Layout>
  );
}
