import cc from 'classcat'
import { useSiteContext } from 'context/site-context'

export const MainContainer = ({ children }) => {
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
