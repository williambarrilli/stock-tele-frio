import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

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
  value,
  disabled,
  options,
}: InputComponentProps) {
  return (
    <div className={styles.caontainer}>
      <Select
        id={label}
        label={label}
        value={'value'}
        variant={'outlined'}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={styles['input-select']}
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
