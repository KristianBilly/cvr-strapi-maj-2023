import { useTranslate } from 'translations/useTranslate'

export const PlaceholderRow = ({ row, placeholders }) => {
  console.log('placeholders', placeholders.data[0].attributes)
  console.log('row', row)
  const {
    numberOfColumns,
    titleColumnOne,
    contentColumnOne,
    titleColumnTwo,
    contentColumnTwo,
    titleColumnThree,
    contentColumnThree,
  } = row

  const allColumns = [
    titleColumnOne && { title: titleColumnOne, text: contentColumnOne },
    titleColumnTwo && { title: titleColumnTwo, text: contentColumnTwo },
    titleColumnThree && { title: titleColumnThree, text: contentColumnThree },
  ]

  const shouldRenderColumn = allColumns.lengh !== 0
  const numberOfColumnsAsNumber = Number(numberOfColumns)

  return (
    shouldRenderColumn && (
      <div className="placeholder-wrapper">
        {allColumns.slice(0, numberOfColumnsAsNumber).map((column, index) => {
          return (
            <div
              key={column.title + numberOfColumnsAsNumber + index}
              className={`placeholder-col-${numberOfColumnsAsNumber}`}>
              <h3>{column.title}</h3>
              <p>{column.text}</p>
            </div>
          )
        })}
      </div>
    )
  )
}
