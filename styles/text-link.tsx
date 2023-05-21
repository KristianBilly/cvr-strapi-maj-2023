// @ts-nocheck

import Link from 'next/link'
import styled from '@emotion/styled'

interface TextLinkProps {
  text: string
  path: string
  virkdk?: boolean
}

export const TextLink = ({ text, path, virkdk }: TextLinkProps) => (
  <TextLinkWrapper virkdk={virkdk}>
    <Link href={path}>{text}</Link>
  </TextLinkWrapper>
)

const TextLinkWrapper = styled.div`
  text-decoration: none;
  margin-bottom: ${(props) => (props.virkdk ? 0 : '')};
  font-size: ${(props) => (props.virkdk ? '2rem' : '')};
  font-weight: ${(props) => (props.virkdk ? '700' : '')};

  &:hover {
    color: rgb(101, 167, 189);
  }
`
