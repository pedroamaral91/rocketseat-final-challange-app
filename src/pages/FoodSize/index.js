import React from 'react';
import Header from '~/components/Header';

import {
  Container, Lista, Wrapper, ImageIcon, Title, Preco, ImageWrapper,
} from './styles';

const data = [
  {
    id: Math.random(),
    url: require('~/assets/Tamanhos/tamanho-gg.png'),
    nome: 'Gigante',
    preco: 'R$: 59,00',
  },
  {
    id: Math.random(),
    url: require('~/assets/Tamanhos/tamanho-g.png'),
    nome: 'Grande',
    preco: 'R$: 59,00',
  },
  {
    id: Math.random(),
    url: require('~/assets/Tamanhos/tamanho-m.png'),
    nome: 'Média',
    preco: 'R$: 59,00',
  },
  {
    id: Math.random(),
    url: require('~/assets/Tamanhos/tamanho-p.png'),
    nome: 'Pequena',
    preco: 'R$: 59,00',
  },
];

const FoodSize = () => (
  <Container>
    <Header title="Selecione um tamanho" icon="chevron-left" />
    <Lista
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Wrapper>
          <ImageWrapper>
            <ImageIcon image={item.url} />
          </ImageWrapper>
          <Title>{item.nome}</Title>
          <Preco>{item.preco}</Preco>
        </Wrapper>
      )}
    />
  </Container>
);

export default FoodSize;
