import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import { useQuery } from '@tanstack/react-query';
import { FiArrowLeft } from 'react-icons/fi';

import Layout from '../../components/Layout';
import { listPokemonInfoById } from '../../services/pokemon';
import { useAppContext } from '../../contexts/App';

import {
  Container,
  TopInfo,
  AllDetails,
  Name,
  AbilitiesContainer,
  Ability,
  Navbar,
  Id,
  Icon,
  IconContainer,
  GoBackButton,
} from './styles';
import AbilityList from '../../components/AbilityList';

export default function Details() {
  const navigate = useNavigate();

  const params = useParams<{ id: string }>();
  const pokemonId = Number(params.id);

  const { settings } = useAppContext();
  const theme = settings.darkMode ? 'dark' : 'light';

  const { data: pokemonInfo } = useQuery(['pokemon', pokemonId], () => listPokemonInfoById(pokemonId), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 10, // 1000ms * 60 seconds * 10min
  });

  const abilities = pokemonInfo?.abilities.map(({ ability }) => ability.name);
  const name = pokemonInfo?.name;
  const image = pokemonInfo?.sprites.other.dream_world.front_default;
  const type = pokemonInfo?.types[0].type.name as string;

  const cssStyles = {
    backgroundColor: type ? `var(--bg-poke-color-${theme}-${type})` : '#262626',
  } as React.CSSProperties;

  return (
    <Layout>
      <Container data-testid='Details-page' style={cssStyles}>
        <TopInfo>
          <div>
            <GoBackButton
              onClick={() => {
                navigate('/');
              }}
            >
              <FiArrowLeft /> <span>Voltar a página inicial</span>
            </GoBackButton>
          </div>

          <Navbar>
            <Name>{name}</Name>
            <Id>#{pokemonId}</Id>
          </Navbar>

          <AbilitiesContainer>
            {abilities?.map((ability, key) => <Ability key={ability}>{ability}</Ability>)}
          </AbilitiesContainer>

          <IconContainer>
            <Icon src={image} alt={`Pokemon ${name} icon`} />
          </IconContainer>
        </TopInfo>

        <AllDetails isDark={settings.darkMode} data-theme={theme}>
          <Tabs.Root className='TabsRoot' defaultValue='tab1'>
            <Tabs.List className='TabsList' aria-label='Pokemon-info'>
              <Tabs.Trigger className='TabsTrigger' value='tab1'>
                Abilities
              </Tabs.Trigger>
              <Tabs.Trigger className='TabsTrigger' value='tab2'>
                More
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className='TabsContent' value='tab1'>
              <p>{pokemonInfo?.stats ? <AbilityList data={pokemonInfo?.stats} /> : null}</p>
            </Tabs.Content>
            <Tabs.Content className='TabsContent' value='tab2'>
              <p>There will have more information about the Pokemon</p>
            </Tabs.Content>
          </Tabs.Root>
        </AllDetails>
      </Container>
    </Layout>
  );
}
