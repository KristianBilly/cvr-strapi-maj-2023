import Link from 'next/link'
import { useTranslate } from 'translations/useTranslate'

export const SearchCompany = ({ convertedData, index }) => {
  const { t } = useTranslate()

  return (
    <Link
      className="search-company"
      href={`/company/${index}`}>
      <article className="search-article">
        {convertedData.map(({ title, paragraphOne, paragraphTwo }, index) => {
          return (
            <div
              key={title + index}
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
