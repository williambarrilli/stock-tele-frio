import styles from './styles.module.scss';
import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';
import Button from '@mui/material/Button';
import { OptionsSelect, iProduct } from '../../types/product';
import { useEffect, useMemo, useState } from 'react';
import { profitPercentage, currencyToInteger } from '../../utils/formatters';
import { createProduct } from '../../controller/firestore';

export default function FormNewProduct({
  onClose,
  productSelected,
  newId,
}: {
  onClose: () => void;
  productSelected?: iProduct;
  newId: number;
}) {
  const [productForm, setProductForm] = useState<iProduct>({
    id: newId,
    name: '',
    category: 'Maquina de lavar',
    brand: '',
    location: '',
    buyPrice: 0,
    sellPrice: 0,
    salesMargin: 0,
    quantity: 0,
    alertQuantity: 0,
    unitMeasurement: 'Unidade',
  });

  const unitMeasurement = [
    { label: 'Unidade', value: 'Unidade' },
    { label: 'Litro', value: 'Litro' },
    { label: 'Kg', value: 'Kg' },
    { label: 'Mt', value: 'Mt' },
    { label: 'Outros', value: 'Outros' },
  ];

  const categories: OptionsSelect[] = [
    { label: 'Refrigeração', value: 'Refrigeração' },
    { label: 'Maquina de lavar', value: 'Maquina de lavar' },
    { label: 'Ferramentas', value: 'Ferramentas' },
    { label: 'Material', value: 'Material' },
    { label: 'Outros', value: 'Outros' },
  ];

  const handleChange = (name: string, value: string | number) => {
    if ((value && name === 'buyPrice') || name === 'sellPrice') {
      value = currencyToInteger(value as string);
    }
    setProductForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (productForm._id) createProduct(productForm);
    else createProduct(productForm);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  const salesMargin = useMemo(() => {
    const margin = profitPercentage(
      productForm.buyPrice,
      productForm.sellPrice,
    );
    handleChange('saleMargin', margin);
    return margin;
  }, [productForm.buyPrice, productForm.sellPrice]);

  useEffect(() => {
    if (productSelected) setProductForm(productSelected);
  }, [productSelected]);

  const title = useMemo(
    () => `${productForm._id ? 'Atualização' : 'Cadastro'} de produto`,
    [productForm],
  );

  return (
    <div className={styles['container']}>
      <h1 className={styles.text}>{title}</h1>

      <div className={styles['grid-container']}>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Nome do produto"
            placeholder="Digite o nome do produto"
            value={productForm.name}
            onChange={(e) => handleChange('name', e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Código"
            placeholder="Digite o codigo do produto"
            value={productForm.id}
            disabled
            onChange={(e) => handleChange('id', e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Marca"
            placeholder="Digite a Marca do produto"
            value={productForm.brand}
            onChange={(e) => handleChange('brand', e)}
            type="text"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <SelectComponent
            label="Categoria"
            placeholder="Selecione a categoria do produto"
            value={productForm.category}
            onChange={(e) => handleChange('category', e)}
            options={categories}
          />
        </div>

        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Valor de compra"
            placeholder="Digite o valor de compra do produto"
            value={productForm.buyPrice}
            onChange={(e) => handleChange('buyPrice', e)}
            mask="currency"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="Valor de venda"
            placeholder="Digite o valor de venda do produto"
            value={productForm.sellPrice}
            onChange={(e) => handleChange('sellPrice', e)}
            mask="currency"
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Margem de venda"
            value={`${salesMargin}%`}
            onChange={(e) => handleChange('salesMargin', e)}
            disabled
          />
        </div>
        <div className={styles['grid-item-1']}>
          <SelectComponent
            label="Unidade de medida"
            placeholder="Selecione a categoria do produto"
            value={productForm.unitMeasurement}
            onChange={(e) => handleChange('unitMeasurement', e)}
            options={unitMeasurement}
          />
        </div>
        <div className={styles['grid-item-1']}>
          <InputComponent
            label="Estoque atual"
            value={productForm.quantity}
            placeholder="Digite a qtd em estoque"
            onChange={(e) => handleChange('quantity', e)}
            type="number"
          />
        </div>
        <div className={styles['grid-item-2']}>
          <InputComponent
            label="aviso de estoque minimo"
            placeholder="Digite a qtd para ser avisado"
            value={productForm.alertQuantity}
            onChange={(e) => handleChange('alertQuantity', e)}
            type="number"
          />
        </div>
      </div>
      <footer className={styles['box-buttons']}>
        <Button variant="text" onClick={() => onClose()}>
          cancelar
        </Button>
        <Button variant="contained" onClick={() => handleSave()}>
          Salvar
        </Button>
      </footer>
    </div>
  );
}
