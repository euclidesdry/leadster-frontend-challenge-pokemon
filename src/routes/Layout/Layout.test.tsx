import React from 'react';
import { render, screen } from '../../utils/test-config';
import Layout from './Layout';

describe('Layout component', () => {
  test('should be rendered correctly', () => {
    render(<Layout />);
    expect(screen.getByTestId('Layout-component')).toBeTruthy();
  });
});
