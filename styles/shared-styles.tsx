// @ts-nocheck
import styled from '@emotion/styled'

export const breakpoints = {
  lg: '1200px',
  xmd: '1000px',
  md: '767px',
  sm: '576px',
}

export const fontWeights = {
  light: 350,
  bold: 700,
}

const styling = {
  boxboxShadow: '0 0 0.6rem 0 #888888',
}

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90vw;
  max-width: ${breakpoints.xmd};
  align-items: center;
  min-height: 200px;
  padding: 2.5rem;
  box-shadow: ${styling.boxboxShadow};
  margin: 1rem 0;
`

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90vw;
  max-width: 1000px;
  align-items: center;
  min-height: 200px;
  padding: 2.5rem;
  box-shadow: 0 0 0.6rem 0 #888888;
  margin: 1rem 0;

  flex: ${(props) => {
    if (props.row === 2) {
      return '0 0 calc(50% - 1rem)'
    }
    if (props.row === 3) {
      return '0 0 calc(33.33% - 1rem)'
    }
    return
  }};

  @media (max-width: ${breakpoints.md}) {
    flex: ${(props) => {
      if (props.row === 2) {
        return '0 0 1)'
      }
      if (props.row === 3) {
        return '0 0 1)'
      }
      return
    }};
  }

  h3 {
    justify-content: right;
    margin-bottom: 0.5rem;
  }
`

// const johnny = styled.div({
//   fontS
// })

// export const ComponentsContainerTwo =

// // const style = styled.div({
// //   fontSize: '1.5rem',
// // })
