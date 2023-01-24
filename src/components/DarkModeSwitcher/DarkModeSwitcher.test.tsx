import React from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import { render, screen } from '../../utils/test-config';

describe('Switch component', () => {
  test('should be rendered correctly', () => {
    render(<DarkModeSwitcher />);

    const darkModeSwitcherComponent = screen.getByTestId('DarkModeSwitcher-component');
    expect(darkModeSwitcherComponent).toBeTruthy();
  });
});
