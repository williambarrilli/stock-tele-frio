import { render, screen } from '@testing-library/react';
import ModalComponent from './index';

describe('ModalComponent', () => {
  test('renders modal when isOpen is true', () => {
    render(
      <ModalComponent isOpen={true}>
        <div>Modal content</div>
      </ModalComponent>,
    );

    const overlayElement = screen.getByTestId('modal-overlay');
    const contentElement = screen.getByTestId('modal-content');
    const modalContent = screen.getByText('Modal content');

    expect(overlayElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  test('does not render modal when isOpen is false', () => {
    render(
      <ModalComponent isOpen={false}>
        <div>Modal content</div>
      </ModalComponent>,
    );

    const overlayElement = screen.queryByTestId('modal-overlay');
    const contentElement = screen.queryByTestId('modal-content');
    const modalContent = screen.queryByText('Modal content');

    expect(overlayElement).not.toBeInTheDocument();
    expect(contentElement).not.toBeInTheDocument();
    expect(modalContent).not.toBeInTheDocument();
  });
});
