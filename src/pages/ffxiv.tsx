import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { ffxivGender, friendsAvatar, jobIcons } from "../lib/ffxiv";
import { Transition } from "@headlessui/react";
import Button from "../components/Button";
import { shimmer, toBase64 } from "../components/ImageSkeleton";
import ScrapbookPhoto from "../components/ffxiv-scrapbook/ScrapbookPhoto";
import {
  scrapbookPhotos1,
  scrapbookPhotos2,
  scrapbookPhotos3,
  scrapbookPhotos4,
} from "../components/ffxiv-scrapbook/scrapbook";
import { AnimatePresence, motion, Variants } from "framer-motion";

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
        <div className="p-2 sm:p-8">
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
          <div className="grid grid-flow-row-dense grid-cols-8 gap-2 py-2">
            {xivapi.Character.ClassJobs.map((classJob) => (
              <div
                key={classJob.UnlockedState.Name}
                className="flex flex-col text-center pb-1"
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

      <section className="mx-auto px-4 sm:px-8 container">
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
        <div className="pt-8 pb-4">
          <div className="flex flex-row gap-x-4 py-1">
            <h1 className="font-xivmeter text-lg">
              {intl.formatMessage({
                id: "A VAN WAS BORN",
              })}
            </h1>
            <p className="font-sans font-light text-lg">
              A Realm Reborn - Heavensward
            </p>
          </div>
          <hr />
        </div>
        <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3">
          {scrapbookPhotos1.map((p) => (
            <ScrapbookPhoto
              key={p.Photo.src}
              src={p.Photo.src}
              alt={p.Photo.alt}
              height={p.Photo.height}
              width={p.Photo.width}
              className={p.Photo.className}
              imgClassName={p.Photo.imgClassName}
              dialogs={p.Dialog}
            />
          ))}
        </div>

        <div className="container mx-auto grid place-content-center text-center py-24 gap-4">
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "There is a whole new adventure in store for the sproutly Van.",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "Out of fear of missing out, she breezed through the main scenario, believing that the real fun awaits in the end.",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "Would she realize that the fun was in the journey all along?",
            })}
          </p>
        </div>
        <div className="pt-8 pb-4">
          <div className="flex flex-row gap-x-4 py-1">
            <h1 className="font-xivmeter text-lg">
              {intl.formatMessage({
                id: "WAY TOO FAST",
              })}
            </h1>
            <p className="font-sans font-light text-lg">
              Stormblood - Shadowbringers
            </p>
          </div>
          <hr />
        </div>
        <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {scrapbookPhotos2.map((p) => (
            <ScrapbookPhoto
              key={p.Photo.src}
              src={p.Photo.src}
              alt={p.Photo.alt}
              height={p.Photo.height}
              width={p.Photo.width}
              className={p.Photo.className}
              imgClassName={p.Photo.imgClassName}
              dialogs={p.Dialog}
            />
          ))}
        </div>
        <div className="container mx-auto grid place-content-center text-center py-24 gap-4">
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "As if by fate, Van's aetherial signature began to weaken, preventing her from manifesting her corporeal form.",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "And so she went on a month-long hiatus to recover, watching her friends from the aetherial sea.",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "In the process, she began telegraphing her memories, which are collected and catalogued in the form of a scrapbook you see today.",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "To speak plainly, my laptop broke.",
            })}
          </p>
        </div>
        <div className="pt-8 pb-4">
          <div className="flex flex-row gap-x-4 py-1">
            <h1 className="font-xivmeter text-lg">
              {intl.formatMessage({
                id: "WILL NOT SQUANDER",
              })}
            </h1>
            <p className="font-sans font-light text-lg">Endwalker</p>
          </div>
          <hr />
        </div>
        <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3 ">
          {scrapbookPhotos3.map((p) => (
            <ScrapbookPhoto
              key={p.Photo.src}
              src={p.Photo.src}
              alt={p.Photo.alt}
              height={p.Photo.height}
              width={p.Photo.width}
              className={p.Photo.className}
              imgClassName={p.Photo.imgClassName}
              dialogs={p.Dialog}
            />
          ))}
        </div>
        <div className="container mx-auto grid place-content-center text-center py-24 gap-4">
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "Fresh from finishing Endwalker, Van decides to take a small step back and see what else the world has to offer in preparation for the next journey ahead.",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "A passion for commerce and collectibles awakens from slumber, and soon enough Van discovers a whole new dimension of tradecraft and glam hunting.",
            })}
          </p>
        </div>
        <div className="pt-8 pb-4">
          <div className="flex flex-row gap-x-4 py-1">
            <h1 className="font-xivmeter text-lg">
              {intl.formatMessage({
                id: "A SOLE REASON",
              })}
            </h1>
            <p className="font-sans font-light text-lg">
              Post-Endwalker Crafting Arc
            </p>
          </div>
          <hr />
        </div>
        <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3">
          {scrapbookPhotos4.map((p) => (
            <ScrapbookPhoto
              key={p.Photo.src}
              src={p.Photo.src}
              alt={p.Photo.alt}
              height={p.Photo.height}
              width={p.Photo.width}
              className={p.Photo.className}
              imgClassName={p.Photo.imgClassName}
              dialogs={p.Dialog}
            />
          ))}
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
