import React, { useState } from 'react';
import styles from './styles.module.scss';
import { iProduct } from '../../types/product';
import TableComponent from '../../components/Table';
import Button from '@mui/material/Button';
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
    </div>
  );
}
