import { iProduct } from '../../types/product';
import styles from './styles.module.scss';
import plusIcon from '../../assets/icons/plus.svg';
import substractIcon from '../../assets/icons/substract.svg';

import TableContainer from '@mui/material/TableContainer';
import { Button } from '@mui/material';

export default function TableComponent({ lista }: { lista: iProduct[] }) {
  return (
    <TableContainer className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.colum1}>ID</th>
            <th className={styles.colum2}>Produto</th>
            <th className={styles.colum3}>Marca</th>
            <th className={styles.colum4}>Categoria</th>
            <th className={styles.colum5}>Quantidade em estoque</th>
            <th className={styles.colum6}>Valor</th>
          </tr>
        </thead>
        <tbody>
          {lista.length &&
            lista?.map((product) => (
              <tr key={product.id} style={{ borderBottom: 'none' }}>
                <td className={styles.tableCell}>{product.id}</td>
                <td className={styles.tableCell}>{product.name}</td>
                <td className={styles.tableCell}>{product.brand}</td>
                <td className={styles.tableCell}>{product.category}</td>
                <td className={styles.tableCell}>
                  <Button>
                    <img
                      onClick={() => console.log('')}
                      className={styles['icon']}
                      src={substractIcon}
                      alt="substractIcon"
                    />
                  </Button>
                  {product.quantity}
                  <Button>
                    <img
                      onClick={() => console.log('')}
                      className={styles['icon']}
                      src={plusIcon}
                      alt="plusIcon"
                    />
                  </Button>
                </td>
                <td className={styles.tableCell}>{product.sellPrice}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
