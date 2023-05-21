import styled from '@emotion/styled'

export const StyledButton = styled.button`
  text-decoration: none;
  background: transparent;

  &:hover {
    color: rgb(101, 167, 189);
  }
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  display: block;
  padding: 0.5rem 1rem;
  border: 0;

  @media screen and (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 1rem;
  }
`
