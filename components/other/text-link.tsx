import cc from 'classcat'
import Link from 'next/link'

interface TextLinkProps {
  text: string
  path: string
  virkdk?: boolean
}

export const TextLink = ({ text, path, virkdk }: TextLinkProps) => (
  <Link
    className={cc([
      'text-link',
      {
        'text-link-virkdk': virkdk,
      },
    ])}
    href={path}>
    {text}
  </Link>
)
