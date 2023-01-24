import React from 'react';
import Header from './Header';
import { render, screen } from '../../../src/utils/test-config';

describe('Header component', () => {
  test('should be rendered correctly', async () => {
    render(<Header />);
    expect(screen.getByTestId('Header-component')).toBeTruthy();
  });

  test('should have header components inside', async () => {
    render(<Header />);

    const logoImage = screen.getByAltText('app-logo');
    expect(logoImage).toBeTruthy();

    const appName = screen.getByText('PokeApp');
    expect(appName).toBeTruthy();

    const themeSwitcher = screen.getByTestId('DarkModeSwitcher-component');
    expect(themeSwitcher).toBeTruthy();
  });
});
