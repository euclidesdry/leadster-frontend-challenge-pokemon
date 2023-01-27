import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

import { listPokemonInfoById } from '../../services/pokemon';

import { AbilitiesContainer, Ability, CardContainer, CardInfo, Image, Name } from './styles';
import { useAppContext } from '../../contexts/App';
import { useNavigate } from 'react-router-dom';

type PokemonCardProps = {
  name: string;
  url: string;
};

export default function PokemonCard({ name, url }: PokemonCardProps) {
  const navigate = useNavigate();

  const { settings, setSelectedPokemon } = useAppContext();

  const theme = settings.darkMode ? 'dark' : 'light';
  const pokemonId = Number(url.substring(34, url.length - 1));

  const { data: pokemonDetails } = useQuery([`pokemon-${pokemonId}-${name}`], () => listPokemonInfoById(pokemonId), {
    enabled: Boolean(name),
    staleTime: 1000 * 60 * 10, // 1000ms * 60s * 10min
  });

  const abilities = pokemonDetails?.abilities.map(({ ability }) => ability.name);
  const image = pokemonDetails?.sprites.other.dream_world.front_default;
  const type = pokemonDetails?.types[0].type.name as string;

  const handleSelectPokemon = () => {
    setSelectedPokemon(pokemonId);
    navigate(`/pokemon/${pokemonId}`);
  };

  return (
    <CardContainer data-testid='PokemonCard-component' type={type} theme={theme} onClick={handleSelectPokemon}>
      <CardInfo>
        <span style={{ flex: 1 }}>
          <Name>{name}</Name>
          <AbilitiesContainer>
            {abilities?.map((ability) => (
              <Ability key={ability} data-testid='ability-component'>
                {ability}
              </Ability>
            ))}
          </AbilitiesContainer>
        </span>
        <span style={{ width: '80px' }}>
          <Image src={image} alt='pokemon' />
        </span>
      </CardInfo>
    </CardContainer>
  );
}
