export const PlaceholderRow = ({ row }) => {
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

  const shouldRenderColumn = allColumns.lenght !== 0

  return (
    shouldRenderColumn && (
      <div className="placeholder-wrapper">
        {allColumns.slice(0, numberOfColumns).map((column, index) => {
          return (
            <div
              key={column.title + numberOfColumns + index}
              className={`placeholder-col-${numberOfColumns}`}>
              <h3>{column.title}</h3>
              <p>{column.text}</p>
            </div>
          )
        })}
      </div>
    )
  )
}
