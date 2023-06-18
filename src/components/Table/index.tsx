import { iProduct } from '../../types/product';
import styles from './styles.module.scss';

export default function TableComponent({ lista }: { lista: iProduct[] }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.column10}>ID</th>
            <th className={styles.column30}>Produto</th>
            <th className={styles.column15}>Marca</th>
            <th className={styles.column15}>Categoria</th>
            <th className={styles.column15}>Qtd. em estoque</th>
            <th className={styles.column15}>Valor</th>
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
    </div>
  );
}
