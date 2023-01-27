import axios from 'axios';
import React, { PropsWithChildren } from 'react';
import { render, screen, waitFor } from '../../utils/test-config';

import PokemonCard from './PokemonCard';
import { BrowserRouter } from 'react-router-dom';
import { MOCK_POKEMON_DETAILS_RESPONSE } from '../../utils/mock/pokemon';
import { QueryCache } from '@tanstack/react-query';

const queryCache = new QueryCache();

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const MOCK_POKEMON = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
};

const MOCK_DATA = {
  config: {},
  data: MOCK_POKEMON_DETAILS_RESPONSE,
  headers: {},
  status: 200,
  statusText: 'Ok',
};

describe('PokemonCard component', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce(MOCK_DATA);
  });

  afterEach(() => {
    queryCache.clear();
  });

  test('should be rendered correctly', async () => {
    render(<PokemonCard name={MOCK_POKEMON.name} url={MOCK_POKEMON.url} />);

    expect(screen.getByTestId('PokemonCard-component')).toBeTruthy();
  });

  // eslint-disable-next-line quotes
  test("should renders card's information", async () => {
    render(<PokemonCard name={MOCK_POKEMON.name} url={MOCK_POKEMON.url} />);

    const hasPokemonName = screen.getByText(MOCK_POKEMON.name);
    expect(hasPokemonName).toBeTruthy();
  });
});
