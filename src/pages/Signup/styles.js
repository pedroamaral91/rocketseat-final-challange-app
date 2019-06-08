import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import BackgroundImage from '~/assets/fundo-teste.png';
import logo from '~/assets/logo.png';

export const Container = styled.ImageBackground.attrs({
  source: BackgroundImage,
})`
  width: 100%;
  height: 100%;
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
export const Buttom = styled.TouchableOpacity`
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
