import { layout } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto md:px-4 sm:px-2">
        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center">
          <div className="inline-block text-center">
            <Image
              className="transition duration-400"
              alt="a turkish van cat named Carina"
              src={"/img/profile.png"}
              width={480}
              height={600}
              placeholder={"blur"}
              blurDataURL={"/img/profile-placeholder.png"}
            ></Image>
          </div>
          <div className="flex flex-col lg:w-1/2 p-8 space-y-4 text-lg">
            <h1 className="font-serif text-6xl">Hello, friend!</h1>
            <p className="font-sans">
              I'm Qayyum, or you can call me smolpadok. I was born in Malaysia
              and now continuing studies in Germany. I'm a hobbyist frontend
              developer and designer for almost 9 years.
            </p>
            <p>
              I made this website from scratch with{" "}
              <span className="font-serif">Nextjs</span> and{" "}
              <span className="font-serif">Tailwindcss</span>. I hope you enjoy
              your stay!
            </p>
            <br className="my-4" />
            <br className="my-4" />
            <h1 className="font-serif text-2xl">Socials</h1>
            <ul className="list-disc list-inside">
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
    </Layout>
  );
}
