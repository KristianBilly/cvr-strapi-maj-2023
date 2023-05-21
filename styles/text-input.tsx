// @ts-nocheck
import styled from '@emotion/styled'

interface TextInputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  search?: boolean
  autoFocus?: boolean
}

export const TextInput = ({
  placeholder,
  value,
  onChange,
  type,
  search,
  autoFocus,
}: TextInputProps) => (
  <TextInputWrapper
    search={search}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
    autoFocus={autoFocus}
  />
)

const TextInputWrapper = styled.input`
  border: solid 1px black;
  width: 100%;
  outline: 0;
  padding: ${(props) => (props.search ? '1.2rem' : '0.5rem')};
  margin-bottom: ${(props) => (props.search ? '1rem' : '')};
  font-size: ${(props) => (props.search ? '1rem' : '')};
`
