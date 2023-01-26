import styled from 'styled-components';

const SEARCH_BAR_WIDTH = 48;

type ContainerProps = {
  isDark?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 100%;
  padding: 64px 64px 0;

  box-shadow: ${(props) => (props.isDark ? '0px 32px 48px rgb(0, 0, 0)' : '0px 32px 48px rgb(0, 0, 0, 10%)')};
  border-radius: 32px 32px 0 0;

  transition-property: background, box-shadow;
  transition: 0.6s ease;

  background-color: ${(props) => (props.isDark ? '#3A3A3A' : '#ffffff')};

  @media (max-width: 640px) {
    padding: 20px 20px 0;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  width: 100%;
  height: ${SEARCH_BAR_WIDTH}px;
  background-color: #f5f5f5;
  border-radius: 16px;
  margin-bottom: ${SEARCH_BAR_WIDTH}px;

  overflow: hidden;

  &[data-theme='dark'] {
    border: 1px solid black;
  }
`;

export const Icon = styled.span`
  min-width: ${SEARCH_BAR_WIDTH}px;
  height: ${SEARCH_BAR_WIDTH}px;
  padding: 0 5px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b3b3b3;
`;

export const TextInput = styled.input`
  flex: 1;
  border: 0 solid transparent;
  background-color: transparent;
  outline: none;
`;

export const SearchButton = styled.button`
  width: 148px;
  background-color: #262626;
  color: white;
  text-align: center;
  border-radius: 0 16px 16px 0;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    width: 158px;
    background-color: #f53660;
  }

  &:active {
    width: 148px;
    background-color: #262626;
  }
`;

export const PokemonList = styled.div`
  display: grid;

  grid-template-columns: calc(33.333% - 14px) calc(33.333% - 14px) calc(33.333% - 14px);
  grid-template-rows: 180px 180px 180px;
  column-gap: 21px;
  row-gap: 20px;

  @media (max-width: 920px) {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
    column-gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: calc(100%);
    column-gap: 0;
    grid-template
  }
`;
