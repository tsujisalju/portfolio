import Layout from "../components/Layout";
import Hero from "../components/Hero";
import React from "react";
import { useIntl } from "react-intl";

export default function Achernar() {
  const intl = useIntl();
  React.useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.className = "";
  }, []);
  return (
    <Layout>
      <Hero>
        <div>
          <h1 className="font-display text-4xl">
            {intl.formatMessage({
              id: "Achenar",
            })}
          </h1>
        </div>
        <p className="font-sans text-lg">
          {intl.formatMessage({
            id: "My new personal project, page under construction :)",
          })}
        </p>
      </Hero>
    </Layout>
  );
}
