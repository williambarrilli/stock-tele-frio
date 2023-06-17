import styles from './styles.module.scss';

interface InputComponentProps {
  label: string;
  onChange: (value: string | number) => void;
  value: string | number;
  disabled?: boolean;
  options: string[];
}

export default function SelectComponent({
  label,
  onChange,
  disabled,
  value,
  options,
}: InputComponentProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
