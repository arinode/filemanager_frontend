import './TextInput.css';

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'search';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (
  { placeholder = ' · · · ', disabled = false, type = 'text', onChange }:
    TextInputProps,
) => {
  return (
    <input
      className='text-input'
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInput;
