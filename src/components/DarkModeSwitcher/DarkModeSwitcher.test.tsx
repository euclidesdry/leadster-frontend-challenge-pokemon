import React from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import { fireEvent, render, screen } from '../../utils/test-config';

describe('Switch component', () => {
  test('should be rendered correctly', () => {
    render(<DarkModeSwitcher />);

    const darkModeSwitcherComponent = screen.getByTestId('DarkModeSwitcher-component');
    expect(darkModeSwitcherComponent).toBeTruthy();
  });

  test('should checked state be toggled when user clicks to switch', async () => {
    render(<DarkModeSwitcher />);

    const switchButton = screen.getByRole('switch');

    expect(screen.getByLabelText(/Modo claro/)).toBeTruthy();

    fireEvent.click(switchButton);
    expect(screen.getByLabelText(/Modo escuro/)).toBeTruthy();

    fireEvent.click(switchButton);
    expect(screen.getByLabelText(/Modo claro/)).toBeTruthy();
  });
});
