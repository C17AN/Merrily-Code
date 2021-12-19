import BaseLayout from 'layout/BaseLayout'
import '../styles/globals.css'
import '../styles/reset.css'
import "styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return <BaseLayout><Component {...pageProps} /></BaseLayout>
}

export default MyApp
