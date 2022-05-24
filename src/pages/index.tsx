import { Button } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ログハウス情報検索サイト</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-red-500 underline">
          Hello world!
        </h1>
        <Button component="a" className="ml-4">
          Next link button
        </Button>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
