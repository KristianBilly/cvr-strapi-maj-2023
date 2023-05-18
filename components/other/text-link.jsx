import cc from 'classcat'
import Link from 'next/link'

export const TextLink = ({ text, path, virkdk }) => (
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
