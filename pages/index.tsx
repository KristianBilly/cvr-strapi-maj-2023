import { PlaceholderRow } from '@/components/placeholder/placeholder-row'
import { API_ENDPOINT_PLACEHOLDERS } from '@/constants/constants'
import { getLocalisedData } from '@/utils/get-localised-data'
import { GetStaticProps } from 'next'

interface IndexProps {
  placeholders: any[]
}

// Ismail, this locallisedplaceholders gives an output. If it was properly type
// Here, row would be implied?
const Index = ({ placeholders }: IndexProps) => {
  const localizedPlaceholders = getLocalisedData(placeholders)

  return (
    <>
      {localizedPlaceholders.map((row: any, index: number) => {
        return (
          <PlaceholderRow
            key={row.attributes.contentColumnOne + index}
            row={row.attributes}
          />
        )
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(API_ENDPOINT_PLACEHOLDERS)
  const placeholders = await response.json()

  return {
    props: {
      placeholders,
    },
  }
}

export default Index
