import { iProduct } from '../../types/product';
import './styles.css';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableComponent({ lista }: { lista: iProduct[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Produto</TableCell>
            <TableCell align="right">Marca</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Estoque</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>

        {lista.length &&
          lista?.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{product.id}</TableCell>

              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.brand}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">{product.sellPrice}</TableCell>
            </TableRow>
          ))}
      </Table>
    </TableContainer>
  );
}
