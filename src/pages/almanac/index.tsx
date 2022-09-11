import type { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-display text-5xl">Almanac</h1>
          <p className="font-sans text-lg">
            Get to know the members of the consortium.
          </p>
        </div>
      </div>
    </Layout>
  );
}
