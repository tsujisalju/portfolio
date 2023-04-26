import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "react-intl";
import Image from "next/image";
import { FadeIn } from "../utilities/FadeIn";

export default function About() {
  const intl = useIntl();

  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <div className="md:container md:mx-auto lg:max-w-4xl px-4">
        <div className="flex flex-col-reverse lg:flex-row justify-center space-x-4">
          <div className="flex flex-col space-y-6 font-serif text-md text-justify">
            <div className="container mx-auto grid place-items-center">
              <Image
                alt="Young Van Carina among some sunflowers"
                width={300}
                height={300}
                src={"/img/about/van-sunflower.png"}
                placeholder="empty"
              />
            </div>
            <p>
              {intl.formatMessage({
                id: "I was born in a small town in the northern region of Kedah. When I was 6 years old, my family moved all the way down to southern Johore. There used to be a small kindergarten in the neighbourhood, and there was only 3 to 4 children there. I remember eating scrambled eggs for breakfast, reading storybooks with grandma and going to the park nearby every saturday. It's a whole little family in there and I felt like I was part of it too. Today I looked back at the now defunct corner lot terrace where the kindergarten used to be, oh how I wish I could do it all over again.",
              })}
            </p>
            <p>
              {intl.formatMessage({
                id: "My mother introduced me to programming and game making since I was 9 years old, because I was always on the computer and I ought to put my hobby to good use rather than just mindless flash gaming. And you know what I was pretty hooked by the idea. The fact that I could create something awesome with my own touch of flare is amazing, and the passion burns strong since. The time was convenient enough that my middle school was getting around into participating robotics and game jam competitions. My friends and I pioneered the Robotics Club and I handled the programming side of things. One of the best memories I had was creating a Lego EV3 Mindstorms claw robot for an intrastate competition, and making the design decision to control it with another EV3 brick via Bluetooth instead of a phone over Wifi, which worked in our favor during the run. Before I left the school, they were already setting up courses for game dev with Unity3D, which is so super cool to see.",
              })}
            </p>
            <p>
              {intl.formatMessage({
                id: "I remember writing journals when I was in middle school. Starting Form 1, I had a notebook in which I wrote just about anything that happened one particular day, and I would also scribble drawings on the side. There was a total of about 8 books and 3 sketchbooks before I took the SPM exam. Some of them got caught in the rain while some went missing and was later found with boob vandalism on my more feminine characters. They are largely embarassing now, but they remain fragments of memories worth documenting here perpetually.",
              })}
            </p>
            <p>
              {intl.formatMessage({
                id: "I aspire to tell my own little story through my illustrations and creations. I am always passionate about creative story-telling and elegant use of technology. I prioritize on efficiency and making experiences effortless for anyone. In the end, I wish my creations bring benefit to all walks of life.",
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid place-items-center rotate-2 my-16">
        <Image
          className="shadow-md saturate-50"
          alt="Qayyum in a forest"
          height={667}
          width={500}
          src={"/img/about/nurture-2.jpg"}
          placeholder="empty"
        />
      </div>
      <div className="h-64"></div>
    </Layout>
  );
}
