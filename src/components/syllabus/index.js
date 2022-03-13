import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const Syllabus = () => {
    return (
        <Container fluid className='SyllabusContainer'>
            <Row>
                <Col md={6} sm={12}>
                    <img className='SyllabusImg img-fluid' src='/images/quran-vertical.png' />
                </Col>
                <Col md={6} sm={12}  className='SyllabusSecondCol'>
                    <p className='syllabus-firstP'>What others feel about our Sylabus</p>
                    <p className='syllabus-secondP'>We recommend that all institutionsandorganizationstoapplythistypeof teachingofArabicLanguageinthatwayinordertohelpintheunderstandingof th e H o ly Q u r’a n . A l-M u fa rji (Is la m ic in fo rm a tio n C e n tre ) S u lta n a te o f O m a n
                        Oneofthebest&easymethodologytounderstandQur'an.Ihaverecommended &receivedpositivefeedbackfrom almyafiliates.Dr.AbdulQadeer. Director-ShaheenGroupofInstitutions</p>
                    <div className='SyllabusQaidaImgWrapper'>
                        <img className='SyllabusQaidaImg img-fluid' src='/images/qaida.png' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Syllabus;