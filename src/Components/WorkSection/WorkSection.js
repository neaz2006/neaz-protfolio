import React, { useState } from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import './WorkSection.css'
import { FaGithub, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import FakeData from '../FakeData/FakeData';
import { RiLiveFill } from "react-icons/ri";

const WorkSection = () => {
    const [works, setWorks] = useState(FakeData);

    
    return (
        <>
            <Container>
                <header className="workSection__top">
                    <h1>Some of my works </h1>
                    <a href="./" className='btn btn-info'>All Works</a>
                </header> <hr/>
                <Row>
                    {
                        works.map(work =>

                            <div className="card col-sm-4 mt-5 col-sm-4">
                                <Image src={work.images} style={{ height: '250px', borderRadius: '10px', marginTop: '15px' }} />
                                <h3 className="p-5">{work.name}</h3>
                                <p>{work.title}</p>
                                <div style={{ margin: "24px 0" }}>
                                    <a href={work.gitlink} className="mr-3"><FaGithub /></a>                                    
                                    <a href={work.linkedin} className="mr-3"><FaLinkedin /></a>
                                    <a href={work.fb}><span className="icon__style"><FaFacebookF /></span></a>
                                </div>
                                <a href={work.livelink} className="btn btn-info btn__infocard"><RiLiveFill/> Vist Live site..</a>
                            </div>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default WorkSection;