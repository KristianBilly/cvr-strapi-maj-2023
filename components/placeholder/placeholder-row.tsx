// @ts-nocheck
import { PlaceholderWrapper, TitleContainer } from './style'
import { ComponentsContainer } from '@/styles/shared-styles'
interface PlaceholderRowProps {
  row: {
    numberOfColumns: number
    titleColumnOne?: string
    contentColumnOne?: string
    titleColumnTwo?: string
    contentColumnTwo?: string
    titleColumnThree?: string
    contentColumnThree?: string
  }
}

interface allColumnsProps {
  title?: string
  text?: string
}

export const PlaceholderRow = ({ row }: PlaceholderRowProps) => {
  const {
    numberOfColumns,
    titleColumnOne,
    contentColumnOne,
    titleColumnTwo,
    contentColumnTwo,
    titleColumnThree,
    contentColumnThree,
  } = row

  const allColumns: allColumnsProps[] = [
    titleColumnOne && { title: titleColumnOne, text: contentColumnOne },
    titleColumnTwo && { title: titleColumnTwo, text: contentColumnTwo },
    titleColumnThree && { title: titleColumnThree, text: contentColumnThree },
  ]

  const shouldRenderColumn = allColumns.length !== 0

  return (
    <>
      {shouldRenderColumn && (
        <PlaceholderWrapper>
          {allColumns.slice(0, numberOfColumns).map((column, index) => {
            return (
              <ComponentsContainer key={numberOfColumns + index}>
                <TitleContainer>{column.title}</TitleContainer>
                <p>{column.text}</p>
              </ComponentsContainer>
            )
          })}
        </PlaceholderWrapper>
      )}
    </>
  )
}
