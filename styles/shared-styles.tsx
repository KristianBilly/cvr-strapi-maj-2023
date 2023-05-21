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

export const styling = {
  boxShadow: '0 0 0.6rem 0 #888888',
  transition: 'all 0.2s linear',
  hoverColor: 'rgb(101, 167, 189)',
  themeFontAndBorder: '#282c35',
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
  box-shadow: ${styling.boxShadow};
  margin: 1rem 0;
`
