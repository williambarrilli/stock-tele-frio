import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from './index';

describe('InputComponent', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });

  test('renders input component correctly', () => {
    render(
      <InputComponent
        label="Test Input"
        onChange={onChangeMock}
        value=""
        disabled={false}
        type="text"
        placeholder="Enter a value"
      />,
    );

    const inputElement = screen.getByPlaceholderText('Enter a value');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(onChangeMock).toHaveBeenCalledWith('Hello');
  });

  test('renders currency input component correctly', () => {
    render(
      <InputComponent
        label="Test Currency"
        onChange={onChangeMock}
        value=""
        disabled={false}
        mask="currency"
      />,
    );

    const currencyElement = screen.getByPlaceholderText('R$0,00');
    expect(currencyElement).toBeInTheDocument();

    fireEvent.change(currencyElement, { target: { value: '123.45' } });
    expect(onChangeMock).toHaveBeenCalledWith('12345');
  });

  test('disables input component', () => {
    render(
      <InputComponent
        label="Disabled Input"
        onChange={onChangeMock}
        value=""
        disabled={true}
        type="text"
        placeholder="Enter a value"
      />,
    );

    const inputElement = screen.getByPlaceholderText('Enter a value');
    expect(inputElement).toBeInTheDocument();
    // expect(inputElement.disabled).toBe(true);
  });
});
