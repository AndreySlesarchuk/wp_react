import React, {Component} from 'react';
import {Container, FormControl, Navbar, NavbarBrand, Form, Button, Nav, NavLink} from "react-bootstrap";
import logo from '../../assets/images/atmm_logo.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect  expand="md" bg ='dark' variant = 'dark'>
                    <Container>
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block-align-top"
                                alt="logo"/>
                        </NavbarBrand>
                        <NavbarToggle aria-controls='responsive-navbar-nav'/>
                        <NavbarCollapse id='responsive-navbar-nav'/>
                        <Nav className='mr-auto'>
                            <NavLink href='/'>Главная</NavLink>
                            <NavLink href='/about'>Услуги</NavLink>
                            <NavLink href='/contacts'>Контакты</NavLink>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type='text'
                                placeholder='Поиск'
                                className='mf-sm-2'
                            />
                        </Form>
                        <Button>Поиск</Button>
                        <NavbarCollapse/>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;