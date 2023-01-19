import Layout from "../components/Layout";
import React from "react";
import { useIntl } from "react-intl";
import Image from "next/image";

export default function Achernar() {
  const intl = useIntl();
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <div className="container mx-auto max-w-5xl mt-8">
        <h2 className="font-display text-3xl">
          {intl.formatMessage({ id: "Minswap DEX" })}
        </h2>
        <p className="font-sans text-lg">
          {intl.formatMessage({
            id: "Minswap DEX is a decentralized multi-pool exchange on the Cardano blockchain. I work alongside the marketing and UI/UX department to provide promotional content, merchandise and interface designs.",
          })}
        </p>
      </div>
      <div className="max-w-full overflow-x-hidden whitespace-nowrap py-8">
        <div
          id="minswap-gallery"
          className="h-[400px] min-w-max left-0 flex flex-row"
        >
          <Image
            alt="Catdano tokenomics"
            className="scroller"
            src="/img/minswap/catdano-minomics.png"
            width={320}
            height={400}
          />
          <Image
            alt="Catdano cneta"
            className="scroller"
            src="/img/minswap/catdano-cneta.png"
            width={500}
            height={400}
          />
          <Image
            alt="Catdano yummi"
            className="scroller"
            src="/img/minswap/catdano-yummi.png"
            width={320}
            height={400}
          />
          <Image
            alt="Catdano hosky"
            className="scroller"
            src="/img/minswap/catdano-hosky.png"
            width={320}
            height={400}
          />
          <Image
            alt="Catdano christmas"
            className="scroller"
            src="/img/minswap/catdano-christmas.png"
            width={400}
            height={400}
          />
          <Image
            alt="Catdano lunar new year"
            className="scroller"
            src="/img/minswap/catdano-lny.png"
            width={668}
            height={400}
          />
          <Image
            alt="Catdano tokenomics"
            className="scroller"
            src="/img/minswap/catdano-minomics.png"
            width={320}
            height={400}
          />
          <Image
            alt="Catdano cneta"
            className="scroller"
            src="/img/minswap/catdano-cneta.png"
            width={500}
            height={400}
          />
          <Image
            alt="Catdano yummi"
            className="scroller"
            src="/img/minswap/catdano-yummi.png"
            width={320}
            height={400}
          />
          <Image
            alt="Catdano hosky"
            className="scroller"
            src="/img/minswap/catdano-hosky.png"
            width={320}
            height={400}
          />
          <Image
            alt="Catdano christmas"
            className="scroller"
            src="/img/minswap/catdano-christmas.png"
            width={400}
            height={400}
          />
          <Image
            alt="Catdano lunar new year"
            className="scroller"
            src="/img/minswap/catdano-lny.png"
            width={668}
            height={400}
          />
        </div>
      </div>
    </Layout>
  );
}
