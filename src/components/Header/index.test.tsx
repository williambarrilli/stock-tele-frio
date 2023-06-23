import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  test('renders header with logo', () => {
    render(<Header />);

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });
});
