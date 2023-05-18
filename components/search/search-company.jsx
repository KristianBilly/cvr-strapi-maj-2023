import Link from 'next/link'
import { useTranslate } from 'translations/useTranslate'
import data from 'translations/en.json'

export const SearchCompany = ({ convertedData, uid }) => {
  const { t } = useTranslate()

  return (
    <Link
      className="search-company"
      href={`/company/${uid}`}>
      <article className="search-article">
        {convertedData.map(({ title, paragraphOne, paragraphTwo }, index) => {
          return (
            <div
              key={t(title) + index}
              className="search-content">
              {title && <h4>{t(title)}</h4>}
              {paragraphOne && <p>{t(paragraphOne)}</p>}
              {paragraphTwo && <p>{t(paragraphTwo)}</p>}
            </div>
          )
        })}
      </article>
    </Link>
  )
}
