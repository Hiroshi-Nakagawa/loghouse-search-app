import type { NextPage } from "next";
import Head from "next/head";
import { FormTest } from "src/components/Form";

const test: NextPage = () => {
  return (
    <div>
      <Head>
        <title>テストページ</title>
      </Head>
      <FormTest />
    </div>
  );
};

export default test;
