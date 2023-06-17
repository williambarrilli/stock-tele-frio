import { iProduct } from '../../types/product';
import styles from './styles.module.scss';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableComponent({ lista }: { lista: iProduct[] }) {
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table
        className={styles.table}
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead className={styles.tableHead}>
          <TableRow>
            <TableCell className={styles.colum1}>ID</TableCell>
            <TableCell className={styles.colum2} align="right">
              Produto
            </TableCell>
            <TableCell className={styles.colum3} align="right">
              Marca
            </TableCell>
            <TableCell className={styles.colum4} align="right">
              Categoria
            </TableCell>
            <TableCell className={styles.colum5} align="right">
              Estoque
            </TableCell>
            <TableCell className={styles.colum6} align="right">
              Valor
            </TableCell>
          </TableRow>
        </TableHead>

        {lista.length &&
          lista?.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={styles.tableCell} align="right">
                {product.id}
              </TableCell>

              <TableCell
                className={styles.tableCell}
                component="th"
                scope="row"
              >
                {product.name}
              </TableCell>
              <TableCell className={styles.tableCell} align="right">
                {product.brand}
              </TableCell>
              <TableCell className={styles.tableCell} align="right">
                {product.category}
              </TableCell>
              <TableCell className={styles.tableCell} align="right">
                {product.quantity}
              </TableCell>
              <TableCell className={styles.tableCell} align="right">
                {product.sellPrice}
              </TableCell>
            </TableRow>
          ))}
      </Table>
    </TableContainer>
  );
}
