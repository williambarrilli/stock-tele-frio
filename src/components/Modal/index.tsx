import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function ModalComponent({ isOpen, children }: ModalProps) {
  if (isOpen)
    return (
      <div data-testid={'modal-overlay'} className={styles.overlay}>
        <div data-testid={'modal-content'} className={styles.content}>
          {children}
        </div>
        ;
      </div>
    );
  return <></>;
}
