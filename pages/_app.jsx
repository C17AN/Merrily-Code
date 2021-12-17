import BaseLayout from 'layout'
import '../styles/globals.css'
import '../styles/reset.css'

function MyApp({ Component, pageProps }) {
  return <BaseLayout><Component {...pageProps} /></BaseLayout>
}

export default MyApp
