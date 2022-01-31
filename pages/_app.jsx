import BaseLayout from 'layout/BaseLayout'
import '../styles/globals.css'
import '../styles/reset.css'
import "styles/fonts.css";
import "styles/slick.css";
import Head from 'next/head';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log("%c🎶 즐겁게, 코드! 💻", "font-size: 2rem; padding: 1rem; margin: 1rem; background-color: white; border: 10px solid #4287f5; border-radius: 8px; color: #666; font-family: sans-serif; font-weight: 500");
    console.log("                                 ___                                       __                   \r\n \/\'\\_\/`\\                 __  __ \/\\_ \\                                     \/\\ \\                  \r\n\/\\      \\     __   _ __ \/\\_\\\/\\_\\\\\/\/\\ \\    __  __            ___    ___    \\_\\ \\     __          \r\n\\ \\ \\__\\ \\  \/\'__`\\\/\\`\'__\\\/\\ \\\/\\ \\ \\ \\ \\  \/\\ \\\/\\ \\          \/\'___\\ \/ __`\\  \/\'_` \\  \/\'__`\\        \r\n \\ \\ \\_\/\\ \\\/\\  __\/\\ \\ \\\/ \\ \\ \\ \\ \\ \\_\\ \\_\\ \\ \\_\\ \\  __    \/\\ \\__\/\/\\ \\L\\ \\\/\\ \\L\\ \\\/\\  __\/        \r\n  \\ \\_\\\\ \\_\\ \\____\\\\ \\_\\  \\ \\_\\ \\_\\\/\\____\\\\\/`____ \\\/\\ \\   \\ \\____\\ \\____\/\\ \\___,_\\ \\____\\       \r\n   \\\/_\/ \\\/_\/\\\/____\/ \\\/_\/   \\\/_\/\\\/_\/\\\/____\/ `\/___\/> \\ \\\/    \\\/____\/\\\/___\/  \\\/__,_ \/\\\/____\/       \r\n                                              \/\\___\/\\\/                                          \r\n                                              \\\/__\/                                             ")
  }, [])

  return (
    <BaseLayout>
      <Head>
        <title>즐겁게, 코드</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="c1j88i3K1g6h6tJiaoy7s61WvO8y07gMnkyLC2pj3Fg" />
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
