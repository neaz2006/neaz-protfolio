import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <section>
            <Container className="mt-5">
                <Row>
                    <Col lg={{ span: 5, offset: 1 }} md={5} className="d-none d-md-block">
                        <h1 className='pt-5 pb-4'><b>Contact With Me</b></h1>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 1 }}>
                        <Form className='pt-5'>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Your email address" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Your name / company’s name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" rows='10' placeholder="Your message" />
                            </Form.Group>
                            <Form.Group>
                                <button className="btn-info py-2 px-5">Send</button>
                            </Form.Group>
                        </Form>
                        <a href="./" className="btn btn-dark">Back</a>
                    </Col>
                </Row>
            </Container>
        </section>
            
        </div>
    );
};

export default Contact;