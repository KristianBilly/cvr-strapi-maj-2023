import cc from 'classcat'
import { useSiteContext } from '/context/site-context'

export const ThemeWrapper = ({ children }) => {
  const { isDarkTheme } = useSiteContext()

  return (
    <div
      className={cc([
        'theme-wrapper',
        'light-theme',
        {
          'dark-theme': isDarkTheme,
        },
      ])}>
      {children}
    </div>
  )
}
