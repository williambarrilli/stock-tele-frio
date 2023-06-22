import styles from './styles.module.scss';
import InputComponent from '../InputComponent';
import Button from '@mui/material/Button';

import { useState } from 'react';
import SelectComponent from '../SelectComponent';

export default function FormUpdateStock({ onClose }: { onClose: () => void }) {
  const [typeOperation, setTypeOperation] = useState('plus');
  const [typeSearch, setTypeSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <div className={styles['container']}>
      <h1 className={styles.text}>Atualização de estoque</h1>
      <div className={styles['grid-container']}>
        <div className={styles['grid-item-1']}>
          {/* <SelectComponent
            label="Selecione o tipo de busca"
            placeholder=""
            value={typeSearch}
            onChange={(e) => setTypeSearch(e)}
            options={['Código', 'Produto']}
          /> */}
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Digite o nome do produto"
            placeholder=""
            value={searchText}
            onChange={(e) => setSearchText(e)}
            type="text"
          />
        </div>

        <div className={styles['grid-item-1']}>
          {/* <SelectComponent
            label="Tipo de operação"
            placeholder=""
            value={typeOperation}
            onChange={(e) => setTypeOperation(e)}
            options={['Acrescentar', 'Diminuir']}
          /> */}
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Quantidade a ser alterada"
            placeholder=""
            value={quantity}
            onChange={(e) => setQuantity(e)}
            type="number"
          />
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
