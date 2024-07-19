import { FadeIn } from "../utilities/FadeIn";
import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import { useIntl } from "react-intl";

export default function About() {
  const intl = useIntl();

  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <FadeIn>
        <div className="md:container md:mx-auto lg:max-w-4xl px-4">
          <div className="flex flex-col-reverse lg:flex-row justify-center space-x-4">
            <div className="flex flex-col space-y-4 font-serif text-md text-justify">
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
              <div className="container mx-auto grid place-items-center">
                <Image
                  alt="Young Cooper Baihaqi reading a journal"
                  width={300}
                  height={300}
                  src={"/img/about/cooper-journal.png"}
                  placeholder="empty"
                />
              </div>
              <p>
                {intl.formatMessage({
                  id: "I remember writing journals when I was in middle school. Starting Form 1, I had a notebook in which I wrote just about anything that happened one particular day, and I would also scribble drawings on the side. There was a total of about 8 books and 3 sketchbooks before I took the SPM exam. Some of them got caught in the rain while some went missing and was later found with boob vandalism on my more feminine characters. They are largely embarassing now, but they remain fragments of memories worth documenting here perpetually.",
                })}
              </p>

              <p>
                {intl.formatMessage({
                  id: "It was once my dream to further my studies in Germany. I've always thought the place is akin to utopia, a land of knowledge and technological advancements. I laugh and cringe at how naive I was back then. But what I do know, is that when there is a will, there is definitely a way. I've received a sponsorship that brings me the opportunity to study there. I've completed a 6-month language course in Leipzig before starting my semester in a university in Deggendorf. I was quick to discover the harsh realities of life, like finding a place to stay, possibly making every mistake in the book. I was stuck in a state of survival, where would I be staying next every passing month. I realize that maybe I wasn't cut out for this, and I choose to call it quits. Nonetheless, I am determined to make amends and start anew in home soil, with newfound hope and empathy for others who are now facing what I once had. If I could achieve what I've dreamed before, I could achieve it again.",
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
        <div className="container mx-auto grid place-items-center my-16">
          <Image
            className="-rotate-1 shadow-md saturate-50"
            alt="Qayyum at a harbour"
            height={787}
            width={500}
            src={"/img/about/nurture-3.jpeg"}
            placeholder="empty"
          />
        </div>
        <div className="h-64"></div>
      </FadeIn>
    </Layout>
  );
}
