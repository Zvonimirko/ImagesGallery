import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../images/logo.svg';

import { headerStyle } from './';

const Header = ({ title }) => {
  return (
    <Navbar style={headerStyle} variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Logo alt={title} style={{ maxWidth: '15rem', maxHeight: '3rem' }} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
