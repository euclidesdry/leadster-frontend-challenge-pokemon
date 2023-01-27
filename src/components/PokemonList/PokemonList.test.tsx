import React from 'react';

import PokemonList from './PokemonList';
import { render, screen } from '../../utils/test-config';
import { MOCK_POKEMON_DATA } from '../../utils/mock/pokemon';

describe('PokemonList component', () => {
  test('should be rendered correctly', async () => {
    render(<PokemonList />);
    expect(screen.getByTestId('PokemonList-component')).toBeTruthy();
  });

  test('should list Pokemon cards', async () => {
    render(<PokemonList data={MOCK_POKEMON_DATA.results} />);

    const cards = screen.getAllByTestId('PokemonCard-component');
    expect(cards.length).toBeGreaterThanOrEqual(MOCK_POKEMON_DATA.results.length);
  });
});
