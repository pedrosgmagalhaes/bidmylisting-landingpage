import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './header.module.scss';
import Logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <Navbar className={styles.header}>
      <Navbar.Brand>
        <span>
        <img src={Logo} alt="BigMyListing" className={styles.logo} />
        </span>
      </Navbar.Brand>
      <Nav className={styles.phoneNumber}>
        <span>
          323-525-0624
        </span>
      </Nav>
    </Navbar>
  )
}

export default Header;