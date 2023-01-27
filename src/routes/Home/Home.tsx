import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import ReactPaginate from 'react-paginate';

import { listPokemonInfoByName, listPokemons } from '../../services/pokemon';

import Layout from '../../components/Layout';
import { Container } from './styles';
import { useAppContext } from '../../contexts/App';
import SearchBar from '../../components/SearchBar';
import PokemonList from '../../components/PokemonList';

const ITEMS_LIMIT = 15;

export default function Home() {
  const { settings, pokemon, setOffset } = useAppContext();
  const { offset, searchTerm } = pokemon;

  const { data: pokemonData } = useQuery(['pokemon', offset], () => listPokemons(ITEMS_LIMIT, offset), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60 * 1, // 1000ms * 60 seconds * 60min * 1h
  });

  const searchMutation = useMutation((searchTerm: string) => listPokemonInfoByName(searchTerm));
  const searchResult = searchMutation.data
    ? [
        {
          name: searchMutation.data.name,
          url: `https://pokeapi.co/api/v2/pokemon/${searchMutation.data.id}/`,
        },
      ]
    : [];

  const pageCount = pokemonData?.count ? Math.ceil(pokemonData?.count / ITEMS_LIMIT) : 0;
  const totalItems = pokemonData?.count || 0;

  const hasSearchData = searchResult && searchTerm.length > 0 && searchResult.length > 0 && searchMutation.isSuccess;
  const pokemonDataToList = hasSearchData ? searchResult : pokemonData?.results;

  function handlePage(selectedItem: { selected: number }) {
    const newOffset = (selectedItem.selected * ITEMS_LIMIT) % totalItems;
    // console.log(`User requested page number ${selectedItem.selected}, which is offset ${newOffset}`);

    setOffset(newOffset);
  }

  React.useEffect(() => {
    if (searchMutation.isError) {
      alert(`Oops!!: O pokemon "${searchTerm}" não foi encontrado!`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMutation.isError]);

  React.useEffect(() => {
    if (searchTerm.length > 0) {
      searchMutation.mutate(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <Layout>
      <Container data-testid='Home-page' isDark={settings.darkMode}>
        <SearchBar />

        <PokemonList data={pokemonDataToList} />

        <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
          <ReactPaginate
            data-testid='Pagination-component'
            breakLabel='...'
            nextLabel='Próxima'
            onPageChange={handlePage}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='Anterior'
            renderOnZeroPageCount={() => null}
            containerClassName='app-pagination'
            pageClassName='app-pagination__item'
            pageLinkClassName='app-pagination__link'
            previousClassName='app-pagination__item'
            previousLinkClassName='app-pagination__link'
            nextClassName='app-pagination__item'
            nextLinkClassName='app-pagination__link'
            breakClassName='app-pagination__item'
            breakLinkClassName='app-pagination__link'
            activeClassName='app-pagination__item--active'
            disabledClassName='app-pagination__item--disabled'
          />
        </div>
      </Container>
    </Layout>
  );
}
