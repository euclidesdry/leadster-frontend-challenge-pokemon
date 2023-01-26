import React from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';

export default function Details() {
  const params = useParams<{ id: string }>();
  const pokemonId = params.id;

  return (
    <Layout>
      <div data-testid='Details-page'> Detalhes to Pokemon: {pokemonId}</div>
    </Layout>
  );
}
