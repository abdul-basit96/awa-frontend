import React from 'react';
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';

const LetterSection = () => {
    return (
        <Container className='my-5'>
            <Row className='letterSectionWrapper'>
                <Col md={6}>
                    <img className='letterSectionImage' src='/images/letter-section.png' />
                </Col>
                <Col md={6}>
                    <p className='letterSectionText'>Lorum asdjhasd ajhd ajkhjaj ajdha a jahd a haksjdha dha hdas dajskdhaskj dahdakjhd askhdajkdhasjk daskhd asjd ashd ashdask</p>
                </Col>
            </Row>
        </Container>

    )
}

export default LetterSection;