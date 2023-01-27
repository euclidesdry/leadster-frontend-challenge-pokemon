import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 360px);
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
