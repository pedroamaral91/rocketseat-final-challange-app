import React from 'react';

import {
  Container,
  FoodTypes,
  Item,
  Image,
  Info,
  Title,
  Description,
  Duration,
  Timer,
  WrapperTimer,
} from './styles';
import Header from '~/components/Header';

const tipos = [
  {
    id: Math.random(),
    tipo: 'Pizzas',
    descricao: 'Mais de 50 sabores de pizza, em até 4 tamanhos diferentes de fome.',
    duracao: '30 mins',
  },
  {
    id: Math.random(),
    tipo: 'Massas',
    descricao: '10 tipos de massas com diferentes molhos para te satisfazer.',
    duracao: '25 mins',
  },
  {
    id: Math.random(),
    tipo: 'Calzones',
    descricao: 'Calzones super recheados com mais de 50 sabores diferentes',
    duracao: '15 mins',
  },
  {
    id: Math.random(),
    tipo: 'Bebidas não-alcóolicas',
    descricao: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
    duracao: '5 mins',
  },
  {
    id: Math.random(),
    tipo: 'Bebidas alcóolicas',
    descricao: 'Cervejas artesanais, vinhos e destilados',
    duracao: '5 mins',
  },
];

const Home = () => (
  <Container>
    <Header icon="undo" showButtomCart />

    <FoodTypes
      data={tipos}
      keyExtractor={tipo => String(tipo.id)}
      renderItem={({ item }) => (
        <Item onPress={() => {}}>
          <Image />
          <Info>
            <Title>{item.tipo}</Title>
            <Description>{item.descricao}</Description>
            <WrapperTimer>
              <Timer />
              <Duration>{item.duracao}</Duration>
            </WrapperTimer>
          </Info>
        </Item>
      )}
    />
  </Container>
);

export default Home;
