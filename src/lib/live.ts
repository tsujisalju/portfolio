export interface LiveBackground {
  src: string;
  name: string;
  species: string;
  reverse: boolean;
}

export const liveBackgrounds: LiveBackground[] = [
  {
    src: "img/forecast.webp",
    name: "Tsubaki Nishimura",
    species: "Oni",
    reverse: true,
  },
  {
    src: "img/favor.webp",
    name: "Van Carina",
    species: "Turkish Van Cat",
    reverse: false,
  },
];
