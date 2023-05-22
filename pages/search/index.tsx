// @ts-nocheck

import styled from '@emotion/styled'
import { StyledTextInput } from '@/styles/styled-text-input'
import { SearchResults } from '@/components/search/search-results'
import { useSiteContext } from '@/context/site-context'
import { useTranslate } from '@/translations/useTranslate'
import { API_ENDPOINT_COMAPNIES } from '@/constants/constants'
import { getLocalisedData } from '@/utils/get-localised-data'
import { GetStaticProps } from 'next'
import { BaseLayout } from '@/styles/base-layout'
import { Typography } from '@mui/material'

interface SearchWrapperProps {
  // companies:
}

const SearchWrapper = ({ companies }: SearchWrapperProps) => {
  const { searchField, setSearchField } = useSiteContext()
  const { t } = useTranslate()

  const localisedCompanies = getLocalisedData(companies)

  return (
    <BaseLayout>
      <SearchContainer>
        <SearchTitleContainer>
          <Typography variant="h4">{t('search.title')} </Typography>
        </SearchTitleContainer>
        <StyledTextInput
          search
          type="search"
          value={searchField}
          placeholder="Write Company Name, Cvr Number or Address"
          onChange={(e) => setSearchField(e.target.value)}
          autoFocus
        />
        <SearchResults localisedCompanies={localisedCompanies} />
      </SearchContainer>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(API_ENDPOINT_COMAPNIES)
  const companies = await response.json()

  return {
    props: {
      companies,
    },
  }
}

export default SearchWrapper

export const SearchContainer = styled.div`
  width: 100%;
`

export const SearchTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`
