import { useEffect, useState } from 'react';
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
  getProductByFilter,
  getProductsList,
} from '../../controller/firestore';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';

export default function Home() {
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
    setIsLoading(false);
  };

  useEffect(() => {
    if (openModalProductsAlert) getProductsAlerts();
  }, [openModalProductsAlert]);

  useEffect(() => {
    setFiltredListProducts([]);
  }, [searchText]);

  useEffect(() => {
    getProducts();
  }, [navigate]);

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
          onClick={() => {
            setIsLoading(true);
            setOpenModalProductsAlert(true);
          }}
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
          onClose={() => {
            setOpenModalNewProduct(false);
            setProductSelected(undefined);
          }}
          onSave={() => {
            setIsLoading(true);
            setProductSelected(undefined);
            setOpenModalNewProduct(false);
            setTimeout(() => {
              getProducts();
            }, 700);
          }}
          productSelected={productSelected}
        />
      </ModalComponent>

      <ModalComponent isOpen={openModalProductsAlert}>
        <section className={styles['modal-overflow']}>
          <TableComponent
            lista={listProductsAlert}
            onClickItem={(product) => {
              setOpenModalNewProduct(true);
              setProductSelected(product);
            }}
          />
        </section>
        <section className={styles.footer}>
          <Button
            onClick={() => {
              setOpenModalProductsAlert(false);
              setListProductsAlert([]);
            }}
            style={{ fontWeight: 550 }}
            color="error"
          >
            Fechar
          </Button>
        </section>
      </ModalComponent>
    </div>
  );
}
