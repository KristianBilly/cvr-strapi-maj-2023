import cc from 'classcat'

interface VirkopediaTabProps {
  title: string
  index: number
  activeButtonIndex: number
  setActiveButtonIndex: (index: number) => void
}

export const VirkopediaTab = ({
  title,
  index,
  activeButtonIndex,
  setActiveButtonIndex,
}: VirkopediaTabProps) => {
  const isActiveButton = index === activeButtonIndex

  return (
    <button
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
}
