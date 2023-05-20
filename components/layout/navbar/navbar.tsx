// @ts-nocheck
import { useRef, useEffect, MutableRefObject } from 'react'
import { LANDING_PAGE_PATH } from '@/constants/constants'
import { TextLink } from '@/components/other/text-link'
import { useSiteContext } from '@/context/site-context'
import { useTranslate } from '@/translations/useTranslate'

export const Navbar = () => {
  const { showLinks, toggleLinks, toggleLanguage } = useSiteContext()
  const linksContainerRef = useRef() as MutableRefObject<HTMLDivElement>
  const linksRef = useRef() as MutableRefObject<HTMLUListElement>
  const { t } = useTranslate()

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = '0px')
  }, [showLinks])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <TextLink
            path={LANDING_PAGE_PATH}
            text="Virk.dk"
            virkdk
          />
          <button
            className="nav-toggle"
            onClick={() => toggleLinks()}>
            <img
              className="nav-toggle-icon"
              src="/hamburger-icon.png"
              alt="Mobile menu icon"
            />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}>
          <ul
            className="links"
            ref={linksRef}>
            <button
              className="nav-links"
              onClick={() => toggleLanguage()}>
              {t('navbar.language')}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
