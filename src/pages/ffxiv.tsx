import Layout from "../components/Layout";
import { useState, useEffect, Fragment } from "react";
import { useIntl } from "react-intl";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { ClassJob, Nodestone, jobNameByIcon } from "../lib/ffxiv";
import { Transition, Tab } from "@headlessui/react";
import Button from "../components/Button";
import { shimmer, toBase64 } from "../components/ImageSkeleton";
import ScrapbookPhoto from "../components/ffxiv-scrapbook/ScrapbookPhoto";
import {
  scrapbookPhotos1,
  scrapbookPhotos2,
  scrapbookPhotos3,
  scrapbookPhotos4,
} from "../components/ffxiv-scrapbook/scrapbook";
import { FadeIn } from "../utilities/FadeIn";

const characterID = "46130616";

export default function FFXIV({
  nodestone,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isShowing, setIsShowing] = useState(false);
  const intl = useIntl();
  const activeClassJob: ClassJob =
    nodestone.ClassJobs[jobNameByIcon[nodestone.Character.ActiveClassjob]];
  const xivLevelPercentage = () => {
    if (nodestone.Character) {
      return (
        (parseInt(activeClassJob.CurrentEXP) /
          parseInt(activeClassJob.MaxEXP)) *
        100
      );
    } else {
      return 0;
    }
  };

  const icon = jobNameByIcon[nodestone.Character.ActiveClassjob];
  console.log(icon ?? "null");
  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
    setIsShowing(true);
  }, []);

  return (
    <Layout>
      {nodestone.Character ? (
        <div className="sm:container mx-auto grid lg:grid-cols-2 space-y-4 lg:space-y-0 pb-16">
          <div className="p-2 sm:p-8">
            <Transition
              show={isShowing}
              enter="transition duration-700"
              enterFrom="rotate-[30deg] -translate-y-[1000px]"
              enterTo="-rotate-2 translate-y-0"
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                tiltReverse
                scale={1.03}
              >
                <Image
                  src={nodestone.Character.Portrait}
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
          <FadeIn>
            <div className="flex flex-col p-8 lg:pr-16 space-y-8">
              <div>
                <h1 className="font-display text-4xl">
                  {nodestone.Character.Name}
                </h1>
                <p className="font-sans text-lg">{nodestone.Character.Title}</p>
              </div>
              <div>
                <div className="flex flex-row space-x-2 items-center pb-2">
                  <Image
                    src={nodestone.Character.ActiveClassjob}
                    alt={"Active Class Job Icon"}
                    height={32}
                    width={32}
                  />
                  <h2 className="font-display text-bold text-2xl">
                    {activeClassJob
                      ? activeClassJob.Unlockstate.toUpperCase()
                      : ""}
                  </h2>
                </div>

                <h2 className="font-xivmeter text-xl">
                  LEVEL {activeClassJob ? activeClassJob.Level : "--"}
                </h2>
                <div className="h-1 min-w-max bg-stone-300 dark:bg-stone-700">
                  <div
                    className="h-1"
                    style={{ width: `${xivLevelPercentage}%` }}
                  >
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
                  {activeClassJob
                    ? activeClassJob.Level === 90
                      ? "MAX"
                      : `EXP ${activeClassJob.CurrentEXP} / ${activeClassJob.MaxEXP}`
                    : "--"}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                <div>
                  <h2 className="font-xivmeter text-lg">
                    RACE / CLAN / GENDER
                  </h2>
                  <p className="font-sans text-lg">
                    {nodestone.Character.Race}
                  </p>
                  <p className="font-sans text-lg">
                    {nodestone.Character.Tribe} {nodestone.Character.Gender}
                  </p>
                </div>
                <div>
                  <h2 className="font-xivmeter text-lg">NAMEDAY</h2>
                  <p className="font-sans text-lg">
                    {nodestone.Character.Nameday}
                  </p>
                </div>
                <div>
                  <h2 className="font-xivmeter text-lg">GUARDIAN DEITY</h2>
                  <p className="font-sans text-lg">
                    {nodestone.Character.GuardianDeity.Name}
                  </p>
                </div>
                <div>
                  <h2 className="font-xivmeter text-lg">GRAND COMPANY RANK</h2>
                  <p className="font-sans text-lg">
                    {nodestone.Character.Rank}
                  </p>
                </div>
              </div>
              {/*<div className="grid grid-flow-row-dense grid-cols-8 gap-2 py-2">
                {Object.keys(nodestone.ClassJobs).map((key) => (
                  <div
                    key={nodestone.ClassJobs[key].Unlockstate}
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
                </div>*/}

              <Button
                href={
                  "https://na.finalfantasyxiv.com/lodestone/character/" +
                  characterID
                }
              >
                {intl.formatMessage({ id: "View on Lodestone" })}
              </Button>
            </div>
          </FadeIn>
        </div>
      ) : (
        <div className="container mx-auto grid place-content-center">
          <div className="py-4 px-6 bg-stone-200 dark:bg-stone-800 rotate-1 shadow-md rounded-md">
            <p className="font-sans text-lg">
              {intl.formatMessage({
                id: "Lodestone data is currently unavailable. Sorry for the inconvenience!",
              })}
            </p>
          </div>
        </div>
      )}
      <FadeIn>
        <section className="mx-auto px-4 lg:container">
          <div className="grid place-content-center text-center pt-24 pb-16 gap-2">
            <h1 className="font-handwritten text-5xl">
              {intl.formatMessage({ id: "The Unending Journey" })}
            </h1>
            <p className="font-sans text-lg">
              {intl.formatMessage({
                id: "Hover over a photo to echo a (silly) conversation of the past.",
              })}
            </p>
          </div>
          <Tab.Group>
            <Tab.List className="flex flex-row space-x-1 rounded-t-lg">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      (selected
                        ? "dark:bg-stone-700 bg-stone-200 grow"
                        : "bg-stone-300 dark:bg-stone-800") +
                      " transition transition-75 py-2 px-4 rounded-t-lg"
                    }
                  >
                    <div className={selected ? "" : "hidden lg:inline"}>
                      <h1 className="font-xivmeter text-lg">
                        {intl.formatMessage({
                          id: "A VAN WAS BORN",
                        })}
                      </h1>
                      <p className="font-sans font-light text-lg">
                        A Realm Reborn - Heavensward
                      </p>
                    </div>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      (selected
                        ? "dark:bg-stone-700 bg-stone-200 grow"
                        : "bg-stone-300 dark:bg-stone-800") +
                      " transition transition-75 py-2 px-4 rounded-t-lg"
                    }
                  >
                    <div className={selected ? "" : "hidden lg:inline"}>
                      <h1 className="font-xivmeter text-lg">
                        {intl.formatMessage({
                          id: "WAY TOO FAST",
                        })}
                      </h1>
                      <p className="font-sans font-light text-lg">
                        Stormblood - Shadowbringers
                      </p>
                    </div>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      (selected
                        ? "dark:bg-stone-700 bg-stone-200 grow"
                        : "bg-stone-300 dark:bg-stone-800") +
                      " transition transition-75 py-2 px-4 rounded-t-lg"
                    }
                  >
                    <div className={selected ? "" : "hidden lg:inline"}>
                      <h1 className="font-xivmeter text-lg">
                        {intl.formatMessage({
                          id: "WILL NOT SQUANDER",
                        })}
                      </h1>
                      <p className="font-sans font-light text-lg">Endwalker</p>
                    </div>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      (selected
                        ? "dark:bg-stone-700 bg-stone-200 grow"
                        : "bg-stone-300 dark:bg-stone-800") +
                      " transition transition-75 py-2 px-4 rounded-t-lg"
                    }
                  >
                    <div className={selected ? "" : "hidden lg:inline"}>
                      <h1 className="font-xivmeter text-lg">
                        {intl.formatMessage({
                          id: "A SOLE REASON",
                        })}
                      </h1>
                      <p className="font-sans font-light text-lg">
                        Post-Endwalker Crafting Arc
                      </p>
                    </div>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      (selected
                        ? "dark:bg-stone-700 bg-stone-200 grow"
                        : "bg-stone-300 dark:bg-stone-800") +
                      " transition transition-75 py-2 px-4 rounded-t-lg"
                    }
                  >
                    <div className={selected ? "" : "hidden lg:inline"}>
                      <h1 className="font-xivmeter text-lg">
                        {intl.formatMessage({
                          id: "THE GLAM HUNT",
                        })}
                      </h1>
                      <p className="font-sans font-light text-lg">
                        Post-Endwalker Glamour Arc
                      </p>
                    </div>
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="bg-stone-200 dark:bg-stone-700 p-4 pt-8 rounded-b-lg">
              <Tab.Panel>
                <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3">
                  {scrapbookPhotos1.map((p, i) => (
                    <ScrapbookPhoto
                      key={i}
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

                <div className="container mx-auto grid place-content-center text-center font-serif text-lg py-24 gap-4">
                  <p>
                    {intl.formatMessage({
                      id: "There is a whole new adventure in store for the sproutly Van.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      id: "Out of fear of missing out, she breezed through the main scenario, believing that the real fun awaits in the end.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      id: "Would she realize that the fun was in the journey all along?",
                    })}
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                  {scrapbookPhotos2.map((p, i) => (
                    <ScrapbookPhoto
                      key={i}
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
                <div className="container mx-auto grid place-content-center text-center font-serif text-lg py-24 gap-4">
                  <p>
                    {intl.formatMessage({
                      id: "As if by fate, Van's aetherial signature began to weaken, preventing her from manifesting her corporeal form.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      id: "And so she went on a month-long hiatus to recover, watching her friends from the aetherial sea.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      id: "In the process, she began telegraphing her memories, which are collected and catalogued in the form of a scrapbook you see today.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      id: "To speak plainly, my laptop broke.",
                    })}
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3 ">
                  {scrapbookPhotos3.map((p, i) => (
                    <ScrapbookPhoto
                      key={i}
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
                <div className="container mx-auto grid place-content-center text-center font-serif text-lg py-24 gap-4">
                  <p>
                    {intl.formatMessage({
                      id: "Fresh from finishing Endwalker, Van decides to take a small step back and see what else the world has to offer in preparation for the next journey ahead.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      id: "A passion for commerce and collectibles awakens from slumber, and soon enough Van discovers a whole new dimension of tradecraft and glam hunting.",
                    })}
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-flow-dense gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3">
                  {scrapbookPhotos4.map((p, i) => (
                    <ScrapbookPhoto
                      key={i}
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
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid place-content-center text-center py-24 gap-2">
                  <h1 className="font-handwritten text-5xl">
                    {intl.formatMessage({ id: "The journey continues.." })}
                  </h1>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </FadeIn>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const resChar = await fetch(
    "https://nodestone-e4o46op7lq-lz.a.run.app/Character/" +
      characterID +
      "?data=CJ"
  );
  const nodestone: Nodestone = await resChar.json();

  return {
    props: {
      nodestone,
    },
  };
};
