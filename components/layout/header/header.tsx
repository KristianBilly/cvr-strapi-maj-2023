// @ts-nocheck
import { useTranslate } from '@/translations/useTranslate'
import contentData from '@/constants/database.json'
import styled from '@emotion/styled'
import {
  fontWeights,
  headerMargins,
  textFontSizes,
  textLineHeights,
} from '@/styles/shared-styles'
import { Text } from '@/styles/text'
import { StyledLink } from '@/styles/styled-link'

const headerData = contentData.headers

export const Header = () => {
  const { t } = useTranslate()

  return (
    <HeaderWrapper>
      <TitleContainer>
        <Text
          fontSize={textFontSizes.h1}
          fontWeight={fontWeights.h1}
          lineHeight={textLineHeights.h1}
          margin={headerMargins.h1}
          fontWeight={fontWeights.bold}>
          {t('title')}
        </Text>
      </TitleContainer>
      <HeaderContainer>
        {headerData.map(({ textKey, link }, index) => (
          <StyledLink
            href={t(link)}
            key={link + index}>
            {t(textKey)}
          </StyledLink>
        ))}
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 90vw;
  max-width: 1000px;
  margin-top: 2rem;
  padding-left: 0.5rem;
`

const TitleContainer = styled.div`
  margin-bottom: 12px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`
