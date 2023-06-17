import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function ModalComponent({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  if (isOpen)
    return (
      <div className={styles.overlay}>
        <div className={styles.content}>{children}</div>;
      </div>
    );
  return <></>;
}
