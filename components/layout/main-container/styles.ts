// @ts-nocheck
import { styling } from '@/styles/shared-styles'
import styled from '@emotion/styled'

interface MainContainerWrapperProps {
  showLinks: boolean
}

export const MainContainerWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  min-height: 80vh;
  transition: ${styling.transition};
  padding-top: ${(props) => (props.showLinks ? '6rem' : '4rem')};
`
