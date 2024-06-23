import { useId, useState, useRef } from "react";

type Props = {
  initialValue: string;
  onSave: (value: string) => void;
};

const TextInput = ({ initialValue, onSave }: Props) => {
  const [value, setValue] = useState(initialValue);
  const idTextInput = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    onSave(value);
  };
  return (
    <div>
      <form>
        <label htmlFor={idTextInput}>Text</label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          id={idTextInput}
        />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default TextInput;

export function TextInputWithFocus() {
  const idInput = useId();
  // Тут ми вказуємо, що ref буде посилатися на елемент типу HTMLInputElement
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // Поле current тепер має властивості, що є у елемента HTMLInputElement
    inputEl.current?.focus();
  };
  const handleRefresh = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleRefresh}>
      {/* Тут inputEl стане посиланням на цей input елемент */}
      <label htmlFor={idInput}>Enter Text</label>
      <input ref={inputEl} type="text" id={idInput} />

      <button type="button" onClick={onButtonClick}>
        Встановити фокус на поле введення
      </button>
    </form>
  );
}
