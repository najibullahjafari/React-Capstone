import React from 'react';
import { render } from '@testing-library/react';
import HomeCounter from '../components/reactactions/homecounter';

test('renders home counter with initial count of 0', () => {
  const { getByText } = render(<HomeCounter />);
  const countElement = getByText(/Count:\s*0/i);
  expect(countElement).toBeTruthy(); // Ensure that the element is found
});
