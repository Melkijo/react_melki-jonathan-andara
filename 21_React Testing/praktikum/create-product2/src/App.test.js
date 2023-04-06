import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('Form', () => {
  test('should provide the same text input on the table', () => {
    render(<App />);
    const productName = screen.getByTestId('productName')

    fireEvent.change(productName, { target: { value: "nyoman" } });

    fireEvent.click(screen.getByTestId('formSubmit'))

    waitFor(() => {
      expect(screen.getByTestId('productNameCol').toHaveTextContent('nyoman'))
    })

  });
  test('should display alert when submit input empty', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('formSubmit'))
    const swalModal = waitFor(() => getByTestId('swal-modal'));

    waitFor(() => {
      expect(swalModal).toBeInTheDocument();
    })
    // expect(swalModal).toBeInTheDocument();
  });

  test('should display alert when input symbol', () => {
    render(<App />);
    const productName = screen.getByTestId('productName')

    fireEvent.change(productName, { target: { value: "nyoman!##" } });
    const swalModal = waitFor(() => document.querySelector('.symbolInput'));

    waitFor(() => {
      expect(swalModal).toBeInTheDocument();
    })
  });

  test('should display alert when input name length over 25 character', () => {
    render(<App />);
    const productName = screen.getByTestId('productName')

    fireEvent.change(productName, { target: { value: "nyomanasdfasdfjkasdfaksjdfkasdjflajdsfakjsd" } })
    const swalModal = document.querySelector('.lengthInput');

    waitFor(() => {
      expect(swalModal).toBeInTheDocument();
    })


  });

})


