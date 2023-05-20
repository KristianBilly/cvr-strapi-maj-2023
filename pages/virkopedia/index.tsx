// @ts-nocheck

import { useState } from 'react'
import { VirkopediaTab } from '@/components/virkopedia/virkopedia-tab'
import { API_ENDPOINT_VIRKOPEDIA } from '@/constants/constants'
import { getLocalisedData } from '@/utils/get-localised-data'
import { GetStaticProps } from 'next'
import cc from 'classcat'

interface VirkopediaProps {
  // articles:
}

const Virkopedia = ({ articles }: VirkopediaProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  const localisedArticles = getLocalisedData(articles)
  const { content, title } = localisedArticles[activeButtonIndex].attributes

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {localisedArticles.map((article, index: number) => {
            const { title } = article.attributes
            const isActiveButton = index === activeButtonIndex

            return (
              <button
                key={title + index}
                onClick={() => setActiveButtonIndex(index)}
                className={cc([
                  'article-btn',
                  {
                    'active-btn': isActiveButton,
                  },
                ])}>
                {title}
              </button>
            )
          })}
        </div>
        <article>
          <h3>{title}</h3>
          <p>{content}</p>
        </article>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(API_ENDPOINT_VIRKOPEDIA)
  const articles = await response.json()

  return {
    props: {
      articles,
    },
  }
}

export default Virkopedia
