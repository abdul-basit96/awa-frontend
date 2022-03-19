import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa";
import './style.css';

const TeacherSection = () => {
    const images = ['clock.png', 'location.png', 'stand.png'];
    const text = ['Choose fjdskjf jkdsfjiweh wehjewrhj', 'Choose fjdskjf jkdsfjiweh wehjewrhj', 'Choose fjdskjf jkdsfjiweh wehjewrhj'];
    const title = ['Set your own rate', 'Teach anytime, anywhere', 'Grow professionally'];
    const list = ['Steady stream of new students', 'Smart calender', 'Interactive classroom', 'Convenient payment methods', 'Training webinars','Supportive tutor comunity'];
    return (
        <>
            <Container fluid className='py-5'>
                <Row>
                    <Col md={12} className='text-center'>
                        <div className='teacherSectionTopWrapper'>
                            <p className='teacherSection-firstP'>Are you expert in Tajweed UL Quran, Qirat or Arabic?</p>
                            <p className='teacherSection-secondP'>Teach the Quran that's out of this world!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={10}>
                        <Row className='justify-content-center'>
                            {title.map((item, index) => {
                                return (
                                    <Col md={4} sm={8} className='my-5 text-center'>
                                        <img className='teacherSection-cardImg img-fluid' src={`/images/${images[index]}`} />
                                        <p className='teacherSection-cardTitle'>{item}</p>
                                        <p className='teacherSection-cardText'>{text[index]}</p>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md={6} sm={10}>
                                {list.map(item => (
                                    <div className='teacherSection-listWrapper'>
                                        <FaCheck style={{
                                            color: 'green',
                                            marginTop: '8px',
                                            marginRight: '15px'
                                        }}
                                        />
                                        <p className='teacherSection-listP'>{item}</p>
                                    </div>
                                ))}
                            </Col>
                            <Col md={6} sm={10} className='text-center'>
                                <img className='img-fluid teacherSection-lastImg' src='/images/teacher-section.png' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TeacherSection;