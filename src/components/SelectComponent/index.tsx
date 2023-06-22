import { OptionsSelect } from '../../types/product';
import styles from './styles.module.scss';

interface InputComponentProps {
  label: string;
  onChange: (value: string) => void;
  value: string | number;
  disabled?: boolean;
  options: OptionsSelect[];
  placeholder?: string;
}

export default function SelectComponent({
  label,
  onChange,
  disabled,
  value,
  options,
  placeholder,
}: InputComponentProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
