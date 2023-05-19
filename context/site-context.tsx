// @ts-nocheck

import React, { createContext, useContext, useState } from 'react'
import { DARK_THEME, LIGHT_THEME } from '@/constants/constants'
import { useRouter } from 'next/router'

export interface SiteContextProps {
  companies: any[]
  setCompanies: (companies: any[]) => void
  searchField: string
  setSearchField: (searchField: string) => void
  isSearchFieldEmpty: boolean
  isCompaniesFound: boolean
  showLinks: boolean
  toggleLinks: () => void
  theme: string
  isDarkTheme: boolean
  toggleTheme: () => void
  isEnglish: boolean
  toggleLanguage: () => void
}

interface SiteContextProviderProps {
  children: React.ReactNode
}

const defaultSiteContext = {
  companies: [],
  setCompanies: () => {},
  searchField: '',
  setSearchField: () => {},
  isSearchFieldEmpty: true,
  isCompaniesFound: false,
  showLinks: false,
  toggleLinks: () => {},
  theme: LIGHT_THEME,
  isDarkTheme: false,
  toggleTheme: () => {},
  isEnglish: true,
  toggleLanguage: () => {},
}

const SiteContext = createContext<SiteContextProps | null>(defaultSiteContext)

export const SiteContextProvider = ({ children }: SiteContextProviderProps) => {
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

  //Ismail
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
