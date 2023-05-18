import { getConvertedCompanyData } from 'utils'
import { CompanyTable } from 'components/company/company-table'
import Link from 'next/link'
import { SEARCH_PATH } from 'constants/constants'
import contentData from 'constants/database.json'
import { useTranslate } from 'translations/useTranslate'
import { API_ENDPOINT_COMAPNIES } from '../../constants/constants'

const Company = ({ selectedCompany }) => {
  const { t } = useTranslate()

  const formattedCompany = getConvertedCompanyData(selectedCompany)
  const companyName = t(selectedCompany?.companyName)

  if (!formattedCompany) return <h2>{t('companies.nocompanies')}</h2>

  return (
    <section className="company-page">
      <Link
        className="back-to-search"
        href={SEARCH_PATH}>
        {t('company.back.to.search')}
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={formattedCompany} />
    </section>
  )
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(API_ENDPOINT_COMAPNIES)
  const companies = await response.json()
  const mappedCompanies = companies.data.map((company) => company.attributes)

  const selectedCompany = mappedCompanies?.find(
    (company) => company.uid === params.uid
  )

  return {
    props: {
      selectedCompany,
    },
  }
}

export async function getStaticPaths({ locales }) {
  const response = await fetch(API_ENDPOINT_COMAPNIES)
  const companies = await response.json()
  const mappedCompanies = companies.data.map((company) => company.attributes)

  const paths = mappedCompanies
    .map(({ uid }) =>
      locales.map((locale) => ({
        params: { uid },
        locale,
      }))
    )
    .flat()

  return {
    paths: paths,
    fallback: false,
  }
}

export default Company
