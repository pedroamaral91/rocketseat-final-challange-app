import React from 'react';

import Header from '~/components/Header';

import {
  Container, Lista, Wrapper, Imagem, Title,
} from './styles';

const data = [
  {
    id: Math.random(),
    url: require('~/assets/Pizzas/1.png'),
    nome: 'Calabresa',
  },
  {
    id: Math.random(),
    url: require('~/assets/Pizzas/1.png'),
    nome: '4 Queijos',
  },
  {
    id: Math.random(),
    url: require('~/assets/Pizzas/1.png'),
    nome: 'Frango Frito',
  },
  {
    id: Math.random(),
    url: require('~/assets/Pizzas/1.png'),
    nome: 'Sardinha',
  },
  {
    id: Math.random(),
    url: require('~/assets/Pizzas/1.png'),
    nome: 'Milho',
  },
  {
    id: Math.random(),
    url: require('~/assets/Pizzas/1.png'),
    nome: 'Toscana',
  },
];

const FoodTypes = () => (
  <Container>
    <Header icon="chevron-left" title="Selecione um tipo" />
    <Lista
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Wrapper>
          <Imagem image={item.url} />
          <Title>{item.nome}</Title>
        </Wrapper>
      )}
    />
  </Container>
);

export default FoodTypes;
