import React from 'react';
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { FaMediumM } from "react-icons/fa";
import './About.css'
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{ marginTop: '100px',textAlign: 'center'}}>
            <h1>Neaz Mahmud Mozumder</h1>
            <p className="text-warning">JavaScript Developer</p>
            <p className="text-light">
                A self-motivated and enthusiastic web developer with a deep interest in JavaScript.<br/>
                 To work in the Software industry with modern web technologies of different local &<br/>
                  multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
            </p>
            <img src="https://i.ibb.co/gyQ0bsG/IMG-20180101-WA0004.jpg" alt="" style={{ width: "350px",height: "350px",borderRadius: "50%"}}/>
            <div  className="mt-5">
                <a href="https://github.com/neaz2006" className="icon__link git"><FiGithub/></a>
                <a href="https://www.linkedin.com/in/mozumder-neaz" className="icon__link lind"><ImLinkedin2/></a>
                <a href="https://neazmozumder.medium.com" className="icon__link md"><FaMediumM/></a>
                <a href="www.facebook.com/mozumder.neaz" className="icon__link fb"><ImFacebook2/></a>
            </div><br/><br/>
            <a href="./" className="btn btn-dark">Back</a>
            
        </Container>
    );
};

export default About;