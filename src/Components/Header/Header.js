import React from 'react';
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap';
import IntroImg from './Intro/IntroImg/IntroImg';
import IntroText from './Intro/IntroText/IntroText';
import Menu from './Menu/Menu';

const Header = () => {
    return (
        <div className="header__body pb-5">
            <Menu></Menu>
            <Container className="text-center">
            <Row >
                <Col xs={{ order: 1 }}><IntroText ></IntroText></Col>
                <Col xs={{ order: 12 }}><IntroImg ></IntroImg></Col>
            </Row>
            </Container>
       </div>
    );
};

export default Header;