import styles from './styles.module.scss';
import { HTMLInputTypeAttribute } from 'react';
import CurrencyInput from 'react-currency-input-field';

interface InputComponentProps {
  label: string;
  onChange: (value: string | number) => void;
  value: string | number;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  mask?: 'currency';
}

export default function InputComponent({
  label,
  onChange,
  value,
  disabled,
  type,
  placeholder,
  mask,
}: InputComponentProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {mask === 'currency' ? (
        <CurrencyInput
          id={label}
          placeholder={'R$0,00'}
          decimalSeparator=","
          groupSeparator="."
          decimalsLimit={2}
          prefix={'R$'}
          onValueChange={(value, name, values) => {
            onChange(value || 0);
          }}
          className={styles.input}
        />
      ) : (
        <input
          id={label}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          type={type}
          className={styles.input}
        />
      )}
    </div>
  );
}
