import { useEffect, useState } from 'react';
import { iProduct } from '../../types/product';
import TableComponent from '../../components/Table';
import Button from '@mui/material/Button';
import FormNewProduct from '../../components/FormNewProduct';
import ModalComponent from '../../components/Modal';
import styles from './styles.module.scss';
import Header from '../../components/Header';
import InputComponent from '../../components/InputComponent';
import FormUpdateStock from '../../components/FormUpdateStock';
import SelectComponent from '../../components/SelectComponent';
import { createProduct, getProductsList } from '../../controller/firestore';

export default function Home() {
  const [openModalNewProduct, setOpenModalNewProduct] = useState(false);
  const [openModalUpdateStock, setOpenModalUpdateStock] = useState(false);
  const [typeSearch, setTypeSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [listProducts, setListProducts] = useState<iProduct[]>([]);

  const getProducts = async () => {
    const list = await getProductsList();
    setListProducts(list);
  };
  useEffect(() => {
    getProducts();
  }, [openModalNewProduct, openModalUpdateStock]);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <SelectComponent
          label="Selecione o tipo de filtro"
          placeholder="Digite o nome do produto"
          value={typeSearch}
          onChange={(e) => setTypeSearch(e)}
          options={['Código', 'Produto']}
        />
        <InputComponent
          label="Digite o nome do produto"
          value={searchText}
          onChange={(e) => setSearchText(e)}
          type="text"
        />

        <Button variant="contained" onClick={() => console.log(true)}>
          Filtrar
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

      <TableComponent lista={listProducts} />
      <ModalComponent isOpen={openModalNewProduct}>
        <FormNewProduct onClose={() => setOpenModalNewProduct(false)} />
      </ModalComponent>

      <ModalComponent isOpen={openModalUpdateStock}>
        <FormUpdateStock onClose={() => setOpenModalUpdateStock(false)} />
      </ModalComponent>
    </div>
  );
}
