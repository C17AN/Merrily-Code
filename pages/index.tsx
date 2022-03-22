import Home from "components/Home";
import Head from "next/head";
import React, { useState } from "react";

interface Props {}

const BasePage = (props: Props) => {
  const description = `코드와 음악, 그리고 맛있는 음식을 사랑하는 개발자입니다.`;
  const ogSiteName = "즐겁게, 코드";

  return (
    <>
      <Head>
        {/* <meta name="robots" content="noindex" /> */}
        <meta name="description" content={description} />
        <meta property="og:site_name" content={ogSiteName} />
        <meta property="og:description" content={description} />
      </Head>
      <Home />
    </>
  );
};

export default BasePage;
