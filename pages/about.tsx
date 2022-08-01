import { layout } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto md:px-4 sm:px-2">
        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center">
          <div className="inline-block text-center space-y-4 p-4">
            <Image
              className="transition duration-400"
              alt="a turkish van cat named Carina"
              src={"/img/profile.png"}
              width={500}
              height={500}
              placeholder={"blur"}
              blurDataURL={"/img/profile-placeholder.png"}
            ></Image>
            <h1 className="text-stone-400">
              <span className="font-serif">Van Carina</span>, a turkish van
              merchant/civil engineer.
            </h1>
          </div>
          <div className="flex flex-col lg:w-1/2 p-8 space-y-6 text-lg">
            <h1 className="font-serif text-6xl">Hello, friend!</h1>
            <p className="font-sans text-stone-200">
              I&apos;m Qayyum, or you can call me smolpadok. I was born in
              Malaysia and now continuing my studies in Germany. I&apos;m a
              hobbyist frontend developer and designer for almost 9 years.
            </p>
            <p className="font-sans text-stone-200">
              I made this website from scratch with{" "}
              <span className="font-serif">Nextjs</span> and{" "}
              <span className="font-serif">Tailwindcss</span>. I hope you enjoy
              your stay!
            </p>
            <br className="my-4" />
            <br className="my-4" />
            <h1 className="font-serif text-2xl">Socials</h1>
            <ul className="list-disc list-inside font-sans text-stone-200">
              <li>
                <a
                  href="https://twitter.com/smolpadok"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/smolpadok"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container my-8 mx-auto md:px-4 sm:px-2 bg-stone-800">
        <div className="flex flex-col lg:w-1/2 p-8 space-y-6 text-lg">
          <h1 className="font-serif text-6xl">My experience</h1>
          <p className="font-sans text-stone-200">
            At a young age, I display a passion for programming. My mother
            introduced me to a game making platform called Sploder (now shut
            down). It was fascinating to me at the time that I could make my
            very own games. Soon I learned the basics of programming with MIT
            Scratch. The ability of creating whatever I put my mind to feels
            like a superpower, and that feeling remained strong since.
          </p>
          <p className="font-sans text-stone-200">
            This passion brings forth to me opportunities to participate in game
            dev and robotics competitions. During middle school, my batch
            pioneered the Robotics Club. Our school was just beginning to
            venture into IT-related activities
          </p>
        </div>
      </div>

      <div className="container mx-auto md:px-4 sm:px-2">
        <div className="flex flex-col lg:w-1/2 p-8 space-y-6 text-lg">
          <h1 className="font-serif text-6xl">So much cat?</h1>
          <p className="font-sans text-stone-200">
            The illustrations I make, describe a world of places I&apos;m
            passionate about, the things I want to do and the kind of person I
            wish to become. They are not tied to a particular story, leaving
            enough room for self-interpretation.
          </p>
          <p className="font-sans text-stone-200">
            I take great lessons from cats, being a person who has pet cats in
            real life. Cats are resilient, loving, intelligent yet whimsical and
            they are more aware of the existence of higher beings, things of
            greater good. If granted sentience, I believe they can create better
            worlds than we do. That is a narrative I&apos;d like to bring in my
            illustrations, as a motivation for myself, and hopefully for others
            to explore and learn for the betterment of society.
          </p>
        </div>
      </div>
      <div className="h-96"></div>
    </Layout>
  );
}
