import styles from './styles.module.scss';
import { HTMLInputTypeAttribute } from 'react';

interface InputComponentProps {
  label: string;
  onChange: (value: string | number) => void;
  value: string | number;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
}

export default function InputComponent({
  label,
  onChange,
  value,
  disabled,
  type,
}: InputComponentProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <input
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        type={type}
        className={styles.input}
      />
    </div>
  );
}
