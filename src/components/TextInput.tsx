import './TextInput.css';

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'search';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const TextInput = (
  { placeholder = ' · · · ', disabled = false, type = 'text', onChange, value }:
    TextInputProps,
) => {
  return (
    <input
      className='text-input'
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
  );
};

export default TextInput;
