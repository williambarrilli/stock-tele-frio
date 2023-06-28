import { useCallback, useEffect, useMemo, useState } from 'react';
import { OptionsSelect, iProduct } from '../../types/product';
import TableComponent from '../../components/Table';
import Button from '@mui/material/Button';
import FormNewProduct from '../../components/FormNewProduct';
import ModalComponent from '../../components/Modal';
import styles from './styles.module.scss';
import Header from '../../components/Header';
import InputComponent from '../../components/InputComponent';
import SelectComponent from '../../components/SelectComponent';
import {
  getIdProducts,
  getProductByFilter,
  getProductsList,
} from '../../controller/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';

export default function Home() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [openModalNewProduct, setOpenModalNewProduct] = useState(false);
  const [openModalProductsAlert, setOpenModalProductsAlert] = useState(false);

  const [typeSearch, setTypeSearch] = useState('id');
  const [searchText, setSearchText] = useState('');

  const [listProducts, setListProducts] = useState<iProduct[]>([]);
  const [filtredListProducts, setFiltredListProducts] = useState<iProduct[]>(
    [],
  );
  const [listProductsAlert, setListProductsAlert] = useState<iProduct[]>([]);

  const [productSelected, setProductSelected] = useState<iProduct>();
  const [nextId, setNextId] = useState<number>(0);

  const [isLoading, setIsLoading] = useState(true);

  const filterList = async () => {
    const list = await getProductByFilter(typeSearch, searchText);
    setFiltredListProducts(list);
  };

  const getProducts = async () => {
    const list = await getProductsList();
    setListProducts(list);
    setIsLoading(false);
  };

  const getProductsAlerts = async () => {
    const list = await getProductByFilter('alert', '');
    setListProductsAlert(list);
  };

  useEffect(() => {
    if (openModalProductsAlert) getProductsAlerts();
  }, [openModalProductsAlert]);

  useEffect(() => {
    setFiltredListProducts([]);
  }, [searchText]);

  useEffect(() => {
    getProducts();
  }, [auth, navigate]);

  useEffect(() => {
    if (!openModalNewProduct) {
      setIsLoading(true);

      setProductSelected(undefined);
      setListProductsAlert([]);
      setTimeout(() => {
        getProducts();
        getNextId();
      }, 700);
    }
  }, [openModalNewProduct, openModalProductsAlert]);

  const getNextId = async () => {
    const id = await getIdProducts();
    setNextId(id);
  };

  const filterOptions: OptionsSelect[] = [
    { label: 'Código', value: 'id' },
    { label: 'Nome', value: 'name' },
    { label: 'Categoria', value: 'category' },
    { label: 'Quantidade', value: 'quantity' },
  ];

  return (
    <div>
      <Header />
      {isLoading && <Loading />}

      <div className={styles.content}>
        <SelectComponent
          label="Selecione o tipo de filtro"
          placeholder="Digite o nome do produto"
          value={
            filterOptions.find((item) => item.value === typeSearch)?.value || ''
          }
          onChange={(e) => setTypeSearch(e)}
          options={filterOptions}
        />
        <InputComponent
          label="Digite o nome do produto"
          value={searchText}
          onChange={(e) => setSearchText(e)}
          type="text"
        />
        <Button variant="contained" onClick={() => filterList()}>
          Filtrar
        </Button>
        <Button variant="outlined" onClick={() => setOpenModalNewProduct(true)}>
          Adicionar Produto
        </Button>
        <Button
          onClick={() => setOpenModalProductsAlert(true)}
          style={{ fontWeight: 550 }}
          color="error"
        >
          Produtos em alerta
        </Button>
      </div>

      <TableComponent
        lista={searchText ? filtredListProducts : listProducts}
        onClickItem={(product) => {
          setOpenModalNewProduct(true);
          setProductSelected(product);
        }}
      />
      <ModalComponent isOpen={openModalNewProduct}>
        <FormNewProduct
          onClose={() => setOpenModalNewProduct(false)}
          productSelected={productSelected}
          nextId={nextId}
        />
      </ModalComponent>

      <ModalComponent isOpen={openModalProductsAlert}>
        <TableComponent
          lista={listProductsAlert}
          onClickItem={(product) => {
            setOpenModalNewProduct(true);
            setProductSelected(product);
          }}
        />
        <Button
          onClick={() => setOpenModalProductsAlert(false)}
          style={{ fontWeight: 550 }}
          color="error"
        >
          Fechar
        </Button>
      </ModalComponent>
    </div>
  );
}
