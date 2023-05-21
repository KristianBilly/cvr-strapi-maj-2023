// @ts-nocheck

import { TextInput } from '@/components/other/text-input'
import { SearchResults } from '@/components/search/search-results'
import { useSiteContext } from '@/context/site-context'
import { useTranslate } from '@/translations/useTranslate'
import { API_ENDPOINT_COMAPNIES } from '@/constants/constants'
import { getLocalisedData } from '@/utils/get-localised-data'
import { GetStaticProps } from 'next'
import { ComponentsContainer } from '@/styles/shared-styles'

interface SearchWrapperProps {
  // companies:
}

const SearchWrapper = ({ companies }: SearchWrapperProps) => {
  const { searchField, setSearchField } = useSiteContext()
  const { t } = useTranslate()

  const localisedCompanies = getLocalisedData(companies)

  return (
    <ComponentsContainer>
      <div className="search-container">
        <h2 className="search-title">{t('search.title')} </h2>
        <TextInput
          search
          type="search"
          value={searchField}
          placeholder="Write Company Name, Cvr Number or Address"
          onChange={(e) => setSearchField(e.target.value)}
          autoFocus
        />
        <SearchResults localisedCompanies={localisedCompanies} />
      </div>
    </ComponentsContainer>
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
