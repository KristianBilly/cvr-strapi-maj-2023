// @ts-nocheck

import styled from '@emotion/styled'

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  margin-bottom: ${(props) => (props.virkdk ? 0 : '')};
  font-size: ${(props) => (props.virkdk ? '2rem' : '')};
  font-weight: ${(props) => (props.virkdk ? '700' : '')};

  &:hover {
    color: rgb(101, 167, 189);
  }
`
