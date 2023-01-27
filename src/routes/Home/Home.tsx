import React from 'react';
import Modal from 'react-modal';
import { useQuery } from '@tanstack/react-query';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import { listPokemons } from '../../services/pokemon';

import Layout from '../../components/Layout';
import { Container } from './styles';
import { useAppContext } from '../../contexts/App';
import SearchBar from '../../components/SearchBar';
import PokemonList from '../../components/PokemonList';

const ITEMS_LIMIT = 15;

const customStyles = {
  content: {
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 999999,
  },
} as Modal.Styles;

export default function Home() {
  const { settings, pokemon, setOffset } = useAppContext();

  const { data: pokemonData } = useQuery(['pokemon', pokemon.offset], () => listPokemons(ITEMS_LIMIT, pokemon.offset), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60 * 1, // 1000ms * 60 seconds * 60min * 1h
  });

  const pageCount = pokemonData?.count ? Math.ceil(pokemonData?.count / ITEMS_LIMIT) : 0;
  const totalItems = pokemonData?.count || 0;

  function handlePage(selectedItem: { selected: number }) {
    const newOffset = (selectedItem.selected * ITEMS_LIMIT) % totalItems;
    // console.log(`User requested page number ${selectedItem.selected}, which is offset ${newOffset}`);

    setOffset(newOffset);
  }

  return (
    <Layout>
      <Container data-testid='Home-page' isDark={settings.darkMode}>
        <SearchBar />

        <PokemonList data={pokemonData?.results} />

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

      {/* <Modal contentLabel='Escolha o pokemon' isOpen={Boolean(pokemon.selected)} style={customStyles}>
        <div>
          {' '}
          <button
            onClick={() => {
              setSelectedPokemon(null);
            }}
          >
            Fechar
          </button>{' '}
          Peixe Fresco
        </div>
      </Modal> */}
    </Layout>
  );
}
