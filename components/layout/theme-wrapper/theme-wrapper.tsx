// @ts-nocheck

import cc from 'classcat'
import { useSiteContext } from '@/context/site-context'

interface ThemeWrapperProps {
  children: React.ReactNode
}

//Ismail
export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
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
