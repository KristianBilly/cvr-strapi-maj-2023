import cc from 'classcat'

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
  <input
    className={cc([
      'text-input',
      {
        'search-input': search,
      },
    ])}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
    autoFocus={autoFocus}
  />
)
