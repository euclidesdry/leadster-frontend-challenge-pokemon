import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 480px;
`;

export const ErrorTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin: 2rem 0;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;
