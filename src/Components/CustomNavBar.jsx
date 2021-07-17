import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";

export default class CustomNavBar extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Spring App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Produtos</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}
