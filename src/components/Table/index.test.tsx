import { render, screen, fireEvent } from '@testing-library/react';
import TableComponent from './index';
import { iProduct } from '../../types/product';

describe('TableComponent', () => {
  const lista: iProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      brand: 'Brand 1',
      category: 'Category 1',
      quantity: 10,
      sellPrice: 99.99,
      location: 'string',
      buyPrice: 10,
      salesMargin: 80,
      alertQuantity: 2,
      activeAlertQuantity: false,
      unitMeasurement: 'unidade',
    },
    {
      id: 2,
      name: 'Product 2',
      brand: 'Brand 2',
      category: 'Category 2',
      quantity: 5,
      sellPrice: 49.99,
      location: 'string',
      buyPrice: 10,
      salesMargin: 80,
      alertQuantity: 2,
      activeAlertQuantity: false,
      unitMeasurement: 'unidade',
    },
    {
      id: 3,
      name: 'Product 3',
      brand: 'Brand 3',
      category: 'Category 3',
      quantity: 2,
      sellPrice: 19.99,
      location: 'string',
      buyPrice: 10,
      salesMargin: 80,
      alertQuantity: 2,
      activeAlertQuantity: false,
      unitMeasurement: 'unidade',
    },
  ];

  test('renders table component correctly', () => {
    const onClickItemMock = jest.fn();

    render(<TableComponent lista={lista} onClickItem={onClickItemMock} />);

    const tableElement = screen.getByRole('table');
    const tableRows = screen.getAllByRole('row');

    expect(tableElement).toBeInTheDocument();
    expect(tableRows).toHaveLength(lista.length + 1); // +1 for the table header row
  });

  test('calls onClickItem when a table row is clicked', () => {
    const onClickItemMock = jest.fn();

    render(<TableComponent lista={lista} onClickItem={onClickItemMock} />);

    const tableRows = screen.getAllByRole('row');

    fireEvent.click(tableRows[1]); // Click the first data row

    expect(onClickItemMock).toHaveBeenCalledTimes(1);
    expect(onClickItemMock).toHaveBeenCalledWith(lista[0]);
  });
});
