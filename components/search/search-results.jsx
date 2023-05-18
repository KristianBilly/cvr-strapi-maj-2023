import { useEffect } from 'react'
import { SearchCompany } from 'components/search/search-company'
import { useSiteContext } from 'context/site-context'
import { getConvertedSearchData, getFilteredCompanies } from 'utils'
import { useTranslate } from 'translations/useTranslate'

export const SearchResults = ({ localisedCompanies }) => {
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
    return <h3 className="message-title">{t('company.no.companies')}</h3>

  if (isCompaniesFound)
    return (
      <div>
        {companies.map((company) => {
          const convertedData = getConvertedSearchData(company)

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

  return
}
