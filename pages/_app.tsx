import { Layout } from '@/components/layout/layout'
import { SiteContextProvider } from '@/context/site-context'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteContextProvider>
  )
}
