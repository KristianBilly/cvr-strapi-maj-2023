// @ts-nocheck

import styled from '@emotion/styled'
import { useEffect } from 'react'
import { SearchCompany } from '@/components/search/search-company'
import { useSiteContext } from '@/context/site-context'
import { getFilteredCompanies } from '@/utils/get-filtered-companies'
import { getConvertedSearchData } from '@/utils/get-converted-search-data'
import { useTranslate } from '@/translations/useTranslate'
import { Typography } from '@mui/material'

interface SearchResultsProps {
  // localisedCompanies:
}

export const SearchResults = ({ localisedCompanies }: SearchResultsProps) => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSiteContext()
  const { t } = useTranslate()

  const companiesToDisplay = localisedCompanies.map(
    (company) => company.attributes
  )

  useEffect(() => {
    isSearchFieldEmpty
      ? setCompanies(companiesToDisplay)
      : setCompanies(getFilteredCompanies(searchField, companiesToDisplay))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty)
    return (
      <MessageTitleContainer>
        <Typography>{t('company.no.companies')}</Typography>
      </MessageTitleContainer>
    )

  if (isCompaniesFound)
    return (
      <div>
        {companies.map((company) => {
          const convertedData = getConvertedSearchData(company)
          console.log(convertedData)

          return (
            <SearchCompany
              key={company.uid}
              uid={company.uid}
              convertedData={convertedData}
            />
          )
        })}
      </div>
    )

  return <></>
}

export const MessageTitleContainer = styled.div`
  margin: 0.75rem 0;
`
