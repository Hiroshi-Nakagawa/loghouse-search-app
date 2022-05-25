import type { NextPage } from "next";
import Head from "next/head";
import { Explanation } from "src/components/Explanation";
import { SearchWordList } from "src/components/Form";

type searchWordType = {
  id: number;
  word: string;
};

const wordList: string[] = [
  "価格",
  "中古",
  "賃貸",
  "シロアリ",
  "安く買う",
  "中古",
  "賃貸",
  "シロアリ",
  "安く買う",
  "中古",
  "賃貸",
  "シロアリ",
  "安く買う",
  "中古",
  "賃貸",
  "シロアリ",
  "安く買う",
  "中古",
  "賃貸",
  "シロアリ",
  "安く買う",
];

const wordListObject: searchWordType[] = wordList.map((word) => {
  return { id: Math.random(), word: word };
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ログサポート</title>
      </Head>

      <main>
        <Explanation />
        <SearchWordList wordListObject={wordListObject} />
      </main>
    </div>
  );
};

export default Home;
