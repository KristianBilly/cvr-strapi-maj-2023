// @ts-nocheck
import { useTranslate } from '@/translations/useTranslate'
import { StyledLink } from '@/styles/styled-link'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

interface SearchCompanyProps {
  convertedData: {
    title?: string
    paragraphOne?: string
    paragraphTwo?: string
  }[]
  uid: string
}

export const SearchCompany = ({ convertedData, uid }: SearchCompanyProps) => {
  const { t } = useTranslate()

  return (
    <StyledLink href={`/company/${uid}`}>
      <SearchResultContainer>
        {convertedData.map(({ title, paragraphOne, paragraphTwo }, index) => {
          return (
            <SingleSearchResult key={t(title) + index}>
              {title && <Typography variant="h6">{t(title)}</Typography>}
              {paragraphOne && <Typography>{t(paragraphOne)}</Typography>}
              {paragraphTwo && <Typography>{t(paragraphTwo)}</Typography>}
            </SingleSearchResult>
          )
        })}
      </SearchResultContainer>
    </StyledLink>
  )
}

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem 0;
  border: solid 1px black;
  padding: 1.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const SingleSearchResult = styled.div`
  flex: 0 0 calc(25% - 1rem);

  @media (max-width: 1000px) {
    flex: 0 0 calc(50% - 1rem);
  }

  @media (max-width: 767px) {
    flex: 0 0 1;
  }
`
