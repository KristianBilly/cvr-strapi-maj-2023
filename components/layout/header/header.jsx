import Link from 'next/link'
import { useTranslate } from 'translations/useTranslate'
import contentData from 'constants/database.json'

const headerData = contentData.headers

export const Header = () => {
  const { t } = useTranslate()

  return (
    <div className="header">
      <h1 className="header-title">{t('title')}</h1>
      <div className="header-container">
        {headerData.map(({ textKey, link }, index) => (
          <Link
            className="header-link"
            href={t(link)}
            key={link + index}>
            {t(textKey)}
          </Link>
        ))}
      </div>
    </div>
  )
}
