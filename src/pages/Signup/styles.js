import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import BackgroundImage from '~/assets/fundo.jpg';
import logo from '~/assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated, Easing } from 'react-native';

export const Container = styled.ImageBackground.attrs({
  source: BackgroundImage,
})`
  flex: 1;
`;

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0, 0, 0, 1)'],
})`
  flex: 1;
  padding: 30px;
  padding-top: 185px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 72px;
  height: 72px;
`;
export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  align-self: stretch;
  background-color: #fff;
  border-radius: 7px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-top: 15px;
`;
export const Buttom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-self: stretch;
  background-color: ${props => (props.noBackGroundColor ? 'transparent' : '#e5293e')};
  height: 52px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const TextButtom = styled.Text`
  font-family: 'Helvetica-Bold';
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
`;

export const TextError = styled.Text`
  font-family: 'Helvetica-Bold';
  font-size: 15px;
  color: #ff5959;
  letter-spacing: 0;
  text-align: left;
  align-self: flex-start;
`;

const spin = styled(Icon).attrs({
  name: 'spinner',
  size: 24,
})`
  animation: spin infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = Animated.createAnimatedComponent(spin);
