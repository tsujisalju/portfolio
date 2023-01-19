import Layout from "../components/Layout";
import { useIntl } from "react-intl";
import { useEffect } from "react";

export default function Uses() {
  const intl = useIntl();

  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);

  return (
    <Layout>
      <div className=" max-w-3xl mx-auto space-y-20 mt-16">
        <section className="md:border-l md:border-stone-400 dark:md:border-stone-700 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 px-16 lg:px-0">
            <h2 className="font-display text-lg">
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
                      id: "My first laptop. It runs on a modest AMD Ryzen 5 4600H and Nvidia GTX 1650. It is sufficient for what I do. Before this I would use the family 2011 iMac computer, so this is a significant upgrade. Later down the road I upgraded the RAM to 16GB and added a second 1TB SSD. I also installed Debian 11 as the main OS.",
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
              </ul>
            </div>
          </div>
        </section>

        <section className="md:border-l md:border-stone-400 dark:md:border-stone-700  md:pl-6">
          <div className="grid max-w-3xl mx-auto grid-cols-1 md:grid-cols-4 gap-y-8 px-16 lg:px-0">
            <h2 className="font-display text-lg">
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
                      id: "No doubt everyone uses this. I use it for all my game and web dev work. It's so nice to have all sorts of support and extensions for any programming work imaginable.",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg">
                    {intl.formatMessage({ id: "Unity3D" })}
                  </h3>
                  <p className="font-serif text-lg">
                    {intl.formatMessage({
                      id: "It has been a while since I've revisited some old game projects of mine. My feelings for Unity has been a little tainted lately, after all the shenanigans of the upper management. I may consider checking out other engines too.",
                    })}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="md:border-l md:border-stone-400 dark:md:border-stone-700  md:pl-6">
          <div className="grid max-w-3xl mx-auto grid-cols-1 md:grid-cols-4 gap-y-8 px-16 lg:px-0">
            <h2 className="font-display text-lg">
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
                      id: "I'm still surprised that this art program is free. It is a very respectable for an open-source software. Comes with lots of brushes, can record timelapses and also do animation!",
                    })}
                  </p>
                </li>
                <li>
                  <h3 className="font-sans font-bold text-lg">
                    {intl.formatMessage({ id: "Figma" })}
                  </h3>
                  <p className="font-serif text-lg">
                    {intl.formatMessage({
                      id: "We use Figma for all the interface mocks and marketing media. I find the sorting and layout particularly handy in comparison to other design programs. Just found out they're being bought out by Adobe, so I only expect the worst.",
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
                <li>
                  <h3 className="font-sans font-bold text-lg">
                    {intl.formatMessage({ id: "Velvetyne" })}
                  </h3>
                  <p className="font-serif text-lg">
                    {intl.formatMessage({
                      id: "If you need awesome, grotesque, avant-garde looking typefonts, this is the place for you! All fonts here are libre and open sourced.",
                    })}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
