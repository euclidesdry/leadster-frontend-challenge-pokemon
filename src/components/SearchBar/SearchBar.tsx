import React, { ChangeEvent } from 'react';

import { IoSearch } from 'react-icons/io5';
import { Icon, SearchBox, SearchButton, TextInput } from './styles';

export default function SearchBar() {
  const [searchText, setSearchText] = React.useState<string>('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target?.value || '');
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
      <SearchButton type='button'>Buscar</SearchButton>
    </SearchBox>
  );
}
