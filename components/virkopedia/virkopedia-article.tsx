interface VirkopediaArticleProps {
  title: string
  content: string
}

export const VirkopediaArticle = ({
  title,
  content,
}: VirkopediaArticleProps) => (
  <article>
    <h3>{title}</h3>
    <p>{content}</p>
  </article>
)
