import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { ffxivGender, jobIcons } from "../lib/ffxiv";
import { Transition } from "@headlessui/react";
import Button from "../components/Button";
import { shimmer, toBase64 } from "../components/ImageSkeleton";
import ScrapbookPhoto from "../components/ffxiv-scrapbook/ScrapbookPhoto";

const characterID = "46130616";

type xivData = {
  Character: {
    ActiveClassJob: {
      ExpLevel: number;
      ExpLevelMax: number;
      Level: number;
      UnlockedState: {
        ID: number;
        Name: string;
      };
    };
    ClassJobs: [
      {
        Level: number;
        UnlockedState: {
          ID: number;
          Name: string;
        };
      }
    ];
    GrandCompany: {
      Company: {
        Name: string;
      };
      Rank: {
        Name: string;
      };
    };
    Avatar: string;
    Bio: string;
    Race: {
      Name: string;
    };
    Name: string;
    Nameday: string;
    Gender: number;
    Portrait: string;
    Title: {
      Name: string;
    };
    TitleTop: boolean;
    Server: string;
    GuardianDeity: {
      Name: string;
    };
    FreeCompanyName: string;
    Town: {
      Name: string;
    };
    Tribe: {
      Name: string;
    };
  };
};

export default function FFXIV({
  xivapi,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isShowing, setIsShowing] = useState(false);
  const intl = useIntl();
  const xivLevelPercentage =
    (xivapi.Character.ActiveClassJob.ExpLevel /
      xivapi.Character.ActiveClassJob.ExpLevelMax) *
    100;

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
    setIsShowing(true);
  }, []);

  return (
    <Layout>
      <div className="sm:container mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-4 lg:space-y-0 pb-16">
        <div className="p-8">
          <Transition
            show={isShowing}
            enter="transition duration-700"
            enterFrom="rotate-[30deg] -translate-y-[1000px]"
            enterTo="-rotate-2 translate-y-0"
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} tiltReverse scale={1.03}>
              <Image
                src={xivapi.Character.Portrait}
                alt="Player Avatar"
                width={640}
                height={873}
                className="transition rounded-lg shadow-md hover:shadow-xl w-[75%] mx-auto"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(640, 873)
                )}`}
                priority
              />
            </Tilt>
          </Transition>
        </div>

        <div className="flex flex-col p-8 lg:pr-16 space-y-8">
          <div>
            {xivapi.Character.TitleTop && (
              <p className="font-sans text-lg">{xivapi.Character.Title.Name}</p>
            )}
            <h1 className="font-display text-4xl">{xivapi.Character.Name}</h1>
            {!xivapi.Character.TitleTop && (
              <p className="font-sans text-lg">{xivapi.Character.Title.Name}</p>
            )}
          </div>
          <div>
            <div className="flex flex-row space-x-2 items-center pb-2">
              <Image
                src={jobIcons[xivapi.Character.ActiveClassJob.UnlockedState.ID]}
                alt={xivapi.Character.ActiveClassJob.UnlockedState.Name}
                height={32}
                width={32}
              />
              <h2 className="font-display text-bold text-2xl">
                {xivapi.Character.ActiveClassJob.UnlockedState.Name.toUpperCase()}
              </h2>
            </div>

            <h2 className="font-xivmeter text-xl">
              LEVEL {xivapi.Character.ActiveClassJob.Level}
            </h2>
            <div className="h-1 min-w-max bg-stone-300 dark:bg-stone-700">
              <div className="h-1" style={{ width: `${xivLevelPercentage}%` }}>
                <Transition
                  appear={true}
                  show={isShowing}
                  enter="origin-left transition duration-[700ms]"
                  enterFrom="scale-x-0"
                  enterTo="scale-x-100"
                >
                  <div className="h-1 min-w-min bg-stone-600 dark:bg-stone-300"></div>
                </Transition>
              </div>
            </div>
            <p className="font-sans text-md">
              {xivapi.Character.ActiveClassJob.Level === 90
                ? "MAX"
                : `EXP ${xivapi.Character.ActiveClassJob.ExpLevel} / ${xivapi.Character.ActiveClassJob.ExpLevelMax}`}
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <h2 className="font-xivmeter text-lg">RACE / CLAN / GENDER</h2>
              <p className="font-sans text-lg">{xivapi.Character.Race.Name}</p>
              <p className="font-sans text-lg">
                {xivapi.Character.Tribe.Name}{" "}
                {ffxivGender[xivapi.Character.Gender]}
              </p>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">NAMEDAY</h2>
              <p className="font-sans text-lg">{xivapi.Character.Nameday}</p>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">GUARDIAN DEITY</h2>
              <p className="font-sans text-lg">
                {xivapi.Character.GuardianDeity.Name}
              </p>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">GRAND COMPANY</h2>
              <p className="font-sans text-lg">
                {xivapi.Character.GrandCompany.Company.Name}
              </p>
              <p className="font-sans text-lg">
                {xivapi.Character.GrandCompany.Rank.Name}
              </p>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">FREE COMPANY</h2>
              <p className="font-sans text-lg">
                {xivapi.Character.FreeCompanyName}
              </p>
            </div>
            <div>
              <h2 className="font-xivmeter text-lg">SERVER</h2>
              <p className="font-sans text-lg">{xivapi.Character.Server}</p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-2 gap-2 py-2">
            {xivapi.Character.ClassJobs.map((classJob) => (
              <div
                key={classJob.UnlockedState.Name}
                className="flex flex-col text-center pb-2"
              >
                <Image
                  className="mx-auto"
                  src={jobIcons[classJob.UnlockedState.ID] ?? jobIcons[36]}
                  alt={classJob.UnlockedState.Name}
                  height={32}
                  width={32}
                ></Image>
                <p className="font-sans text-lg">
                  {classJob.Level !== 0 ? classJob.Level : "-"}
                </p>
              </div>
            ))}
          </div>

          <Button
            href={
              "https://na.finalfantasyxiv.com/lodestone/character/" +
              characterID
            }
          >
            {intl.formatMessage({ id: "View on Lodestone" })}
          </Button>
        </div>
      </div>

      <section className="sm:container mx-auto px-6 sm:px-0">
        <div className="grid place-content-center text-center py-24 gap-2">
          <h1 className="font-handwritten text-5xl">
            {intl.formatMessage({ id: "The Unending Journey" })}
          </h1>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "Hover over a photo to echo a (silly) conversation of the past.",
            })}
          </p>
        </div>
        <div className="grid grid-flow-dense gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ScrapbookPhoto
            src={"/img/van-scrapbook/1.jpg"}
            alt="A newly created Van Carina in Uldah"
            width={1096}
            height={778}
            dialogKey="1"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/2.jpg"}
            alt="Van and Driga surrounding Carra who is afk in Thamaturges' Guild"
            width={1747}
            height={960}
            dialogKey="2"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/2-a.jpg"}
            alt="Van sitting with her fellow brethren in Thamaturges' Guild"
            width={1920}
            height={1080}
            className="md:col-span-2"
            imgClassName="rotate-1"
            dialogKey="2-a"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/3.jpg"}
            alt="Van, Aki, Driga and Carra preparing for battle against Garuda"
            width={1919}
            height={1079}
            dialogKey="3"
          />
          <div className="md:col-span-2">
            <ScrapbookPhoto
              src={"/img/van-scrapbook/3-a.jpg"}
              alt="Carra and Driga presenting Van during Binding Coil of Bahamut raid"
              width={3440}
              height={1440}
              dialogKey="3-a"
            />
          </div>
          <div className="md:row-span-2">
            <ScrapbookPhoto
              src={"/img/van-scrapbook/4.jpg"}
              alt="Aki welcoming Van at Foundation"
              width={767}
              height={873}
              dialogKey="4"
            />
          </div>
          <ScrapbookPhoto
            src={"/img/van-scrapbook/5.jpg"}
            alt="Van posing in Coerthas"
            width={1920}
            height={1080}
            dialogKey="5"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/6.jpg"}
            alt="Van waving in her decorated living room"
            width={1920}
            height={1080}
            className="md:col-span-2"
            dialogKey="6"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/7.jpg"}
            alt="Van and friends chatting before the diplomatic marriage begins"
            width={1920}
            height={1080}
            className="md:col-span-2"
            dialogKey="7"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/7-a.jpg"}
            alt="Van forces a smile"
            width={300}
            height={420}
            dialogKey="7-a"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/8.jpg"}
            alt="Van and friends in the diplomatic marriage"
            width={1920}
            height={1080}
            dialogKey="8"
          />
          <div className="md:col-span-2">
            <ScrapbookPhoto
              src={"/img/van-scrapbook/9.jpg"}
              alt="Van and friends in the diplomatic marriage"
              width={1920}
              height={1080}
              dialogKey="9"
            />
          </div>

          <div className="md:col-span-2">
            <ScrapbookPhoto
              src={"/img/van-scrapbook/10.jpg"}
              alt="Van preparing for battle against Nidhogg"
              width={1920}
              height={1080}
              dialogKey="10"
            />
          </div>
          <ScrapbookPhoto
            src={"/img/van-scrapbook/11.jpg"}
            alt="Van and Rhae'li interrogating a sentient Ravhen chocolate fondue"
            width={1920}
            height={1080}
            dialogKey="11"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/12.jpg"}
            alt="Van and Carra looking at a sentient Ravhen chocolate fondue"
            width={1920}
            height={1080}
            imgClassName="rotate-2"
            dialogKey="12"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/13.jpg"}
            alt="Van in the Royal Menagerie garden"
            width={1920}
            height={1080}
            dialogKey="13"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/14.jpg"}
            alt="Van in the Royal Menagerie garden"
            width={1920}
            height={1080}
            dialogKey="14"
          />
          <div className="md:col-span-2">
            <ScrapbookPhoto
              src={"/img/van-scrapbook/15.jpg"}
              alt="Van in the Royal Menagerie garden"
              width={1920}
              height={1080}
              dialogKey="15"
            />
          </div>
          <ScrapbookPhoto
            src={"/img/van-scrapbook/16.jpg"}
            alt="Van in the Rak'tika Greatwood"
            width={1920}
            height={1080}
            dialogKey="16"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/17.jpg"}
            alt="A black mage's worst nightmare"
            width={686}
            height={482}
            className="md:col-span-2"
            imgClassName="-rotate-2"
            dialogKey="17"
          />
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-3">
            <ScrapbookPhoto
              src={"/img/van-scrapbook/18.jpg"}
              alt="Carra gposing as Van performance LB3"
              width={3440}
              height={1440}
              dialogKey="18"
            />
          </div>
          <ScrapbookPhoto
            src={"/img/van-scrapbook/19.jpg"}
            alt="Van preparing for battle in Hades' Elegy"
            width={1920}
            height={1080}
            dialogKey="19"
          />
          <ScrapbookPhoto
            src={"/img/van-scrapbook/20.jpg"}
            alt="Van teaching a Miqote child in the Crystarium"
            width={1920}
            height={1080}
            className="md:col-span-2"
            dialogKey="20"
          />
          <div className="md:col-span-2">
            <ScrapbookPhoto
              src={"/img/van-scrapbook/21.jpg"}
              alt="Van in Sharlayan"
              width={1920}
              height={1080}
              dialogKey="21"
            />
          </div>
        </div>
        <div className="grid place-content-center text-center py-24 gap-2">
          <h1 className="font-handwritten text-5xl">
            {intl.formatMessage({ id: "The journey continues.." })}
          </h1>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://xivapi.com/character/" + characterID + "?extended=1"
  );
  const xivapi: xivData = await res.json();

  return {
    props: {
      xivapi,
    },
  };
};
