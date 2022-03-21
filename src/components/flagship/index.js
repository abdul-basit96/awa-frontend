import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Flagship = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <img className='flagship-img' src='/images/flagship-courses.png' />
                </Col>
            </Row>
        </Container>
    )
}

export default Flagship;