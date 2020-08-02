import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders developer connector', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/developer connector/i);
  expect(linkElement).toBeInTheDocument();
});
