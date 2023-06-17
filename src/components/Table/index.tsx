import { iProduct } from '../../types/product';
import './styles.css';

export default function TableComponent({ lista }: { lista: iProduct[] }) {
  return (
    <div className="table-container">
      <div className="table">
        <div className="table-row header">
          <div className="table-cell">ID</div>
          <div className="table-cell">Produto</div>
          <div className="table-cell">Marca</div>
          <div className="table-cell">Categoria</div>
          <div className="table-cell">Estoque</div>
          <div className="table-cell">Valor</div>
        </div>
        {lista.length &&
          lista?.map((product) => (
            <div className="table-row">
              <div className="table-cell">{product.id}</div>
              <div className="table-cell cell-2">{product.name}</div>
              <div className="table-cell">{product.brand}</div>
              <div className="table-cell">{product.category}</div>
              <div className="table-cell">{product.quantity}</div>
              <div className="table-cell">{product.sellPrice}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
