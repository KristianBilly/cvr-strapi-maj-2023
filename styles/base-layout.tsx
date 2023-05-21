import styled from '@emotion/styled'
import { breakpoints, styling } from './shared-styles'

export const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90vw;
  max-width: ${breakpoints.xmd};
  align-items: center;
  min-height: 200px;
  padding: 2.5rem;
  box-shadow: ${styling.boxShadow};
  margin: 1rem 0;
`
