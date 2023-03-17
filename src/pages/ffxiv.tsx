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
      <FadeIn>
        <div className="sm:container mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-4 lg:space-y-0">
          <div className="p-8 mx-auto lg:mx-0 lg:ml-auto">
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} tiltReverse scale={1.05}>
              <Image
                src={xivapi.Character.Portrait}
                alt="Player Avatar"
                width={640 / 1.5}
                height={873 / 1.5}
                className="transition rounded-lg shadow-md -rotate-2 hover:shadow-xl"
              />
            </Tilt>
          </div>
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
                EXP {xivapi.Character.ActiveClassJob.ExpLevel} /{" "}
                {xivapi.Character.ActiveClassJob.ExpLevelMax}
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
          </div>
        </div>
      </FadeIn>
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
