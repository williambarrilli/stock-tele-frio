import styles from './styles.module.scss';

interface InputComponentProps {
  label: string;
  onChange: (value: string | number) => void;
  value: string | number;
  disabled?: boolean;
  options: string[];
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
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
