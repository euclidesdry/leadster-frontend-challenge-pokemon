import React from 'react';
import { render, screen } from '../../utils/test-config';
import Home from './Home';

describe('Home page', () => {
  test('should be rendered correctly', () => {
    render(<Home />);
    expect(screen.getByTestId('page-Home')).toBeTruthy();
  });
});
