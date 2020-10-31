import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'
import { ImDownload2} from "react-icons/im";



const Menu = () => {
    return (
        <Container className="menu__body ">
            <Navbar bg="" expand="lg">
                <Navbar.Brand to="#home">Neaz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end menu">
                    <Nav.Item>
                        <Link to="/" className="menu">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/About" className="menu">About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/my-works" className="menu">Works</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/blog" className="menu">Blog</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/Contact" className="menu">Contact</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <a href="https://drive.google.com/file/d/15Mx2VXtqjvXstlyO_0X7Je14qeCOaMYB/view" className="menu btn btn-secondary text-light" downloade><ImDownload2/> Resume</a>
                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
};

export default Menu;