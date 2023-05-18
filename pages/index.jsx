import { PlaceholderRow } from 'components/placeholder/placeholder-row'
import contentData from 'constants/database.json'
import { API_ENDPOINT_PLACEHOLDERS } from '../constants/constants'

const landingPageRows = contentData.landingPageData

const Index = ({ placeholders }) => {
  return (
    <>
      {landingPageRows.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.contentColumnOne + index}
            row={row}
            placeholders={placeholders}
          />
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(API_ENDPOINT_PLACEHOLDERS)
  const placeholders = await response.json()

  return {
    props: {
      placeholders,
    },
  }
}

export default Index
