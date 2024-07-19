import { FadeIn } from "../utilities/FadeIn";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useIntl } from "react-intl";

export default function Uses() {
  const intl = useIntl();

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <FadeIn>
        <div className=" max-w-3xl mx-auto space-y-20 mt-16">
          <section className="relative md:border-l md:border-black/20 dark:md:border-white/20 md:pl-6 md:overflow-hidden">
            <div className="hidden md:inline absolute h-4 w-4 -top-2 -left-2 bg-black/20 dark:bg-white/20 rotate-45" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 px-8 lg:px-0">
              <h2 className="font-display text-2xl md:text-lg">
                {intl.formatMessage({ id: "Workstation" })}
              </h2>
              <div className="md:col-span-3">
                <ul className="space-y-16">
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Lenovo Legion 5 15ARH05" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "My first laptop. It runs on a modest AMD Ryzen 5 4600H and Nvidia GTX 1650. It is sufficient for what I do. Before this I would use the family 2011 iMac computer, so this is a significant upgrade. Later down the road I upgraded the RAM to 16GB and added a second 1TB SSD.",
                      })}
                    </p>
                  </li>
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Debian 12" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "I daily drive a custom built Debian 12 as my main operating system, by which I started with a very minimal install and then installing only the necessary packages that I need. I have been using Linux for over 3 years now and I'm always learning something new about maintaing and configuring my computer to be the best it could be for my needs. Of course, I always have my Windows partition lying around just in case.",
                      })}
                    </p>
                  </li>
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Huion Inspiroy Q11K V2" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "I specifically bought this tablet for its wireless feature. As a bonus, it also has a native Linux driver. The port on my previous tablet has gotten loose and frequently disconnects, plus I had to use workarounds to configure the buttons. This new one just works out of the box.",
                      })}
                    </p>
                  </li>
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Razer Kraken V3" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "A pair of headphones I picked up at MediaMarkt when I was in Germany. I needed something reasonably priced with a built-in microphone because my earphones were so busted. This was it.",
                      })}
                    </p>
                  </li>
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Razer Naga X" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "A well-built mouse with 12 buttons on its side. Why? Because I play FFXIV. My tiny hands could never reach the entirety of my keyboard, so honestly with this RPG mouse, I couldn't have it any other way.",
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
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Visual Studio Code" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "Polarizing topic regarding the best code editor aside, no doubt anyone would find its versatility and extensiveness of VS Code appealing. Most of my web and game projects are written with VS Code.",
                      })}
                    </p>
                  </li>
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Next.js" })}
                    </h3>
                    <p className="font-serif text-lg">
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
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Krita" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "The best of the best in terms of value, its free! Krita is a very respectable for an open-source software. Comes with lots of brushes, can record timelapses and also do animation! I love this software to bits and I will not have it any other way.",
                      })}
                    </p>
                  </li>
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Figma" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "We use Figma for all the interface mocks and marketing media. I find the sorting and layout particularly handy in comparison to other design programs.",
                      })}
                    </p>
                  </li>
                  <li>
                    <h3 className="font-sans font-bold text-lg">
                      {intl.formatMessage({ id: "Inkscape" })}
                    </h3>
                    <p className="font-serif text-lg">
                      {intl.formatMessage({
                        id: "As I ween my way out of Adobe, I'm getting used to FOSS alternatives. I have used Inkscape for many merch designs. Once you get used to how it works, it's fairly competent.",
                      })}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </FadeIn>
    </Layout>
  );
}
