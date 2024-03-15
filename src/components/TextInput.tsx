import './TextInput.css';

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'search';
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (
  { placeholder = ' · · · ', disabled = false, type = 'text', onInput }:
    TextInputProps,
) => {
  return (
    <input
      className='text-input'
      type={type}
      onInput={onInput}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInput;
