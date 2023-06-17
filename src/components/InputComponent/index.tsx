import TextField from '@mui/material/TextField';
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
    <div className={styles.caontainer}>
      <TextField
        fullWidth
        id={label}
        label={label}
        value={value}
        variant={'outlined'}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        type={type}
      />
    </div>
  );
}
