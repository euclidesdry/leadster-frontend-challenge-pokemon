import { ListPokemonsType, PokemonDetailsType } from '../types/services/pokemon';
import { pokeApi } from './config';

export async function listPokemons(limit = 9, offset = 0): Promise<ListPokemonsType> {
  const response = await pokeApi.get<ListPokemonsType>(`/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
}

export async function listPokemonInfoById(pokemonId: number): Promise<PokemonDetailsType> {
  const response = await pokeApi.get<PokemonDetailsType>(`/pokemon/${pokemonId}`);
  return response.data;
}

export async function listPokemonInfoByName(name: string): Promise<PokemonDetailsType> {
  const response = await pokeApi.get<PokemonDetailsType>(`/pokemon/${name}`);
  return response.data;
}
