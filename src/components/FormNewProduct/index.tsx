import styles from './styles.module.scss';
import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';
import Button from '@mui/material/Button';
import { iProduct } from '../../types/product';
import { useState } from 'react';

export default function FormNewProduct({ onClose }: { onClose: () => void }) {
  const [productForm, setProductForm] = useState<iProduct>({
    id: '',
    name: '',
    category: '',
    brand: '',
    location: '',
    buyPrice: 0,
    sellPrice: 0,
    salesMargin: 0,
    quantity: 0,
    alertQuantity: 0,
    unitMeasurement: '',
  });
  const unitMeasurement = ['Unidade', 'Litro', 'Kg', 'Mt'];

  const handleChange = (name: string, value: string | number) => {
    setProductForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles['container']}>
      <h1>Cadastro de produto</h1>
      <div className={styles['grid-container']}>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Código"
            value={productForm.id}
            onChange={(e) => handleChange('id', e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Nome"
            value={productForm.name}
            onChange={(e) => handleChange('name', e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Categoria"
            value={productForm.category}
            onChange={(e) => handleChange('category', e)}
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Marca"
            value={productForm.brand}
            onChange={(e) => handleChange('brand', e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Localização"
            value={productForm.location}
            onChange={(e) => handleChange('location', e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Valor de compra"
            value={productForm.buyPrice}
            onChange={(e) => handleChange('buyPrice', e)}
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Preço de venda"
            value={productForm.sellPrice}
            onChange={(e) => handleChange('sellPrice', e)}
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Margem de venda"
            value={productForm.salesMargin}
            onChange={(e) => handleChange('salesMargin', e)}
            disabled
          />
        </div>
        <div className={styles['grid-item-1']}>
          <SelectComponent
            label="Unidade de medida"
            value={productForm.unitMeasurement}
            onChange={(e) => handleChange('unitMeasurement', e)}
            options={unitMeasurement}
          />
        </div>

        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Estoque atual"
            value={productForm.quantity}
            onChange={(e) => handleChange('quantity', e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="aviso de estoque minimo"
            value={productForm.alertQuantity}
            onChange={(e) => handleChange('alertQuantity', e)}
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
