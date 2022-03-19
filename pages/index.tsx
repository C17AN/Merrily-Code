import Portfolio from "components/Portfolio";
import Head from "next/head";
import React from "react";

interface Props {}

const BasePage = (props: Props) => {
  const description = `코드와 음악, 그리고 맛있는 음식을 사랑하는 개발자입니다.`;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Head>
      <Portfolio />
    </>
  );
};

export default BasePage;
