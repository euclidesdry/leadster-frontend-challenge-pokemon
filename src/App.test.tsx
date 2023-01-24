import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  test('should renders correctly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const linkElement = screen.getByTestId('App');
    expect(linkElement).toBeTruthy();
  });
});
