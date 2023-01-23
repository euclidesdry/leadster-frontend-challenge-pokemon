import React from 'react';
import Header from './Header';
import { render, screen } from '../../../src/utils/test-config';

describe('Header component', () => {
  test('should be rendered correctly', () => {
    render(<Header />);
    expect(screen.getByTestId('Header-component')).toBeTruthy();
  });
});
