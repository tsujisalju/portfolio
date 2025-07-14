import Image from "next/image";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useIntl } from "react-intl";

export default function About() {
  const intl = useIntl();

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <div className="sm:container mx-auto grid md:grid-cols-3 place-content-center gap-16 pt-16 px-8 sm:px-4 md:px-0">
        <div className="justify-self-center md:justify-self-end">
          <Image
            src="/img/avatar.png"
            height={400}
            width={400}
            alt="purrnama avatar"
            className="rounded-full"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-8 py-2 md:py-4 md:px-8 lg:px-16">
          <h1 className="font-display text-4xl text-center">
            {intl.formatMessage({ id: "Hi! I'm Qayyum Yazid." })}
          </h1>
          <div className="text-center">
            <h2 className="font-sans text-lg">
              {intl.formatMessage({
                id: "Software Engineering Student, Freelance Developer and Designer | Based in Johore, Malaysia 🇲🇾",
              })}
            </h2>
          </div>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "You may know me as purrnama, or my previous alias smolpadok, or by the name of my personas, Van or Cooper. Welcome to my little corner of the internet!",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "I found my passion in art and technology through the ability to express my creativity and create new worlds of wonder, brought to life by my characters and personas, whom serve as vessels that make up who I am. As I journey through this life, my illustrations catalog my joy and happiness, as well as my trials and tribulations. ❤️‍🩹",
            })}
          </p>
          <p className="font-sans text-lg">
            {intl.formatMessage({
              id: "This website serves as the main hub for showcasing all my artworks, as well as a creative outlet for all kinds of fun projects that combine programming and art! Soon you will find more ways to interact with me in interesting ways.",
            })}
          </p>
        </div>
      </div>
    </Layout>
  );
}
