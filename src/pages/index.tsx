import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Explanation } from "src/components/Explanation";
import { SearchForm, SearchWordList } from "src/components/Form";
import { TopSearchResultList } from "src/components/Result";
import { searchWordType } from "./type";

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
  const [searchWord, setSearchWord] = useState("");
  return (
    <div>
      <Head>
        <title>ログサポート</title>
      </Head>

      <main>
        <Explanation />
        <SearchWordList
          wordListObject={wordListObject}
          setSearchWord={setSearchWord}
        />
        <SearchForm searchWord={searchWord} />
        <TopSearchResultList />
      </main>
    </div>
  );
};

export default Home;
