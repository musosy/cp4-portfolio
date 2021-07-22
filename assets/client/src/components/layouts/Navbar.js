import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link} from "react-router-dom";
import './Navbar.css';

const Navigation = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Navbar.Brand>Musosy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="mx-3 custom-nav-link" to="/">Accueil</Link>
                        <Link className="mx-3 custom-nav-link" to="/projects">Projets</Link>
                        <Link className="mx-3 custom-nav-link" to="/contact">Contact</Link>
                        <Link className="mx-3 custom-nav-link" to="/about">À propos</Link> 
                    </Nav>
                    <Nav >
                        <Nav.Link href="http://localhost:8000">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;

