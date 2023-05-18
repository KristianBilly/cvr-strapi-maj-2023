import { useSiteContext } from 'context/site-context'
import { useTranslate } from 'translations/useTranslate'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const { isDarkTheme, toggleTheme, toggleLanguage } = useSiteContext()
  const { t } = useTranslate()

  const themeButton = isDarkTheme
    ? t('navbar.theme.light')
    : t('navbar.theme.dark')
  const languageButton = t('navbar.language')

  return (
    <div
      className="links-container"
      ref={linksContainerRef}>
      <ul
        className="links"
        ref={linksRef}>
        <button
          className="theme-btn"
          onClick={() => toggleTheme()}>
          {themeButton}
        </button>
        <button
          className="theme-btn"
          onClick={() => toggleLanguage()}>
          {languageButton}
        </button>
      </ul>
    </div>
  )
}
