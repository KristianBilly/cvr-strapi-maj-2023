// @ts-nocheck

import cc from 'classcat'
import { useSiteContext } from '@/context/site-context'

interface MainContainerProps {
  children: React.ReactNode
  showLinks?: boolean
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const { showLinks } = useSiteContext()

  return (
    <main
      className={cc([
        'main-container',
        {
          'main-container-showlinks': showLinks,
        },
      ])}>
      {children}
    </main>
  )
}
