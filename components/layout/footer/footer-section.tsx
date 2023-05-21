// @ts-nocheck

import { useTranslate } from '@/translations/useTranslate'
import { FooterLink, FooterLinksContainer } from './footer'

interface FooterSectionProps {
  columnLinks: string[]
  index: number
}

export const FooterSection = ({ columnLinks }: FooterSectionProps) => {
  const { t } = useTranslate()

  return (
    <FooterLinksContainer>
      {columnLinks.map((paragraph, index) => (
        <FooterLink
          index={index}
          key={paragraph}>
          {t(paragraph)}
        </FooterLink>
      ))}
    </FooterLinksContainer>
  )
}
