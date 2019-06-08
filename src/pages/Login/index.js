import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container, InputText, Logo, Buttom, TextButtom, Wrapper,
} from './styles';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    senha: '',
  };

  handleLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Logged');
  };

  render() {
    const { email, senha } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <Wrapper>
          <Logo />
          <InputText
            value={email}
            onChangeText={text => this.setState({ email: text })}
            placeholder="Seu email"
          />
          <InputText
            placeholder="Senha secreta"
            value={senha}
            onChangeText={text => this.setState({ senha: text })}
          />
          <Buttom>
            <TextButtom onPress={this.handleLogin}>Entrar</TextButtom>
          </Buttom>
          <Buttom noBackGroundColor>
            <TextButtom onPress={() => navigation.navigate('Signup')}>
              Criar conta gratuita
            </TextButtom>
          </Buttom>
        </Wrapper>
      </Container>
    );
  }
}

export default Login;
