import { useState } from 'react';
import { iProduct } from '../../types/product';
import TableComponent from '../../components/Table';
import Button from '@mui/material/Button';
import FormNewProduct from '../../components/FormNewProduct';
import ModalComponent from '../../components/Modal';
import styles from './styles.module.scss';
import Header from '../../components/Header';
import InputComponent from '../../components/InputComponent';
import FormUpdateStock from '../../components/FormUpdateStock';

const listaProducts: iProduct[] = [
  {
    id: '1',
    name: 'polca',
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
    id: '2',
    name: 'batata',
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
    id: '3',
    name: 'ar',
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
    id: '4',
    name: 'copo',
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
    id: '5',
    name: 'pote',
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
    id: '6',
    name: 'prego',
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
    id: '7',
    name: 'martelo',
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
    id: '8',
    name: 'aço',
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
    id: '9',
    name: 'gás',
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
    id: '10',
    name: 'filtro',
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
  const [openModalUpdateStock, setOpenModalUpdateStock] = useState(false);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <InputComponent
          label=""
          placeholder="Digite o nome do produto"
          value={''}
          onChange={(e) => console.log(e)}
          type="text"
        />

        <Button
          variant="contained"
          onClick={() => setOpenModalNewProduct(true)}
        >
          Pesquisar
        </Button>
        <Button variant="outlined" onClick={() => setOpenModalNewProduct(true)}>
          Adicionar Produto
        </Button>
        <Button
          onClick={() => setOpenModalUpdateStock(true)}
          style={{ fontWeight: 550 }}
        >
          Alterar Estoque
        </Button>
      </div>

      <TableComponent lista={listaProducts} />
      <ModalComponent isOpen={openModalNewProduct}>
        <FormNewProduct onClose={() => setOpenModalNewProduct(false)} />
      </ModalComponent>

      <ModalComponent isOpen={openModalUpdateStock}>
        <FormUpdateStock onClose={() => setOpenModalUpdateStock(false)} />
      </ModalComponent>
    </div>
  );
}
