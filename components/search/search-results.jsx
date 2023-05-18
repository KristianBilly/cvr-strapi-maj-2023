import { useEffect } from 'react'
import { SearchCompany } from 'components/search/search-company'
import { useSiteContext } from 'context/site-context'
import { getConvertedSearchData, getFilteredCompanies } from 'utils'
import { useTranslate } from 'translations/useTranslate'

export const SearchResults = ({ allCompanies }) => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSiteContext()
  const { t } = useTranslate()

  useEffect(() => {
    isSearchFieldEmpty
      ? setCompanies(allCompanies)
      : setCompanies(getFilteredCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty)
    return <h3 className="message-title">{t('company.no.companies')}</h3>

  if (isCompaniesFound)
    return (
      <div>
        {companies.map((company, index) => {
          const convertedData = getConvertedSearchData({ ...company })

          return (
            <SearchCompany
              key={index}
              index={index}
              convertedData={convertedData}
            />
          )
        })}
      </div>
    )

  return
}
