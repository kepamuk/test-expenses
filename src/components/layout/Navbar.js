import React from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './layout.css';

const NavbarComponent = ({title}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarComponent.defaultProps = {
  title: "Expenses"
};

NavbarComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavbarComponent;
