import '../styles/globals.css'
// import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import Layout from '../components/layouts'
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWarper = Component.Layout ?? Layout;

  return (
    <LayoutWarper><Component {...pageProps}></Component></LayoutWarper>
  )
}

export default MyApp
