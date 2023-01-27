import React from 'react';
import SearchBar from './SearchBar';
import { fireEvent, render, screen } from '../../utils/test-config';

const MOCK_POKEMON_NAME = 'bulbasaur';

describe('SearchBar component', () => {
  test('should be rendered correctly with input and search button', async () => {
    render(<SearchBar />);

    expect(screen.getByTestId('SearchBar-component')).toBeTruthy();
    expect(screen.getByRole('searchbox')).toBeTruthy();
    expect(screen.getByText('Buscar')).toBeTruthy();
  });

  test('should do the search', async () => {
    render(<SearchBar />);

    const searchBar = screen.getByRole('searchbox');
    const searchButton = screen.getByText(/Buscar/);

    fireEvent.change(searchBar, {
      target: { value: MOCK_POKEMON_NAME },
    });

    expect(searchBar).toHaveProperty('value', MOCK_POKEMON_NAME);

    fireEvent.click(searchButton);

    // expect(searchBar).toHaveBeenCalledTimes(1);
  });
});
