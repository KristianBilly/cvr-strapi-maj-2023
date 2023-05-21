// @ts-nocheck

import styled from '@emotion/styled'
import { fontWeights } from './shared-styles'

export const Text = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '20px')};
`
