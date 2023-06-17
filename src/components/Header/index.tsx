import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Logo from '../../assets/Logo.png';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="Logo" />
    </div>
  );
}
