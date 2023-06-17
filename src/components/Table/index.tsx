import { iProduct } from '../../types/product';
import styles from './styles.module.scss';
import TableContainer from '@mui/material/TableContainer';
import { Button } from '@mui/material';
import objStr from 'obj-str';

export default function TableComponent({ lista }: { lista: iProduct[] }) {
  return (
    <TableContainer className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th
              className={`${objStr({
                [styles['column']]: true,
                [styles['width']]: '20%',
              })}`}
            >
              ID
            </th>
            <th className={styles.column}>Produto</th>
            <th className={styles.colum3}>Marca</th>
            <th className={styles.colum4}>Categoria</th>
            <th className={styles.colum5}>Quantidade em estoque</th>
            <th className={styles.colum6}>Valor</th>
          </tr>
        </thead>
        <tbody>
          {lista.length &&
            lista?.map((product) => (
              <tr
                key={product.id}
                style={{ borderBottom: 'none' }}
                className={styles.tr}
              >
                <td className={styles.tableCell}>{product.id}</td>
                <td className={styles.tableCell}>{product.name}</td>
                <td className={styles.tableCell}>{product.brand}</td>
                <td className={styles.tableCell}>{product.category}</td>
                <td className={styles.tableCell}>{product.quantity}</td>
                <td className={styles.tableCell}>{product.sellPrice}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
