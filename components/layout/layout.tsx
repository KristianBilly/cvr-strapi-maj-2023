import Head from 'next/head'
import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'
import { MainContainer } from '@/components/layout/main-container/main-container'
import { Navbar } from '@/components/layout/navbar/navbar'
import { ThemeWrapper } from '@/components/layout/theme-wrapper/theme-wrapper'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <ThemeWrapper>
    <Head>
      <title>Virk.dk</title>
      <link
        rel="shortcut icon"
        href="virk-dk.ico"
      />
    </Head>
    <Navbar />
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
    <Footer />
  </ThemeWrapper>
)
