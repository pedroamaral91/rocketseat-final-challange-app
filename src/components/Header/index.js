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
} from './styles';

const Header = ({ icon, showButtomCart }) => (
  <Container showButtomCart={showButtomCart}>
    <ImageHeader />
    <StatusBarColor />
    <ButtomHeader>
      <IconHeader icon={icon} />
    </ButtomHeader>
    <Wrapper>
      <HeaderTitle>Pizzaria Don Juan</HeaderTitle>
    </Wrapper>
    {showButtomCart && (
      <ButtomCart>
        <IconHeader icon="shopping-bag" />
        <IconBadge>
          <CountItems>0</CountItems>
        </IconBadge>
      </ButtomCart>
    )}
  </Container>
);

Header.defaultProps = {
  showButtomCart: false,
};

Header.propTypes = {
  icon: PropTypes.string.isRequired,
  showButtomCart: PropTypes.bool,
};

export default Header;
