import styled from 'styled-components/native';
import HeaderBackground from '~/assets/header-background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  height: 74px;
  padding-top: 20px;
  flex-direction: row;
  justify-content: ${props => (props.showButtomCart ? 'space-between' : 'flex-start')};
  align-items: baseline;
`;

export const StatusBarColor = styled.StatusBar.attrs({
  backgroundColor: '#0b2031',
})``;

export const Wrapper = styled.View`
  height: 50px;

  justify-content: center;
`;

export const IconHeader = styled(Icon).attrs(props => ({
  name: props.icon,
  size: 20,
  color: '#fff',
}))``;

export const ImageHeader = styled.Image.attrs({
  source: HeaderBackground,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 185px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Helvetica-Bold';
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
`;

export const ButtomHeader = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 0 20px;
  width: 50px;
  height: 50px;
`;

export const ButtomCart = styled.TouchableOpacity`
  background-color: #e5293e;
  width: 50px;
  height: 50px;
  border-radius: 25;
  margin: 0 20px;
  justify-content: center;
  align-items: center;
`;

export const CountItems = styled.Text`
  font-size: 12px;
  color: white;
`;

export const IconBadge = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  height: 20px;
  width: 20px;
  border-radius: 10;
  background-color: #ffc107;
  align-items: center;
  justify-content: center;
`;
