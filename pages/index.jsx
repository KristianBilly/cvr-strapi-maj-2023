import { PlaceholderRow } from 'components/placeholder/placeholder-row'
import { API_ENDPOINT_PLACEHOLDERS } from '../constants/constants'
import { getLocalisedData } from '../utils/get-localised-data'

const Index = ({ placeholders }) => {
  const localizedPlaceholders = getLocalisedData(placeholders)

  return (
    <>
      {localizedPlaceholders.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.contentColumnOne + index}
            row={row.attributes}
            localizedPlaceholders={localizedPlaceholders}
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
