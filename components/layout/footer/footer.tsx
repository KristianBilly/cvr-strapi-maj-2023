// @ts-nocheck

import styled from '@emotion/styled'
import { LANDING_PAGE_PATH } from '@/constants/constants'
import contentData from '@/constants/database.json'
import { FooterSection } from '@/components/layout/footer/footer-section'
import { StyledLink } from '@/styles/styled-link'

const footerData = contentData.footer

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterCenter>
        <VirkdkContainer className="footer-section virkdk-container">
          <StyledLink
            href={LANDING_PAGE_PATH}
            virkdk>
            Virk.dk
          </StyledLink>
        </VirkdkContainer>
        {footerData.map(({ columnLinks, className }, index) => (
          <FooterSection
            key={className + index}
            columnLinks={columnLinks}
            className={className}
          />
        ))}
      </FooterCenter>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.6rem 0 #888888;
  margin-top: 3rem;
  padding: 2rem;
`

export const FooterCenter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 4rem 2rem;
  width: 100%;
  flex-direction: row;
  max-width: 1200px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const FooterSectionContainer = styled.div`
  flex: 0 0 calc(25% - 2rem);

  @media (max-width: 1000px) {
    flex: 0 0 calc(50% - 2rem);
  }

  @media (max-width: 576px) {
    flex: 0 0 1;
  }
`

export const VirkdkContainer = styled(FooterSectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterLinksContainer = styled(FooterSectionContainer)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`
