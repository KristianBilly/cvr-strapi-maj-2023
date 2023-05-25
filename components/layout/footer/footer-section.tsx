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
        console.log(index)
        console.log('shouldRenderBold 2', shouldRenderBold)

        return (
          <CustomTypography
            shouldRenderBold={shouldRenderBold}
            // variant={shouldRenderBold ? 'h5' : 'body1'}
            index={index}
            key={paragraph}>
            {t(paragraph)}
          </CustomTypography>
        )
      })}
    </FooterLinksContainer>
  )
}

export const CustomTypography = ({ shouldRenderBold, children }) => {
  const fontWeight = shouldRenderBold ? 'h1' : 'body1'
  console.log('fontWeight', fontWeight)
  console.log('shouldrenderbold', shouldRenderBold)

  const typographyStyle = {
    fontWeight: fontWeight,
  }

  console.log('typographyStyle', typographyStyle)

  return <Typography style={typographyStyle}>{children}</Typography>
}
