import React from 'react';
import App from './App';

import { render, screen } from './utils/test-config';

describe('App component', () => {
  test('should renders correctly', () => {
    render(<App />);

    const linkElement = screen.getByTestId('App');
    expect(linkElement).toBeTruthy();
  });

  test('should have the Header component', () => {
    render(<App />);

    const headerComponent = screen.getByTestId('Header-component');
    expect(headerComponent).toBeTruthy();
  });

  test('should have open on the Home page', () => {
    render(<App />);

    const headerComponent = screen.getByTestId('Home-page');
    expect(headerComponent).toBeTruthy();
  });
});
