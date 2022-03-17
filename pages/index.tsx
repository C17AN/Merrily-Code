import Portfolio from "components/Portfolio";
import BaseLayout from "layout/BaseLayout";
import Head from "next/head";
import React from "react";

interface Props {}

const BasePage = (props: Props) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Portfolio />
    </>
  );
};

export default BasePage;
