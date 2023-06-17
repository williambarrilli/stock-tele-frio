import { iProduct } from '../../types/product';
import styles from './styles.module.scss';

import TableContainer from '@mui/material/TableContainer';

export default function TableComponent({ lista }: { lista: iProduct[] }) {
  return (
    <TableContainer className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.colum1}>ID</th>
            <th className={styles.colum2} align="right">
              Produto
            </th>
            <th className={styles.colum3} align="right">
              Marca
            </th>
            <th className={styles.colum4} align="right">
              Categoria
            </th>
            <th className={styles.colum5} align="right">
              Estoque
            </th>
            <th className={styles.colum6} align="right">
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          {lista.length &&
            lista?.map((product) => (
              <tr key={product.id} style={{ borderBottom: 'none' }}>
                <td className={styles.tableCell} align="right">
                  {product.id}
                </td>
                <td className={styles.tableCell}>{product.name}</td>
                <td className={styles.tableCell} align="right">
                  {product.brand}
                </td>
                <td className={styles.tableCell} align="right">
                  {product.category}
                </td>
                <td className={styles.tableCell} align="right">
                  {product.quantity}
                </td>
                <td className={styles.tableCell} align="right">
                  {product.sellPrice}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
