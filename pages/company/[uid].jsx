import { getConvertedCompanyData } from 'utils'
import { CompanyTable } from 'components/company/company-table'
import Link from 'next/link'
import { SEARCH_PATH } from 'constants/constants'
import contentData from 'constants/database.json'
import { useTranslate } from 'translations/useTranslate'

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
  const companies = contentData.companiesData
  const selectedCompany = companies[params.uid]

  return {
    props: {
      selectedCompany,
    },
  }
}

export async function getStaticPaths() {
  const companies = contentData.companiesData

  const paths = companies.map(({ uid }) => {
    return {
      params: { uid },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export default Company
