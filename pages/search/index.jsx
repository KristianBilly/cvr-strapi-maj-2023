import { TextInput } from 'components/other/text-input'
import { SearchResults } from 'components/search/search-results'
import { useSiteContext } from 'context/site-context'
import contentData from 'constants/database.json'
import { useTranslate } from 'translations/useTranslate'

const allCompanies = contentData.companiesData

const SearchWrapper = () => {
  const { searchField, setSearchField } = useSiteContext()
  const { t } = useTranslate()

  return (
    <div className="search">
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
        <SearchResults allCompanies={allCompanies} />
      </div>
    </div>
  )
}

export default SearchWrapper
