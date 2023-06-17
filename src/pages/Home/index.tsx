import { useState } from 'react';
import { iProduct } from '../../types/product';
import TableComponent from '../../components/Table';
import Button from '@mui/material/Button';
import FormNewProduct from '../../components/FormNewProduct';
import ModalComponent from '../../components/Modal';
import styles from './styles.module.scss';
import Header from '../../components/Header';

const listaProducts: iProduct[] = [
  {
    id: '1',
    name: 'name',
    category: 'category',
    brand: 'brand',
    location: 'location',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
  {
    id: '1',
    name: 'string',
    category: 'string',
    brand: 'string',
    location: 'string',
    buyPrice: 10,
    sellPrice: 15,
    salesMargin: 5,
    quantity: 20,
    alertQuantity: 7,
    unitMeasurement: 'unidade',
  },
];

export default function Home() {
  const [openModalNewProduct, setOpenModalNewProduct] = useState(false);
  const [sellProduct, setSellProduct] = useState(false);

  return (
    <div>
      <Header />
      <TableComponent lista={listaProducts} />
      <div className={styles.content}>
        <Button
          variant="contained"
          onClick={() => setOpenModalNewProduct(true)}
        >
          Adicionar Produto
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => setSellProduct(true)}
        >
          Vender Produto
        </Button>
      </div>
      <ModalComponent isOpen={openModalNewProduct}>
        <FormNewProduct onClose={() => setOpenModalNewProduct(false)} />
      </ModalComponent>
    </div>
  );
}
