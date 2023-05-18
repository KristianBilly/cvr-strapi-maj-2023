import { useState } from 'react'
import { VirkopediaArticle } from 'components/virkopedia/virkopedia-article'
import { VirkopediaTab } from 'components/virkopedia/virkopedia-tab'
import contentData from 'constants/database.json'
import { useTranslate } from 'translations/useTranslate'
import {
  API_ENDPOINT_TODOS,
  API_ENDPOINT_VIRKOPEDIA,
} from '../../constants/constants'

const articles = contentData.virkopediaData

const Virkopedia = ({ testArticles }) => {
  const nyeArticles = testArticles.data
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { t } = useTranslate()
  const {
    attributes: { content, title },
  } = nyeArticles[activeButtonIndex]

  console.log(content, 'og', title)

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {nyeArticles.map((article, index) => {
            const { title } = article.attributes
            console.log(title)

            return (
              <VirkopediaTab
                key={t(title) + index}
                setActiveButtonIndex={setActiveButtonIndex}
                title={t(title)}
                index={index}
                activeButtonIndex={activeButtonIndex}
              />
            )
          })}
        </div>
        <VirkopediaArticle
          title={t(title)}
          content={t(content)}
        />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(API_ENDPOINT_VIRKOPEDIA)
  const testArticles = await response.json()

  // Axios
  // const response = await axios.get(API_ENDPOINT_TODOS)
  // const rowData = response.data  // This is for axios

  return {
    props: {
      testArticles,
    },
  }
}

export default Virkopedia
