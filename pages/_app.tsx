import '../styles/globals.css'
// import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import Layout from '../components/layouts'
import { SWRConfig } from 'swr';
import intance from '../api/config';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWarper = Component.Layout ?? Layout;

  return (
    <LayoutWarper>
      <SWRConfig value={{ fetcher: async (url:string) => intance.get(url) }}>
        <Component {...pageProps} />
      </SWRConfig>
    </LayoutWarper>
  )
}

export default MyApp
