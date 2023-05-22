// @ts-nocheck
import { useTranslate } from '@/translations/useTranslate'
import contentData from '@/constants/database.json'
import styled from '@emotion/styled'

import { StyledLink } from '@/styles/styled-link'
import { Typography } from '@mui/material'

const headerData = contentData.headers

export const Header = () => {
  const { t } = useTranslate()

  return (
    <HeaderWrapper>
      <TitleContainer>
        <Typography variant="h4">{t('title')}</Typography>
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
