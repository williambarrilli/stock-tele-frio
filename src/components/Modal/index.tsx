import { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import './styles.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      className="container-modal-new"
    >
      {children}
    </Dialog>
  );
}
