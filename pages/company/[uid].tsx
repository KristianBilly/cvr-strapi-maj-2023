import { getConvertedCompanyData } from '@/utils/get-converted-company-data'
import { CompanyTable } from '@/components/company/company-table'
import Link from 'next/link'
import { SEARCH_PATH } from '@/constants/constants'
import { useTranslate } from '@/translations/useTranslate'
import { API_ENDPOINT_COMAPNIES } from '@/constants/constants'

interface CompanyProps {
  selectedCompany: {
    cvrNumber: string
    address: string
    postNoCity: string
    companyType: string
    companyName: string
  }
}

const Company = ({ selectedCompany }: CompanyProps) => {
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

interface ParamProps {
  params: {
    uid: string | undefined
  }
}

// Ismail: The any[] hack. What should be placed there instead?
// Ismail: When I give it give it egtStaticProps : GetStaticProps, and
// ... :ParamProps then it's not happy.
// The same with locales under, "it's possible undifined"
// Why did I need to give it undefined above?
export const getStaticProps = async ({ params }: ParamProps) => {
  const response = await fetch(API_ENDPOINT_COMAPNIES)
  const data = await response.json()
  const companies: any[] = data.data
  const mappedCompanies = companies.map((company) => company.attributes)

  const selectedCompany = mappedCompanies?.find(
    (company) => company.uid === params.uid
  )

  return {
    props: {
      selectedCompany,
    },
  }
}

interface LocaleProps {
  locales: string[]
}

export const getStaticPaths = async ({ locales }: LocaleProps) => {
  const response = await fetch(API_ENDPOINT_COMAPNIES)
  const data = await response.json()
  const companies: any[] = data.data
  const mappedCompanies = companies.map((company) => company.attributes)

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
