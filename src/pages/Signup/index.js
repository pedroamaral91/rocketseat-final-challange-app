import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, InputText, Logo, Buttom, TextButtom, Wrapper,
} from './styles';

class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    nome: '',
    email: '',
    senha: '',
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Wrapper>
          <Logo />
          <InputText placeholder="Nome completo" />
          <InputText placeholder="Seu email" />
          <InputText placeholder="Senha secreta" />
          <Buttom>
            <TextButtom>Criar conta</TextButtom>
          </Buttom>
          <Buttom noBackGroundColor onPress={() => navigation.navigate('Login')}>
            <TextButtom>Já tenho login</TextButtom>
          </Buttom>
        </Wrapper>
      </Container>
    );
  }
}

export default Signup;
