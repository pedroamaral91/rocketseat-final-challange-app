import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ImageHeader,
  StatusBarColor,
  ButtomHeader,
  Wrapper,
  IconHeader,
  HeaderTitle,
  ButtomCart,
  IconBadge,
  CountItems,
  Title,
} from './styles';

const Header = ({
  title, icon, cartItems, showButtomCart, price,
}) => (
  <Container showButtomCart={showButtomCart} price={price}>
    <ImageHeader />
    <StatusBarColor />
    <ButtomHeader>
      <IconHeader icon={icon} />
    </ButtomHeader>
    <HeaderTitle>{title}</HeaderTitle>
    {!!price && <Title>{price}</Title>}
    {showButtomCart && (
      <ButtomCart>
        <IconHeader icon="shopping-bag" />
        <IconBadge>
          <CountItems>{cartItems}</CountItems>
        </IconBadge>
      </ButtomCart>
    )}
  </Container>
);

Header.defaultProps = {
  showButtomCart: false,
  cartItems: 0,
  price: '',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  showButtomCart: PropTypes.bool,
  cartItems: PropTypes.number,
  price: PropTypes.string,
};

export default Header;
