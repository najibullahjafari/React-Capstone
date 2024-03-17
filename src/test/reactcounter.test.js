import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../components/reactactions/reactcouter';

test('increments and decrements count correctly', () => {
  render(<Counter />);

  const incrementButton = screen.getByText('Increment');
  const decrementButton = screen.getByText('Decrement');

  fireEvent.click(incrementButton);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});
