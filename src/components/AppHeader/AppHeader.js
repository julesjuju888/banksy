import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import BanksyLogo from '../../images/banksy-logo.jpg';
import * as styles from './AppHeader.module.scss';

const AppHeader = () => (
  <Navbar className='shadow' bg='light' expand='lg' fixed='top'>
    <Container>
      <Navbar.Brand href='/'>
        <div className={styles.logo}>
          <img src={BanksyLogo} alt='Logo Banksy' className='img-fluid' />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/biography'>Biography</Nav.Link>
          <Nav.Link href='/gallery'>Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppHeader;
