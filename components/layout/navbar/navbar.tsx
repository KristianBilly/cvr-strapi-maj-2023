// @ts-nocheck
import styled from '@emotion/styled'
import { useRef, useEffect, MutableRefObject } from 'react'
import { LANDING_PAGE_PATH } from '@/constants/constants'
import { useSiteContext } from '@/context/site-context'
import { useTranslate } from '@/translations/useTranslate'
import { StyledLink } from '@/styles/styled-link'
import { StyledButton } from '@/styles/styled-button'
import { StyledImage } from '@/styles/styled-image'

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
    <NavbarWrapper>
      <NavCenter>
        <NavHeader>
          <StyledLink
            href={LANDING_PAGE_PATH}
            virkdk>
            Virk.dk
          </StyledLink>
          <NavToggle onClick={() => toggleLinks()}>
            <NavToggleIcon
              src="/hamburger-icon.png"
              alt="Mobile menu icon"
            />
          </NavToggle>
        </NavHeader>
        <NavLinksContainer ref={linksContainerRef}>
          <NavLinks ref={linksRef}>
            <StyledButton onClick={() => toggleLanguage()}>
              {t('navbar.language')}
            </StyledButton>
          </NavLinks>
        </NavLinksContainer>
      </NavCenter>
    </NavbarWrapper>
  )
}

export const NavbarWrapper = styled.nav`
  box-shadow: 0 0 0.6rem 0 #888888;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  transition: all 0.2s linear;

  @media (max-width: 767px) {
    justify-content: left;
  }
`

const NavCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;

  @media (max-width: 767px) {
    display: block;
    padding: 0;
  }
`

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`

const NavToggle = styled.button`
  font-size: 1.5rem;
  display: none;
  font-family: inherit;
  cursor: pointer;
  text-transform: capitalize;
  border: none;
  padding: 0;
  font-size: inherit;

  &:hover {
    color: rgb(101, 167, 189);
  }

  @media (max-width: 767px) {
    display: block;
  }
`

const NavToggleIcon = styled(StyledImage)`
  width: 1.3rem;
  height: 1.3rem;
`

const NavLinksContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.2s linear;

  @media (min-width: 767px) {
    height: auto !important;
  }
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
  }
`
