import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SimpleComponent from '../components/reactactions/reactaction';

describe('reactaction', () => {
  it('renders the component with provided text', () => {
    const text = 'react , action!';
    const { getByText } = render(<SimpleComponent text={text} />);
    const componentElement = getByText(text);
    expect(componentElement).toBeInTheDocument();
  });
});
