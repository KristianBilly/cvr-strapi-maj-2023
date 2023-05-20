// @ts-nocheck

import { PlaceholderRow } from '@/components/placeholder/placeholder-row'
import { API_ENDPOINT_PLACEHOLDERS } from '@/constants/constants'
import { getLocalisedData } from '@/utils/get-localised-data'
import { GetStaticProps } from 'next'

interface IndexProps {
  // placeholders:
}

const Index = ({ placeholders }: IndexProps) => {
  const localizedPlaceholders = getLocalisedData(placeholders)

  return (
    <>
      {localizedPlaceholders.map((row, index: number) => {
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
