import React from 'react';
import { render, screen } from '../../utils/test-config';
import Details from './Details';

describe('Details component', () => {
  test('should be rendered correctly', () => {
    render(<Details />);
    expect(screen.getByTestId('Details-page')).toBeTruthy();
  });
});
