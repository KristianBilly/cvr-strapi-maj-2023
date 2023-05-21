import styled from '@emotion/styled'
import { breakpoints } from '@/styles/shared-styles'

export const PlaceholderWrapper = styled.div`
  width: 90vw;
  max-width: ${breakpoints.xmd};
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const TitleContainer = styled.h3`
  justify-content: right;
  margin-bottom: 0.5rem;
`
