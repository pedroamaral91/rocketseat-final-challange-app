import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageIcon from '~/assets/Tipos/pizza.png';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const FoodTypes = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 30,
    marginTop: 25,
  },
})``;

export const Image = styled.Image.attrs({
  source: ImageIcon,
})`
  width: 80px;
  height: 80px;
`;

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  border-radius: 6;
  elevation: 15;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Info = styled.View`
  margin-left: 15px;
  width: 70%;
`;

export const Description = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
`;

export const Timer = styled(Icon).attrs({
  name: 'alarm',
  size: 15,
  color: '#8888',
})``;

export const WrapperTimer = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-top: 5px;
`;

export const Duration = styled.Text`
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
  text-align: left;
  margin-left: 5px;
`;
