interface NavigationLink {
  title: string;
  href: string;
}

export const navigation: NavigationLink[] = [
  { title: "Home", href: "/" },
  { title: "Logs", href: "/logs" },
  { title: "Artworks", href: "/artworks" },
  { title: "Work", href: "/work" },
  { title: "Uses", href: "/uses" },
];
