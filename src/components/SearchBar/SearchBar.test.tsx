import React from 'react';
import SearchBar from './SearchBar';
import { fireEvent, render, screen, waitFor } from '../../utils/test-config';
import { MOCK_POKEMON_DATA } from '../../utils/mock/pokemon';

const MOCK_POKEMON_NAME = MOCK_POKEMON_DATA.results[0].name;

describe('SearchBar component', () => {
  test('should be rendered correctly with input and search button', async () => {
    render(<SearchBar />);

    expect(screen.getByTestId('SearchBar-component')).toBeTruthy();
    expect(screen.getByRole('searchbox')).toBeTruthy();
    expect(screen.getByText('Buscar')).toBeTruthy();
  });

  describe('Search', () => {
    test('should search by pokemon name', async () => {
      render(<SearchBar />);

      const searchBar = screen.getByRole('searchbox');
      const searchButton = screen.getByText('Buscar');

      fireEvent.change(searchBar, {
        target: { value: MOCK_POKEMON_NAME },
      });

      expect(searchBar).toHaveProperty('value', MOCK_POKEMON_NAME);

      fireEvent.click(searchButton);

      // eslint-disable-next-line testing-library/prefer-find-by
      await waitFor(async () => expect(screen.getByText('Limpar filtro')).not.toBeFalsy());
    });

    test('should search and clean the field', async () => {
      render(<SearchBar />);

      const searchBar = screen.getByRole('searchbox');
      const searchButton = screen.getByText('Buscar');

      fireEvent.change(searchBar, {
        target: { value: MOCK_POKEMON_NAME },
      });

      expect(searchBar).toHaveProperty('value', MOCK_POKEMON_NAME);

      fireEvent.click(searchButton);

      // eslint-disable-next-line testing-library/prefer-find-by
      await waitFor(() => expect(screen.getByText('Limpar filtro')).not.toBeFalsy());

      fireEvent.click(screen.getByText('Limpar filtro'));

      await waitFor(() => expect(screen.queryByText('Limpar filtro')).not.toBeTruthy());
    });
  });
});
