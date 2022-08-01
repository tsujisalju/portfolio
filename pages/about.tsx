import { layout } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-row justify-center">
        <Image
          alt="a turkish van cat named Carina"
          src={"/img/profile.png"}
          width={480}
          height={600}
          placeholder={"blur"}
          blurDataURL={"/img/profile-placeholder.png"}
        ></Image>
        <div className="flex flex-col p-8 space-y-2">
          <h1 className="font-serif text-4xl">Qayyum Yazid</h1>
          <p className="font-sans">Frontend Developer & Designer</p>
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
          </ul>
        </div>
      </div>
    </Layout>
  );
}
