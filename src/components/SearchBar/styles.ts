import styled from 'styled-components';

const SEARCH_BAR_WIDTH = 48;

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
