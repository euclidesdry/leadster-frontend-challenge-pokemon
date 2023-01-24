import React from 'react';
import Layout from '../../components/Layout';
import { ErrorMessage, ErrorPageContainer, ErrorTitle } from './styles';

export default function Error() {
  return (
    <Layout>
      <ErrorPageContainer>
        <ErrorTitle>Erro 404</ErrorTitle>
        <ErrorMessage>
          Página não encontrada, volte para a página inicial ou selecione uma página no menu inicial
        </ErrorMessage>
      </ErrorPageContainer>
    </Layout>
  );
}
