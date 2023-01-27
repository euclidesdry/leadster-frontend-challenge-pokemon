import React, { ChangeEvent } from 'react';
import { IoSearch } from 'react-icons/io5';

import { ClearButton, Icon, SearchBox, SearchButton, TextInput } from './styles';
import { useAppContext } from '../../contexts/App';

type SearchBarProps = {
  isClearActive?: boolean;
};

export default function SearchBar({ isClearActive = false }: SearchBarProps) {
  const { pokemon, setSearchTerm } = useAppContext();

  const [searchText, setSearchText] = React.useState<string>('');

  const showClearOption = isClearActive || Boolean(pokemon.searchTerm.length > 0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target?.value || '');
  }

  function handleClear() {
    setSearchText('');
    setSearchTerm('');
  }

  function handleSearch() {
    setSearchTerm(searchText);
  }

  return (
    <SearchBox data-testid='SearchBar-component'>
      <Icon>
        <IoSearch size={32} />
      </Icon>
      <TextInput
        type='search'
        value={searchText}
        placeholder='Busque por um Pokémon pelo nome...'
        role='searchbox'
        onChange={handleChange}
      />
      {showClearOption ? (
        <ClearButton type='button' onClick={handleClear}>
          Limpar filtro
        </ClearButton>
      ) : null}
      <SearchButton type='button' onClick={handleSearch}>
        Buscar
      </SearchButton>
    </SearchBox>
  );
}
