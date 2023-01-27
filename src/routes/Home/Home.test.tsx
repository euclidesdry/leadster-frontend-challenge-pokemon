import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { act, fireEvent, render, screen, waitFor } from '../../utils/test-config';
import Home from './Home';
import { MOCK_POKEMON_DATA, MOCK_POKEMON_DATA_NEXT, MOCK_POKEMON_LIMIT } from '../../utils/mock/pokemon';
import { BASE_URL } from './../../services/config';

const mockPokeAPI = new MockAdapter(axios);

describe('Home page', () => {
  beforeEach(() => {
    mockPokeAPI.onGet(`${BASE_URL}/pokemon?offset=0&limit=15`).reply(200, MOCK_POKEMON_DATA);
  });

  test('should be rendered correctly', () => {
    render(<Home />);
    expect(screen.getByTestId('Home-page')).toBeTruthy();
  });

  test('should renders all page elements', async () => {
    render(<Home />);

    expect(screen.getByTestId('Home-page')).toBeTruthy();
    expect(screen.getByTestId('Header-component')).toBeTruthy();
    expect(screen.getByTestId('DarkModeSwitcher-component')).toBeTruthy();
    expect(screen.getByTestId('SearchBar-component')).toBeTruthy();
    expect(screen.getByTestId('PokemonList-component')).toBeTruthy();
  });

  describe('PokemonCards & pagination', () => {
    test('should list PokemonCards', async () => {
      render(<Home />);

      // eslint-disable-next-line testing-library/prefer-find-by
      await waitFor(() => {
        const pokemonCard = screen.getAllByTestId('PokemonCard-component');
        expect(pokemonCard.length).toBeGreaterThanOrEqual(MOCK_POKEMON_DATA.results.length);
      });
    });

    describe('Pagination', () => {
      test('should show Pagination with calculated num of pages', async () => {
        render(<Home />);

        // eslint-disable-next-line testing-library/prefer-find-by
        await waitFor(() => {
          const paginationComponent = screen.getByRole('navigation');
          const paginationItems = paginationComponent.querySelectorAll('.app-pagination__item').length;
          const countPage = Math.ceil(MOCK_POKEMON_DATA.count / MOCK_POKEMON_LIMIT);

          expect(paginationItems).toBeGreaterThanOrEqual(countPage);
        });
      });

      test('should navigate to the next page and go back to the previous one', async () => {
        render(<Home />);

        const paginationPrevButton = await screen.findByText('Anterior');
        const paginationNextButton = await screen.findByText('Próxima');
        const firstItemFirstPage = MOCK_POKEMON_DATA.results[0].name;
        const firstItemSecondPage = MOCK_POKEMON_DATA_NEXT.results[0].name;

        fireEvent.click(paginationNextButton);

        // eslint-disable-next-line testing-library/prefer-find-by
        await waitFor(() => {
          expect(screen.getByText(firstItemSecondPage)).toBeTruthy();
        });

        expect(screen.queryByText(firstItemFirstPage)).not.toBeTruthy();

        // Returns to the previous page

        fireEvent.click(paginationPrevButton);

        // eslint-disable-next-line testing-library/prefer-find-by
        await waitFor(() => {
          expect(screen.getByText(firstItemFirstPage)).toBeTruthy();
        });

        expect(screen.queryByText(firstItemSecondPage)).not.toBeTruthy();
      });
    });
  });
});
