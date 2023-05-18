import { createContext, useContext, useState } from 'react'
import { DARK_THEME, LIGHT_THEME } from 'constants/constants'
import { useRouter } from 'next/router'

const SiteContext = createContext()

export const SiteContextProvider = ({ children }) => {
  //Search
  const [companies, setCompanies] = useState([])
  const [searchField, setSearchField] = useState('')

  const isSearchFieldEmpty = searchField === ''
  const isCompaniesFound = !!companies.length

  //Navbar
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => setShowLinks(!showLinks)

  // Theme
  const [theme, setTheme] = useState(LIGHT_THEME)

  const isDarkTheme = theme === DARK_THEME

  const toggleTheme = () =>
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)

  // Language
  const router = useRouter()
  const { locale } = router
  const isEnglish = locale === 'en'

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'da' : 'en'
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <SiteContext.Provider
      value={{
        companies,
        setCompanies,
        searchField,
        setSearchField,
        isSearchFieldEmpty,
        isCompaniesFound,
        showLinks,
        toggleLinks,
        theme,
        isDarkTheme,
        toggleTheme,
        isEnglish,
        toggleLanguage,
      }}>
      {children}
    </SiteContext.Provider>
  )
}

export const useSiteContext = () => useContext(SiteContext)
