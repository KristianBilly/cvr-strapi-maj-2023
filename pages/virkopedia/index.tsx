import { FC, useState } from 'react'
import { VirkopediaArticle } from '@/components/virkopedia/virkopedia-article'
import { VirkopediaTab } from '@/components/virkopedia/virkopedia-tab'
import { API_ENDPOINT_VIRKOPEDIA } from '@/constants/constants'
import { getLocalisedData } from '@/utils/get-localised-data'
import { GetStaticProps } from 'next'

const Virkopedia = ({ articles }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  const localisedArticles = getLocalisedData(articles)
  const { content, title } = localisedArticles[activeButtonIndex].attributes

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {localisedArticles.map((article, index) => {
            const { title } = article.attributes

            return (
              <VirkopediaTab
                key={title + index}
                setActiveButtonIndex={setActiveButtonIndex}
                title={title}
                index={index}
                activeButtonIndex={activeButtonIndex}
              />
            )
          })}
        </div>
        <VirkopediaArticle
          title={title}
          content={content}
        />
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