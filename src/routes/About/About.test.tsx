import React from 'react';
import { render, screen } from '../../utils/test-config';
import About from './About';

describe('About page', () => {
  test('should be rendered correctly', () => {
    render(<About />);
    expect(screen.getByTestId('About-page')).toBeTruthy();
  });
});
