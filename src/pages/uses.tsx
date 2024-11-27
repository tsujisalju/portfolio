import Layout from "../components/Layout";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import GeoDiv from "../components/GeoDiv";

export default function Uses() {
  const intl = useIntl();

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 m-4">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="p-4 h-full">
            <h1 className="text-xl font-display">
              {intl.formatMessage({ id: "Hardware" })}
            </h1>
          </div>
          <div className="flex flex-col space-y-2 col-span-2">
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Keyboard" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Nuphy Halo75 V2" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Headphones" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Steelseries Arctis Nova 3" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Mouse" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Razer Naga X" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Drawing Tablet" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Huion Q11K V2" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Microphone" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "AKG Ara" })}
                </h2>
              </div>
            </GeoDiv>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="p-4 h-full">
            <h1 className="text-xl font-display">
              {intl.formatMessage({ id: "Development" })}
            </h1>
          </div>
          <div className="flex flex-col space-y-2 col-span-2">
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Operating System" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Debian 12" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Code Editor" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Zed" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Javascript Framework" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Next.js" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Deployment Infrastructure" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Vercel" })}
                </h2>
              </div>
            </GeoDiv>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="p-4 h-full">
            <h1 className="text-xl font-display">
              {intl.formatMessage({ id: "Design" })}
            </h1>
          </div>
          <div className="flex flex-col space-y-2 col-span-2">
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Illustration" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Krita" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "UI Design" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Figma" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Vector Graphics" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Inkscape" })}
                </h2>
              </div>
            </GeoDiv>
            <GeoDiv border cornertr>
              <div className="p-4 flex flex-col space-y-2">
                <small className="uppercase font-light">
                  {intl.formatMessage({ id: "Motion Graphics" })}
                </small>
                <h2 className="text-xl font-sans font-bold">
                  {intl.formatMessage({ id: "Adobe After Effects" })}
                </h2>
              </div>
            </GeoDiv>
          </div>
        </section>
      </div>
      {/*<div className=" max-w-3xl mx-auto space-y-20 mt-16">
        <section className="relative md:border-l md:border-black/20 dark:md:border-white/20 md:pl-6 md:overflow-hidden">
          <div className="hidden md:inline absolute h-4 w-4 -top-2 -left-2 bg-black/20 dark:bg-white/20 rotate-45" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 px-8 lg:px-0">
            <h2 className="font-display text-2xl md:text-lg">
              {intl.formatMessage({ id: "Workstation" })}
            </h2>
            <div className="md:col-span-3">
              <ul className="space-y-16">
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Lenovo Legion 5 15ARH05" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "My first laptop. It runs on a modest AMD Ryzen 5 4600H and Nvidia GTX 1650. It is sufficient for what I do. Before this I would use the family 2011 iMac computer, so this is a significant upgrade. Later down the road I upgraded the RAM to 16GB and added a second 1TB SSD.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Debian 12" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "I daily drive a custom built Debian 12 as my main operating system, by which I started with a very minimal install and then installing only the necessary packages that I need. I have been using Linux for over 3 years now and I'm always learning something new about maintaing and configuring my computer to be the best it could be for my needs. Of course, I always have my Windows partition lying around just in case.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Huion Inspiroy Q11K V2" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "I specifically bought this tablet for its wireless feature. As a bonus, it also has a native Linux driver. The port on my previous tablet has gotten loose and frequently disconnects, plus I had to use workarounds to configure the buttons. This new one just works out of the box.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Steelseries Arctis Nova 3" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "A pair of headphones I picked up at MediaMarkt when I was in Germany. I needed something reasonably priced with a built-in microphone because my earphones were so busted. This was it.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Razer Naga X" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "A solid mouse with 12 buttons on the side. I play MMOs every now and then, and my tiny hands could never reach the entirety of my keyboard to press all the hotkeys, so honestly with this RPG mouse, I couldn't have it any other way.",
                    })}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative md:border-l md:border-black/20 dark:md:border-white/20 md:pl-6 md:overflow-hidden">
          <div className="hidden md:inline absolute h-4 w-4 -top-2 -left-2 bg-black/20 dark:bg-white/20 rotate-45" />
          <div className="grid max-w-3xl mx-auto grid-cols-1 md:grid-cols-4 gap-y-8 px-8 lg:px-0">
            <h2 className="font-display text-2xl md:text-lg">
              {intl.formatMessage({ id: "Development" })}
            </h2>
            <div className="md:col-span-3">
              <ul className="space-y-16">
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Zed" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "Formerly using VS Code, I immediately fell in love by Zed's simpler and overall faster coding experience, realizing how cluttered everything was after going back. It's got some minor issues here and there, but the ecosystem is actively growing and getting better each passing day.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Next.js" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "I was exposed to Next.js as part of my frontend work at Minswap. As training, this website is also developed using the same framework. I still need to figure out how to transition to the new app router though.",
                    })}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="relative md:border-l md:border-black/20 dark:md:border-white/20 md:pl-6 md:overflow-hidden">
          <div className="hidden md:inline absolute h-4 w-4 -top-2 -left-2 bg-black/20 dark:bg-white/20 rotate-45" />
          <div className="grid max-w-3xl mx-auto grid-cols-1 md:grid-cols-4 gap-y-8 px-8 lg:px-0">
            <h2 className="font-display text-2xl md:text-lg">
              {intl.formatMessage({ id: "Design" })}
            </h2>
            <div className="md:col-span-3">
              <ul className="space-y-16">
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Krita" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "The best of the best in terms of value, its free! Krita is a very respectable for an open-source software. Comes with lots of brushes, can record timelapses and also do animation! I love this software to bits and I will not have it any other way.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Figma" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "We use Figma for all the interface mocks and marketing media. I find the sorting and layout particularly handy in comparison to other design programs.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg mb-2">
                    {intl.formatMessage({ id: "Inkscape" })}
                  </h3>
                  <p className="font-serif">
                    {intl.formatMessage({
                      id: "As I ween my way out of Adobe, I'm getting used to FOSS alternatives. I have used Inkscape for many merch designs. Once you get used to how it works, it's fairly competent.",
                    })}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>*/}
    </Layout>
  );
}
