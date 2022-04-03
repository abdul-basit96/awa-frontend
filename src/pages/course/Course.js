import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HeaderBottom from '../../components/header/headerBottom/headerBottom'
import HeaderTop from '../../components/header/headerTop/headerTop'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsStarFill } from 'react-icons/bs'
import Slider from "react-slick";
import Footer from '../../components/footer/Footer';
import './style.css';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

}
const Course = () => {
    const stars = [1, 2, 3, 4, 5]
    const [prevButton, setPrevButton] = useState(true)
    const [nextButton, setNextButton] = useState(false)

    const handleVarietyClick = (param) => {
        if (param == 0) {
            //operation against prev button
            setPrevButton(true)
            setNextButton(false)
        }
        else {
            //operation against next button
            setPrevButton(false)
            setNextButton(true)
        }
    }

    return (
        <Container fluid className="p-0 m-0">
            <HeaderTop />
            <HeaderBottom />
            <Container fluid className='bg-light p-0 m-0 '>
                <Container>
                    <Row className="justify-content-center align-items-center py-5 ">
                        <Col md={6} className="text-justify">
                            <div className="ps-4">
                                <div className="heading-1">
                                    <h1 className="fw-bold">Investing in <br />Knowledge and <br /><span className='span-text'> Your Future</span></h1>
                                </div>
                                <div className="text-gray pe-5 me-5 text-wrap text-left small-text">
                                    With the help of E-Learning, create your own path and drive on
                                    your skills on your own to achieve what you seek
                                </div>
                                <div className='mt-5 ms-5'>
                                    <button className='trial-button py-3'>
                                        Book Your Free Trial
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="text-center">
                            <div className='top-image'>
                                <img className="w-75" src="/images/kid_course.jpg" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="my-5">
                <Row className="py-5 justify-content-center">
                    <Col md={4}>
                        <div className='pe-5 me-5'>
                            <h1 className='fw-bold'>Why Choose</h1>
                            <h1 className='fw-bold span-text'>E-learning</h1>
                            <br />
                            <p className="me-4 small-text">
                                Look into yourself, get something in return
                                as your achievement.
                            </p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className='d-flex flex-wrap'>
                            <div className="d-flex flex-column w-25 my-3 ms-5">
                                <div className="">
                                    <img style={{ width: 50 }} src="/images/blue-circle.png" alt="" />
                                    <h3 className='small-heading'>
                                        Course Accessibility
                                    </h3>
                                    <p className='pe-5 text-justify'>
                                        Select a suitable course from the vast area of other courses
                                    </p>
                                </div>
                            </div>
                            {/* --------------------- */}
                            <div className="d-flex flex-column w-25 my-3 ms-5">
                                <div className="">
                                    <img style={{ width: 50 }} src="/images/blue-circle.png" alt="" />
                                    <h3 className='small-heading'>
                                        Schedule learning
                                    </h3>
                                    <p className='pe-5 text-justify'>
                                        Learn at whatever and whenever at your suitable time and place
                                    </p>
                                </div>
                            </div>
                            {/* ------------------------------------- */}
                            <div className="d-flex flex-column w-25 my-3 ms-5">
                                <div className="">
                                    <img style={{ width: 50 }} src="/images/blue-circle.png" alt="" />
                                    <h4 className='small-heading'>
                                        Expert Instructions
                                    </h4>
                                    <p className="pe-5 text-justify">
                                        Hold the opportunity to learn from the industry's expert.
                                    </p>
                                </div>
                            </div>
                            {/* -------------------------------------- */}
                            <div className="d-flex flex-column ms-5 my-3 my-3 w-25" >
                                <div className="">
                                    <img style={{ width: 50 }} src="/images/blue-circle.png" alt="" />
                                    <h4 className='small-heading'>
                                        Scholarship
                                    </h4>
                                    <p className='pe-5 text-justify'>
                                        To encourage talent, we give up to 100 % aid to those young learners
                                    </p>
                                </div>
                            </div>
                            {/* -------------------------------------------- */}
                            <div className="d-flex flex-column ms-5 my-3  w-25" >
                                <div className="">
                                    <img style={{ width: 50 }} src="/images/blue-circle.png" alt="" />
                                    <h4 className='small-heading'>
                                        Recorded sessions
                                    </h4>
                                    <p className='pe-5 text-justify'>
                                        Don't worry about it, access to every session on the chosen course.
                                    </p>
                                </div>
                            </div>
                            {/* -------------------------------------------- */}
                            <div className="d-flex flex-column ms-5 my-3 w-25" >
                                <div className="">
                                    <img style={{ width: 50 }} src="/images/blue-circle.png" alt="" />
                                    <h4 className='small-heading'>
                                        Practical learning
                                    </h4>
                                    <p className='pe-5 text-justify'>
                                        Interact yourself with the real-world while doing the real-world project.
                                    </p>
                                </div>
                            </div>
                            {/* -------------------------------------------- */}
                        </div>
                    </Col>
                </Row>

                {/* We Help students to grow */}
                <Row className="my-5 py-5 align-items-center">
                    <Col md={6} className="text-center">
                        <div className='top-image'>
                            <img className="w-75" src="/images/kid_course.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={4} className="px-0 mx-0">
                        <div className='text-left'>
                            <h1 className='fw-bold'>We <span className="span-text">Help Student</span> Grow</h1>
                            <h1 className='fw-bold'>Their Career</h1>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repellendus cumque</p>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className='d-flex justify-content-around'>
                            <div className="d-flex flex-column">
                                <h1 className='span-text fw-bold'>23K</h1>
                                <p>Students</p>
                            </div>
                            <div className="d-flex flex-column">
                                <h1 className='span-text fw-bold'>2K+</h1>
                                <p>Cources</p>
                            </div>
                            <div className="d-flex flex-column">
                                <h1 className='span-text fw-bold'>130</h1>
                                <p>Countries</p>
                            </div>

                        </div>
                    </Col>
                    <Col md={2} />
                </Row>
            </Container>

            {/* Discover the variety */}
            <div className='discover-variety'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h1 className="fw-bold">Discover The Variety<br />Of <span className="span-text">Courses Here</span></h1>
                                </div>
                                <div className='d-flex buttons-next-end'>
                                    <button className='align-self-end me-3 shadow shadow-md shadow-primary'
                                        onClick={(e) => handleVarietyClick(0)}
                                        style={{ backgroundColor: prevButton ? '#F95A60' : '#FFF' }}>
                                        <FaChevronLeft style={{
                                            color: prevButton ? '#fff' : '#F95A60',

                                        }} />
                                    </button>
                                    <button className='align-self-end shadow shadow-md shadow-primary'
                                        style={{ backgroundColor: nextButton ? '#F95A60' : '#FFF' }}
                                        onClick={(e) => handleVarietyClick(1)}>

                                        <FaChevronRight style={{
                                            color: nextButton ? '#fff' : '#F95A60',

                                        }} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className=' my-4'>
                        <Col md={12} >
                            <Slider {...settings} className="mx-5 " >
                                <div>
                                    <Card className="course-card" style={{ width: '20rem' }}>
                                        <Card.Body>
                                            <Card.Img variant="top" src="/images/tajweedQuran.png" height={180} />
                                            <Card.Title>
                                                <h4 className="fw-bold mt-3">
                                                    Learn Tajweed-ul-Quran
                                                </h4>
                                            </Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <div className='star-wrapper'>
                                                <span>4.3</span> {stars.map((item, ind) => <BsStarFill className="me-1" style={{ color: ind > 4 ? 'yellow' : 'black' }} />
                                                )}(100,212)
                                            </div>
                                            <br />
                                            <div className="price">
                                                <h4>$48.01</h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="course-card" style={{ width: '20rem' }}>

                                        <Card.Body>
                                            <Card.Img variant="top" src="/images/teacher-section.png" height={180} />
                                            <Card.Title>
                                                <h4 className="fw-bold mt-3">
                                                    Learning Arabic
                                                </h4></Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <div className='star-wrapper'>
                                                <span>4.3</span> {stars.map((item, ind) => <BsStarFill className="me-1" style={{ color: ind > 4 ? 'yellow' : 'black' }} />
                                                )}(100,212)
                                            </div>
                                            <br />
                                            <div className="price">
                                                <h4>$48.01</h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="course-card" style={{ width: '20rem' }}>
                                        <Card.Body>
                                            <Card.Img variant="top" src="/images/azaan.bmp" height={180} />
                                            <Card.Title><h4 className="fw-bold mt-3">Learning Adhaan</h4></Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <div className='star-wrapper'>
                                                <span>4.3</span> {stars.map((item, ind) => <BsStarFill className="me-1" style={{ color: ind > 4 ? 'yellow' : 'black' }} />
                                                )}(100,212)
                                            </div>
                                            <br />
                                            <div className="price">
                                                <h4>$48.01</h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>

            </div>

            {/* whats our students says */}
            <div>
                <Container>
                    <Row className='align-items-start py-5'>
                        <Col md={6}>
                            <div className='top-image'>
                                <img className="w-75" src="/images/kid_course.jpg" alt="" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className=''>
                                <h1 className='fw-bold'>What Our Student <br />
                                    <span className="span-text">Saying</span>
                                </h1>
                                <br />
                                <p className='small-text'>
                                    "I believe in lifelong learning and Arabic-Wave is a great
                                    place to learn from experts.
                                    I work in project managment and rejoined Arabic-wave
                                    because I get great cources for less. The instructors are
                                    fantastic, interesting,
                                    and helpful. I plan to use for a long time"
                                </p>
                            </div>
                        </Col>
                        <Col />
                    </Row>
                    {/* Are you Ready to start */}
                    <div className="ready-to-start-wrapper">
                        <Row className=" justify-content-center">
                            <Col md={10}>
                                <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ flex: 8 }}>
                                        <h1 className='fw-bold me-2'>Are you ready to start your course now!</h1>
                                    </div>
                                    <div className="button" style={{ flex: 4 }}>
                                        <button className=" text-center btn px-5 py-3">Lets Get Started</button>
                                    </div>
                                    <div className="button " style={{ flex: 3 }}>
                                        <button className=' text-center btn px-5 py-3'>Contact Us</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
            <Footer />
        </Container>
    )
}

export default Course