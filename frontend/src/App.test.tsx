import React from 'react';
// @ts-ignore
import { render, screen } from '@testing-library/react';
import App from './Routes';
import test from "node:test";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // @ts-ignore
  // expect(linkElement).toBeInTheDocument();
});
