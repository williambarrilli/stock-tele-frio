import styles from './styles.module.scss';
import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';
import Button from '@mui/material/Button';

export default function FormNewProduct({ onClose }: { onClose: () => void }) {
  const unitMeasurement = ['Unidade', 'liter', 'Kg', 'Mt'];

  return (
    <div>
      <div className={styles['grid-container']}>
        <div className={styles['grid-item']}>
          <InputComponent
            label="Código"
            value=""
            onChange={(e) => console.log(e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Nome"
            value=""
            onChange={(e) => console.log(e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item']}>
          <InputComponent
            label="Categoria"
            value=""
            onChange={(e) => console.log(e)}
          />
        </div>
        <div className={styles['grid-item']}>
          <InputComponent
            label="Marca"
            value=""
            onChange={(e) => console.log(e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item']}>
          <InputComponent
            label="Localização"
            value=""
            onChange={(e) => console.log(e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item']}>
          <InputComponent
            label="Valor de compra"
            value=""
            onChange={(e) => console.log(e)}
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Preço de venda"
            value=""
            onChange={(e) => console.log(e)}
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Margem de venda"
            value=""
            onChange={(e) => console.log(e)}
            disabled
          />
        </div>
        <div className={styles['grid-item']}>
          <SelectComponent
            label="Unidade de medida"
            value=""
            onChange={(e) => console.log(e)}
            options={unitMeasurement}
          />
        </div>

        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Estoque atual"
            value=""
            onChange={(e) => console.log(e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="aviso de estoque minimo"
            value=""
            onChange={(e) => console.log(e)}
            type="number"
          />
        </div>
      </div>
      <Button variant="text" onClick={() => onClose()}>
        cancelar
      </Button>
      <Button variant="contained" onClick={() => onClose()}>
        Salvar
      </Button>
    </div>
  );
}
