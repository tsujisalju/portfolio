import GeoDiv from "../components/GeoDiv";
import Image from "next/image";
import Layout from "../components/Layout";
import { Popover } from "@headlessui/react";
import React from "react";
import Tag from "../components/Tag";
import Tilt from "react-parallax-tilt";
import { skills } from "../lib/expertise";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { works } from "../lib/work";

export default function Achernar() {
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <div className="lg:container px-4 mx-auto flex flex-col gap-6 mb-8 overflow-visible">
        <h1 className="text-3xl font-display">
          {intl.formatMessage({ id: "Expertise" })}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleY={1}
              tiltMaxAngleX={1}
              tiltReverse
              scale={1.02}
              className="relative overflow-hidden hover:shadow-lg h-max"
            >
              <GeoDiv border cornertr className="p-6">
                <Popover className={"relative"}>
                  <Popover.Button className="flex flex-col gap-2 w-full">
                    <h2 className="font-sans font-bold text-xl flex-initial w-max">
                      {skill.title}
                    </h2>
                    <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 relative">
                      <div
                        style={{ width: skill.percentage + "%" }}
                        className="h-full bg-zinc-500"
                      ></div>
                    </div>
                  </Popover.Button>
                  <Popover.Panel
                    className={
                      "mt-4 p-4 flex flex-col border-solid border dark:border-white/20 border-black/20 backdrop-blur"
                    }
                  >
                    <p className="font-sans">
                      {locale == "en-US"
                        ? skill.en
                        : locale == "ms-MY"
                          ? skill.ms
                          : locale == "de-DE"
                            ? skill.de
                            : ""}
                    </p>
                  </Popover.Panel>
                </Popover>
              </GeoDiv>
            </Tilt>
          ))}
        </div>
      </div>
      <div className="lg:container px-4 mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-display">
          {intl.formatMessage({ id: "Commercial Works" })}
        </h1>
        {works.map((work, index) => (
          <Tilt
            key={index}
            tiltMaxAngleY={1}
            tiltMaxAngleX={1}
            tiltReverse
            scale={1.02}
            glareEnable
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="left"
            glareReverse
            className="relative overflow-hidden bg-zinc-50 dark:bg-white/5 shadow-xs hover:shadow-lg"
          >
            <GeoDiv borderx corner>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3">
                <div className="grid w-full h-full place-items-center p-8 gap-4">
                  {work.logo}
                  <div className="flex flex-row gap-2 justify-center flex-wrap">
                    {work.tags?.map((tag) => (
                      <Tag key={tag.en}>
                        {locale == "en-US"
                          ? tag.en
                          : locale == "ms-MY"
                            ? tag.ms
                            : locale == "de-DE"
                              ? tag.de
                              : ""}
                      </Tag>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="max-w-full overflow-x-hidden whitespace-nowrap">
                    <div
                      id="scrolling-gallery"
                      className="h-full min-w-max left-0 flex flex-row"
                    >
                      {work.imgs?.map((img, index) => (
                        <Image
                          key={index}
                          src={img.src}
                          alt={img.alt}
                          height={240}
                          width={350}
                        />
                      ))}
                      {work.imgs?.map((img, index) => (
                        <Image
                          key={index}
                          src={img.src}
                          alt={img.alt}
                          height={240}
                          width={350}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GeoDiv>
          </Tilt>
        ))}
      </div>
    </Layout>
  );
}
