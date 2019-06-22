import React from 'react';
import Header from '~/components/Header';

import {
  Container, Wrapper, InputText, ButtonIcon, Button, ButtonText,
} from './styles';

const Cart = () => (
  <Container>
    <Header icon="chevron-left" title="Realizar pedido" price="R$ 0,00" />
    <Wrapper>
      <InputText placeholder="Alguma observação?" multiline numberOfLines={6} />
      <InputText placeholder="Qual seu CEP?" />
      <InputText placeholder="Rua" flexBasis="75%" />
      <InputText placeholder="Nº" flexBasis="20%" />
      <InputText placeholder="Bairro" />
      <Button>
        <ButtonText>Finalizar</ButtonText>
        <ButtonIcon icon="angle-right" size={20} color="#fff" />
      </Button>
    </Wrapper>
  </Container>
);

export default Cart;
