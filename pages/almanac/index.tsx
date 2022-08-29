import type { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-5xl">Almanac</h1>
        </div>
      </div>
    </Layout>
  );
}
