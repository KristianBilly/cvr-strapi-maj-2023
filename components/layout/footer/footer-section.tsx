// @ts-nocheck

import { useTranslate } from '@/translations/useTranslate'
import { FooterLinksContainer } from './footer'
import { Typography } from '@mui/material'

interface FooterSectionProps {
  columnLinks: string[]
  index: number
}

export const FooterSection = ({ columnLinks }: FooterSectionProps) => {
  const { t } = useTranslate()

  return (
    <FooterLinksContainer>
      {columnLinks.map((paragraph, index) => {
        const shouldRenderBold = index === 0

        return (
          <Typography
            variant={shouldRenderBold ? 'h5' : 'body1'}
            index={index}
            key={paragraph}>
            {t(paragraph)}
          </Typography>
        )
      })}
    </FooterLinksContainer>
  )
}
