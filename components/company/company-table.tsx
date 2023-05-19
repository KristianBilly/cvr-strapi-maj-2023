import { useTranslate } from '@/translations/useTranslate'

interface CompanyTableProps {
  company: {
    title: string
    field: string
  }[]
}

export const CompanyTable = ({ company }: CompanyTableProps) => {
  const { t } = useTranslate()

  return (
    <div className="company-table">
      {company.map(({ title, field }, index) => (
        <div
          className="content-container"
          key={t(field) + index}>
          <p className="title">{t(title)} </p>
          <p>{t(field)} </p>
        </div>
      ))}
    </div>
  )
}
