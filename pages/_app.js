import 'styles/main.scss'
import { Layout } from 'components/layout/layout'
import { SiteContextProvider } from 'context/site-context'

export default function App({ Component, pageProps }) {
  return (
    <SiteContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteContextProvider>
  )
}
