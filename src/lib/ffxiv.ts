import { GetServerSideProps } from "next";

export type FFXIVData = {
  Character: {
    ActiveClassJob: {
      ClassID: number;
      ExpLevel: number;
      ExpLevelMax: number;
      ExpLevelTogo: number;
      IsSpecialised: boolean;
      JobID: number;
      Level: number;
      Name: string;
      UnlockedState: {
        ID: number;
        Name: string;
      };
    };
    Avatar: string;
  };
};

export async function getFFXIVData() {
  const url = new URL("https://xivapi.com/character/46130616");
  const res = await fetch(url.toString());
  const ffxivData: FFXIVData = await res.json();
  return {
    props: {
      ffxivData,
    },
  };
}
