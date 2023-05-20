// @ts-nocheck

import { useSiteContext } from '@/context/site-context'
import { useTranslate } from '@/translations/useTranslate'

interface NavbarLinksProps {
  linksContainerRef: React.MutableRefObject<HTMLDivElement>
  linksRef: React.MutableRefObject<HTMLUListElement>
}

// Ismail
export const NavbarLinks = ({
  linksContainerRef,
  linksRef,
}: NavbarLinksProps) => {
  const { toggleLanguage } = useSiteContext()
  const { t } = useTranslate()

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
          onClick={() => toggleLanguage()}>
          {languageButton}
        </button>
      </ul>
    </div>
  )
}
