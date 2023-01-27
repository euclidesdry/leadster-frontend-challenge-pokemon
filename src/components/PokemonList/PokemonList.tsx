import React from 'react';

import PokemonCard from '../PokemonCard';
import { Container } from './styles';
import { ResultType } from '../../types/services/pokemon';

type PokemonListProps = {
  data?: ResultType[];
};

export default function PokemonList({ data }: PokemonListProps) {
  return (
    <Container data-testid='PokemonList-component'>
      {data?.map((pokemon, key) => (
        <PokemonCard key={`${pokemon.name}-${key}`} name={pokemon.name} url={pokemon.url} />
      ))}
    </Container>
  );
}
