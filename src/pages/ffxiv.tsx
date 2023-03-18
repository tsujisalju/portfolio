import Layout from "../components/Layout";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { FadeIn } from "../utilities/FadeIn";
import Tilt from "react-parallax-tilt";
import {
  ffxivGender,
  ffxivGrandCompany,
  ffxivGuardianDeity,
  ffxivRace,
} from "../lib/ffxiv";
import { Transition } from "@headlessui/react";
import Button from "../components/Button";

type xivData = {
  Character: {
    ActiveClassJob: {
      ExpLevel: number;
      ExpLevelMax: number;
      Level: number;
      UnlockedState: {
        Name: string;
      };
    };
    GrandCompany: {
      NameID: number;
      RankID: number;
    };
    Avatar: string;
    Bio: string;
    Race: number;
    Name: string;
    Nameday: string;
    Gender: number;
    Portrait: string;
    Server: string;
    GuardianDeity: number;
    FreeCompanyName: string;
    Town: number;
  };
};

export default function FFXIV({
  xivapi,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intl = useIntl();
  const xivLevelPercentage =
    (xivapi.Character.ActiveClassJob.ExpLevel /
      xivapi.Character.ActiveClassJob.ExpLevelMax) *
    100;

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <div className="sm:container mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-4 lg:space-y-0 pb-16">
        <div className="p-8 mx-auto lg:mx-0 lg:ml-auto">
          <Transition
            appear={true}
            show={true}
            enter="transition duration-700"
            enterFrom="-translate-y-[1000px] rotate-[30deg]"
            enterTo="translate-y-0 -rotate-2"
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} tiltReverse scale={1.03}>
              <Image
                src={xivapi.Character.Portrait}
                alt="Player Avatar"
                width={640 / 1.5}
                height={873 / 1.5}
                className="transition rounded-lg shadow-md hover:shadow-xl"
              />
            </Tilt>
          </Transition>
        </div>

        <FadeIn>
          <div className="flex flex-col p-8 lg:px-16 space-y-6">
            <h1 className="font-display text-4xl">{xivapi.Character.Name}</h1>
            <div>
              <h2 className="font-display text-bold text-2xl">
                {xivapi.Character.ActiveClassJob.UnlockedState.Name.toUpperCase()}
              </h2>

              <h2 className="font-xivmeter text-xl">
                LEVEL {xivapi.Character.ActiveClassJob.Level}
              </h2>
              <div className="h-1 w-min-max bg-stone-300 dark:bg-stone-700">
                <div
                  className="h-1 bg-stone-600 dark:bg-stone-300"
                  style={{ width: `${xivLevelPercentage}%` }}
                ></div>
              </div>
              <p className="font-sans text-md">
                {xivapi.Character.ActiveClassJob.Level === 90
                  ? "MAX"
                  : `EXP ${xivapi.Character.ActiveClassJob.ExpLevel} / ${xivapi.Character.ActiveClassJob.ExpLevelMax}`}
              </p>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">RACE / CLAN / GENDER</h2>
              <h3 className="font-sans text-lg">
                {ffxivRace[xivapi.Character.Race]}
              </h3>
              <h3 className="font-sans text-lg">
                Keepers of the Moon {ffxivGender[xivapi.Character.Gender]}
              </h3>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">NAMEDAY</h2>
              <h3 className="font-sans text-lg">{xivapi.Character.Nameday}</h3>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">GUARDIAN DEITY</h2>
              <h3 className="font-sans text-lg">
                {ffxivGuardianDeity[xivapi.Character.GuardianDeity]}
              </h3>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">GRAND COMPANY</h2>
              <h3 className="font-sans text-lg">
                {ffxivGrandCompany[xivapi.Character.GrandCompany.NameID]}
              </h3>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">FREE COMPANY</h2>
              <h3 className="font-sans text-lg">
                {xivapi.Character.FreeCompanyName}
              </h3>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">SERVER</h2>
              <h3 className="font-sans text-lg">{xivapi.Character.Server}</h3>
            </div>
            <Button href="https://na.finalfantasyxiv.com/lodestone/character/46130616/">
              {intl.formatMessage({ id: "View on Lodestone" })}
            </Button>
          </div>
        </FadeIn>
      </div>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-flow-dense gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <Image
            src={"/img/van-scrapbook/1.jpg"}
            alt="A newly created Van Carina in Uldah"
            width={1096}
            height={778}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/2.jpg"}
            alt="Van and Driga surrounding Carra who is afk in Thamaturges' Guild"
            width={1747}
            height={960}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/2-a.jpg"}
            alt="Van sitting with her fellow brethren in Thamaturges' Guild"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm md:col-span-2 rotate-1"
          ></Image>
          <Image
            src={"/img/van-scrapbook/3.jpg"}
            alt="Van, Aki, Driga and Carra preparing for battle against Garuda"
            width={1919}
            height={1079}
            className="shadow-md rounded-sm"
          ></Image>
          <div className="md:row-span-2">
            <Image
              src={"/img/van-scrapbook/4.jpg"}
              alt="Aki welcoming Van at Foundation"
              width={767}
              height={873}
              className="shadow-md rounded-sm"
            ></Image>
          </div>
          <Image
            src={"/img/van-scrapbook/5.jpg"}
            alt="Van posing in Coerthas"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/6.jpg"}
            alt="Van waving in her decorated living room"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/7.jpg"}
            alt="Van and friends chatting before the diplomatic marriage begins"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/8.jpg"}
            alt="Van and friends in the diplomatic marriage"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <div className="md:col-span-2">
            <Image
              src={"/img/van-scrapbook/9.jpg"}
              alt="Van and friends in the diplomatic marriage"
              width={1920}
              height={1080}
              className="shadow-md rounded-sm"
            ></Image>
          </div>

          <div className="md:col-span-2">
            <Image
              src={"/img/van-scrapbook/10.jpg"}
              alt="Van preparing for battle against Nidhogg"
              width={1920}
              height={1080}
              className="shadow-md rounded-sm"
            ></Image>
          </div>
          <Image
            src={"/img/van-scrapbook/11.jpg"}
            alt="Van and Rhae'li interrogating a sentient Ravhen chocolate fondue"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/12.jpg"}
            alt="Van and Rhae'li interrogating a sentient Ravhen chocolate fondue"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm rotate-2"
          ></Image>
          <Image
            src={"/img/van-scrapbook/13.jpg"}
            alt="Van in the Royal Menagerie garden"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/14.jpg"}
            alt="Van in the Royal Menagerie garden"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <div className="md:col-span-2">
            <Image
              src={"/img/van-scrapbook/15.jpg"}
              alt="Van in the Royal Menagerie garden"
              width={1920}
              height={1080}
              className="shadow-md rounded-sm"
            ></Image>
          </div>
          <Image
            src={"/img/van-scrapbook/16.jpg"}
            alt="Van in the Rak'tika Greatwood"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/17.jpg"}
            alt="A black mage's worst nightmare"
            width={457}
            height={321}
            className="shadow-md rounded-sm -rotate-2"
          ></Image>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-3">
            <Image
              src={"/img/van-scrapbook/18.jpg"}
              alt="Carra gposing as Van performance LB3"
              width={3440}
              height={1440}
              className="shadow-md rounded-sm"
            ></Image>
          </div>
          <Image
            src={"/img/van-scrapbook/19.jpg"}
            alt="Van preparing for battle in Hades' Elegy"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <Image
            src={"/img/van-scrapbook/20.jpg"}
            alt="Van teaching a Miqote child in the Crystarium"
            width={1920}
            height={1080}
            className="shadow-md rounded-sm"
          ></Image>
          <div className="md:col-span-2">
            <Image
              src={"/img/van-scrapbook/21.jpg"}
              alt="Van in Sharlayan"
              width={1920}
              height={1080}
              className="shadow-md rounded-sm"
            ></Image>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://xivapi.com/character/46130616");
  const xivapi: xivData = await res.json();

  return {
    props: {
      xivapi,
    },
  };
};
