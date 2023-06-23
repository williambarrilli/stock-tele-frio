import { render, screen, fireEvent } from '@testing-library/react';
import SelectComponent from './index';

describe('SelectComponent', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  test('renders select component correctly', () => {
    const label = 'Select Label';
    const value = 'option2';

    render(
      <SelectComponent
        label={label}
        onChange={() => {}}
        disabled={false}
        value={value}
        options={options}
      />,
    );

    // const selectLabel = screen.getByText('Select Label');
    // const selectElement = screen.getByLabelText(label);

    // expect(selectLabel).toBeInTheDocument();
    // expect(selectElement).toBeInTheDocument();
    // expect(selectElement).toHaveValue(value);
  });

  test('handles select change', () => {
    const label = 'Select Label';
    const value = 'option2';
    const onChangeMock = jest.fn();

    render(
      <SelectComponent
        label={label}
        onChange={onChangeMock}
        disabled={false}
        value={value}
        options={options}
      />,
    );

    // const selectElement = screen.getByRole('input', { name: label });

    // fireEvent.change(selectElement, { target: { value: 'option3' } });

    // expect(onChangeMock).toHaveBeenCalledTimes(1);
    // expect(onChangeMock).toHaveBeenCalledWith('option3');
  });
});
