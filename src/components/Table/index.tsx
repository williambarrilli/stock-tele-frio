import { iProduct } from '../../types/product';
import { formattedValue } from '../../utils/formatters';
import styles from './styles.module.scss';

export default function TableComponent({
  lista,
  onClickItem,
}: {
  lista: iProduct[];
  onClickItem: (product: iProduct) => void;
}) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.column10}>Código</th>
            <th className={styles.column30}>Produto</th>
            <th className={styles.column15}>Marca</th>
            <th className={styles.column15}>Categoria</th>
            <th className={styles.column15}>Qtd. em estoque</th>
            <th className={styles.column15}>Valor de Venda</th>
          </tr>
        </thead>
        <tbody>
          {lista.length &&
            lista?.map((product, index) => (
              <tr
                key={index}
                style={{ borderBottom: 'none' }}
                className={styles.tr}
                onClick={() => onClickItem(product)}
              >
                <td className={styles.tableCell}>{product.id}</td>
                <td className={styles.tableCell}>{product.name}</td>
                <td className={styles.tableCell}>{product.brand}</td>
                <td className={styles.tableCell}>{product.category}</td>
                <td className={styles.tableCell}>{product.quantity}</td>
                <td className={styles.tableCell}>
                  {formattedValue(product.sellPrice)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
