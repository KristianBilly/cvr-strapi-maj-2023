// @ts-nocheck

import styled from '@emotion/styled'
import { getConvertedCompanyData } from '@/utils/get-converted-company-data'
import { SEARCH_PATH } from '@/constants/constants'
import { useTranslate } from '@/translations/useTranslate'
import { API_ENDPOINT_COMAPNIES } from '@/constants/constants'
import { GetStaticPaths, GetStaticProps } from 'next'
import { BaseLayout } from '@/styles/base-layout'
import { StyledLink } from '@/styles/styled-link'
import { Text } from '@/styles/styled-text'
import { fontWeights, textFontSizes } from '@/styles/shared-styles'

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
    <BaseLayout>
      <BackToSearchContainer>
        <StyledLink href={SEARCH_PATH}>
          {t('company.back.to.search')}
        </StyledLink>
      </BackToSearchContainer>
      <Text
        fontSize={textFontSizes.h2}
        fontWeight={fontWeights.bold}>
        {companyName}
      </Text>
      <CompanyContainer>
        {formattedCompany.map(({ title, field }, index) => (
          <CompanyTable key={t(field) + index}>
            <CompanyTitleContainer>
              <Text fontWeight={fontWeights.bold}>{t(title)} </Text>
            </CompanyTitleContainer>
            <Text>{t(field)} </Text>
          </CompanyTable>
        ))}
      </CompanyContainer>
    </BaseLayout>
  )
}

interface ParamProps {
  params: {
    uid: string | undefined
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(API_ENDPOINT_COMAPNIES)
  const data = await response.json()
  const mappedCompanies = data.data.map((company) => company.attributes)

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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const response = await fetch(API_ENDPOINT_COMAPNIES)
  const data = await response.json()
  const mappedCompanies = data.data.map((company) => company.attributes)

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

export const BackToSearchContainer = styled.div`
  align-self: flex-start;
`

export const CompanyContainer = styled.div`
  line-height: 1.5rem;
  border: solid 1px black;
  width: 100%;
  padding: 1.5rem;
  margin: 1rem;
`

export const CompanyTable = styled.div`
  margin-bottom: 1.25rem;
  display: flex;

  @media (max-width: 576px) {
    display: block;
  }
`

const CompanyTitleContainer = styled.div`
  flex: 0 0 200px;

  @media (max-width: 576px) {
    flex: 0 0 1;
  }
`
