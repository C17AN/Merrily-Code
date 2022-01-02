import BaseLayout from 'layout/BaseLayout'
import '../styles/globals.css'
import '../styles/reset.css'
import "styles/fonts.css";
import "styles/slick.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Head>
        <title>즐겁게, 코드</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
