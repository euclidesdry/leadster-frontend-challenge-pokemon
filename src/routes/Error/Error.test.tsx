import * as React from 'react';
import { render, screen } from '../../utils/test-config';
import Error from './Error';

describe('Error page', () => {
  test('should be presented correctly', async () => {
    render(<Error />);

    const error404Text = screen.getByText(/Erro 404/);
    const errorNotFoundText = screen.getByText(/Página não encontrada/);

    expect(error404Text).toBeTruthy();
    expect(errorNotFoundText).toBeTruthy();
  });
});
