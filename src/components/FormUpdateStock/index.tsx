import styles from './styles.module.scss';
import InputComponent from '../InputComponent';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';

import { useState } from 'react';

export default function FormUpdateStock({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState('plus');

  return (
    <div className={styles['container']}>
      <h1 className={styles.text}>Atualização de estoque</h1>
      <div className={styles['grid-container']}>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Código"
            placeholder="Digite o codigo do produto"
            value={''}
            onChange={(e) => console.log(e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Quantidade a ser alterada"
            placeholder="Digite o quantidade"
            value={''}
            onChange={(e) => console.log(e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <div className={styles['box-checkbox']}>
            <div>
              <Radio
                checked={type === 'plus'}
                value="Acrescentar"
                onChange={() => setType('plus')}
              />
              <label className={styles.checkboxLabel}>Acrescentar</label>
            </div>
            <div>
              <Radio
                checked={type === 'substract'}
                value="Diminuir"
                onChange={() => setType('substract')}
              />
              <label className={styles.checkboxLabel}>Diminuir</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['box-buttons']}>
        <Button variant="text" onClick={() => onClose()}>
          cancelar
        </Button>
        <Button variant="contained" onClick={() => onClose()}>
          Salvar
        </Button>
      </div>
    </div>
  );
}
