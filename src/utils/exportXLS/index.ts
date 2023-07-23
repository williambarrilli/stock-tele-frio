import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { iProduct } from '../../types/product';
import { formatarDataHora, formattedValue } from '../formatters';

export const exporProductstToExcel = (data: iProduct[]) => {
  // Format data for Excel
  const formattedData = data.map((product) => ({
    id: product.id,
    nome: product.name,
    categoria: product.category,
    marca: product.brand,
    'preço de compra': formattedValue(product.buyPrice),
    'preço de venda': formattedValue(product.sellPrice),
    'margem de venda':
      `${Number(product.salesMargin).toFixed(2)}%` || 0.0 + '%',

    quantidade: product.quantity.toString(),
    'alerta de quantidade': product.alertQuantity.toString(),
    'unidade de medida': product,
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  const excelBlob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  const nameFile = `relatorio-${formatarDataHora(new Date())}.xlsx`;

  saveAs(excelBlob, nameFile);
};
