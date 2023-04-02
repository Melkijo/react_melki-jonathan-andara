import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('should provide the same text input on the table', () => {
  render(<App />);
  const productName = screen.getByTestId('productName')

  fireEvent.change(productName, { target: { value: "nyoman" } });

  fireEvent.click(screen.getByTestId('formSubmit'))
  waitFor(() => {
    expect(screen.getByTestId('productNameCol').toHaveTextContent('nyoman'))
  })
});
