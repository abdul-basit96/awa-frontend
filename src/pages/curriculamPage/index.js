import React, { useState } from 'react';
import { Col, Container, Row, Table, Tabs, Tab, Nav, Card } from 'react-bootstrap';
import CurriculumCard from '../../components/card';
import HeaderBottom from '../../components/header/headerBottom/headerBottom';
import HeaderTop from '../../components/header/headerTop/headerTop';

import './styles.css'
const CurriculamPage = () => {
  const [oneToOneTab, setOneToOneTab] = useState(true)
  const [groupTab, setGroupTab] = useState(false)
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      {/* Table for curriculam page */}
      <Container>
        <Table striped hover bordered responsive style={{ border: "2px solid #14739B" }}>
          <thead className='text-center' style={{ background: "#14739B" }}>
            <tr>
              <th></th>
              <th className='p-3 text-white fs-4' style={{ verticalAlign: 'middle' }}>First Name</th>
              <th className='p-3 text-white fs-4' style={{ width: "250px", verticalAlign: 'middle' }}>One to One Sessions</th>
              <th className='p-3 text-white fs-4' style={{ width: "250px", verticalAlign: 'middle' }}>Group<br /> Sessions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr >
              <td>1</td>
              <td>Mark</td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
            </tr>
            <tr>
              <td>4</td>
              <td >Larry the Bird</td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Larry the Bird</td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
              <td><input type="checkbox" name="one-to-one-session" /></td>
            </tr>
          </tbody>
        </Table>
      </Container>
      {/* Table for curriculam page */}

      {/* Learn Tajweed ul Quran Component */}
      <Container fluid>
        <div className='p-3'>
          <Row className='justify-content-center'>
            <Col md={9}>
              <div className='px-3 py-3 fs-1 learn-tajweed-div text-center'>
                Learn Tajweed Ul Quran by Arabic Wave Academy
              </div>
            </Col>
          </Row>
          <Row className='p-5 justify-content-center align-items-center'>
            <Col md={6}>
              <div className="d-flex flex-column flex-wrap">
                <div className='m-5 mb-2'>
                  <img style={{ borderRadius: 15 }} className="img-fluid" src={`${process.env.PUBLIC_URL}/images/image_quran_curriculam.jpg`} alt="" />
                </div>
                <div className='my-2 mx-5 px-2 py-2 content'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique aut accusamus inventore enim
                  eveniet ullam quae dolorum fugit ducimus iste,
                  at recusandae? Repellendus voluptatem enim
                  voluptatum esse deserunt, ex ipsam.
                </div>
                <div className='text-center my-2'>
                  <button className='button-book-class px-4 py-3'>
                    Book your free trial class
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <div className="d-flex flex-column flex-wrap">
                {/* Tabs for one-to-one and group-session */}
                <div className='d-inline-flex flex-row justify-content-center'>
                  <ul className='list list-style-none'>
                    <li className='py-1 px-4' onClick={(e) => {
                      setOneToOneTab(true)
                      setGroupTab(false)
                    }}
                      style={{ backgroundColor: oneToOneTab ? '#6DBB0F' : '' }}>
                      <a>One to One</a></li>
                    <li className='py-1 px-4' onClick={(e) => {
                      setOneToOneTab(false)
                      setGroupTab(true)
                    }}
                      style={{ backgroundColor: groupTab ? '#6DBB0F' : '' }}>
                      <a>Group Session</a>
                    </li>
                  </ul>
                </div>
                {/* Tabs for one-to-one and group-session */}

                {/* Cards here */}
                <div className="d-flex my-3 justify-content-between flex-wrap">
                  {[1, 2, 3, 4].map((item, ind) =>
                    <React.Fragment key={ind}>
                      <CurriculumCard />
                    </React.Fragment>)}
                </div>
                {/* Cards here */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* Learn Tajweed ul Quran Component */}

      {/* Hifz ul Quran and Learn Qirat */}
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={9}>
            <div className='hifz-ul-quran-header px-5 py-2 text-center'>
              <h2 className='px-4'>Also, you can create your own design for <br />
                <span>Hifz Ul Quran</span> & <span>Learn Qirath</span></h2>
            </div>
          </Col>
        </Row>
        <Row className="p-5 justify-content-center">
          <Col md={6}><div className="d-flex flex-column flex-wrap">
            {/* Tabs for one-to-one and group-session */}
            <div className='d-inline-flex flex-row justify-content-center'>
              <ul className='list list-style-none'>
                <li className='py-1 px-4' onClick={(e) => {
                  setOneToOneTab(true)
                  setGroupTab(false)
                }}
                  style={{ backgroundColor: oneToOneTab ? '#6DBB0F' : '' }}>
                  <a>One to One</a></li>
                <li className='py-1 px-4' onClick={(e) => {
                  setOneToOneTab(false)
                  setGroupTab(true)
                }}
                  style={{ backgroundColor: groupTab ? '#6DBB0F' : '' }}>
                  <a>Group Session</a>
                </li>
              </ul>
            </div>
            {/* Tabs for one-to-one and group-session */}

            {/* Cards here */}
            <div className="d-flex my-3 justify-content-between flex-wrap">
              {[1, 2, 3, 4].map((item, ind) =>
                <React.Fragment key={ind}>
                  <CurriculumCard />
                </React.Fragment>)}
            </div>
            {/* Cards here */}
          </div></Col>
          <Col md={6}>

            <div className="d-flex flex-column flex-wrap">
              <div className='m-5 mb-2'>
                <img style={{ borderRadius: '15px' }} className="img-fluid" src={`${process.env.PUBLIC_URL}/images/quran_image_new.jpg`} alt="" />
              </div>
              <div className='my-2 mx-5 px-2 py-2 content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique aut accusamus inventore enim
                eveniet ullam quae dolorum fugit ducimus iste,
                at recusandae? Repellendus voluptatem enim
                voluptatum esse deserunt, ex ipsam.
              </div>
              <div className='text-center my-2'>
                <button className='button-book-class px-4 py-3'>
                  Book your free trial class
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Learn Arabic */}
      <Container fluid className="learn-arabic-container">
        <Row className='align-items-start'>
          <Col md={6} className="px-5">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="learn-arabic px-5 py-3">
                <h1 className='px-5'>Learn Arabic</h1>
              </div>
              <div className='learn-arabic-content mx-4 p-3 my-3 text-start d-flex flex-column'>
                <h2>Lorem ipsum dolor Similique</h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nisi veritatis aliquid omnis labore non id ipsam rem esse? Illo,
                nobis distinctio expedita dolorum explicabo est sit sunt ratione a delectus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quas placeat?
                Necessitatibus quia minima dolorem error aliquid fuga. Iste ex, nostrum et repudiandae
                tempora esse quisquam ullam voluptatum doloribus eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto veniam
                numquam nemo saepe praesentium illum dicta exercitationem at velit, illo nostrum ab
                laborum facilis. Perspiciatis dolorum saepe ducimus quo.
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column flex-wrap">
              <div className='m-5 mb-2'>
                <img style={{ borderRadius: 15 }} className="img-fluid"
                  src={`${process.env.PUBLIC_URL}/images/arabic.jpg`} alt="" />
              </div>
              <div className='text-center my-2'>
                <button className='button-book-class px-4 py-3'>
                  Book your free trial class
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Learn Urdu */}
      <Container fluid className="learn-urdu-container">
        <Row className='align-items-start'>
          <Col md={6}>
            <div className="d-flex flex-column flex-wrap">
              <div className='m-5 mb-2 text-center'
                style={{
                  backgroundImage: "url(/images/learn-urdu-background.jpg)",
                  position: 'relative',
                }}>
                <img className='img-fluid text-center m-5' style={{
                  width: '60%',

                }} src="/images/learn-urdu.jpg" alt="" />
              </div>
              <div className='text-center my-4'>
                <button className='button-book-class px-4 py-3'>
                  Book your free trial class
                </button>
              </div>
            </div>
          </Col>
          <Col md={6} className="px-5">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="learn-urdu px-5 py-3">
                <h1 className='px-5'>Learn Urdu</h1>
              </div>
              <div className='learn-urdu-content mx-4 p-3 my-3 text-start d-flex flex-column'>
                <h2>Lorem ipsum dolor Similique</h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nisi veritatis aliquid omnis labore non id ipsam rem esse? Illo,
                nobis distinctio expedita dolorum explicabo est sit sunt ratione a delectus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quas placeat?
                Necessitatibus quia minima dolorem error aliquid fuga. Iste ex, nostrum et repudiandae
                tempora esse quisquam ullam voluptatum doloribus eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto veniam
                numquam nemo saepe praesentium illum dicta exercitationem at velit, illo nostrum ab
                laborum facilis. Perspiciatis dolorum saepe ducimus quo.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Learn Adhaan */}
      <Container fluid className="learn-adhaan-container">
        <Row className='align-items-start py-5'>
          <Col md={6} className="px-5">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="learn-adhaan px-5 py-3">
                <h1 className='px-5'>Learn Adhaan</h1>
              </div>
              <div className='learn-adhaan-content mx-4 p-3 my-3 text-start d-flex flex-column'>
                <h2>Lorem ipsum dolor Similique</h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nisi veritatis aliquid omnis labore non id ipsam rem esse? Illo,
                nobis distinctio expedita dolorum explicabo est sit sunt ratione a delectus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quas placeat?
                Necessitatibus quia minima dolorem error aliquid fuga. Iste ex, nostrum et repudiandae
                tempora esse quisquam ullam voluptatum doloribus eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto veniam
                numquam nemo saepe praesentium illum dicta exercitationem at velit, illo nostrum ab
                laborum facilis. Perspiciatis dolorum saepe ducimus quo.
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column flex-wrap">
              <div className='m-5 mb-2 text-center' style={{ backgroundImage: "url(/images/learn_adhaan_bg.png)", backgroundSize: '100%' }}>
                <img style={{ borderRadius: 15, width: '60%' }} className="adhaan-image img-fluid p-5 mt-3"
                  src={`${process.env.PUBLIC_URL}/images/learn_adhaan.png`} alt="" />
              </div>
              <div className='text-center my-2'>
                <button className='button-book-class px-4 py-3'>
                  Book your free trial class
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* kid image with content */}
      <Container fluid className="learn-adhaan-container">
        <Row className='align-items-start py-5 bg-white'>
          <Col md={6} className="">
            <div className="d-flex flex-column flex-wrap">
              <div className=' mb-2 text-center kid-image-div'>
                <img style={{ borderRadius: 15 }} className="kid-image img-fluid"
                  src={`${process.env.PUBLIC_URL}/images/kid.png`} alt="" />
              </div>

            </div>
          </Col>
          <Col md={6} className="px-5">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className='kid-content w-75 mx-4 p-3 my-3 text-start d-flex flex-column'>
                <h2>Lorem ipsum dolor Similique</h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nisi veritatis aliquid omnis labore non id ipsam rem esse? Illo,
                nobis distinctio expedita dolorum explicabo est sit sunt ratione a delectus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quas placeat?
                Necessitatibus quia minima dolorem error aliquid fuga. Iste ex, nostrum et repudiandae
                tempora esse quisquam ullam voluptatum doloribus eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto veniam
                numquam nemo saepe praesentium illum dicta exercitationem at velit, illo nostrum ab
                laborum facilis. Perspiciatis dolorum saepe ducimus quo.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime temporibus, esse ex maiores accusamus qui eum repudiandae magni praesentium at consequatur molestias libero quibusdam laborum consequuntur omnis assumenda saepe illo!
              </div>
            </div>
          </Col>
        </Row>


        {/*  */}
        <Row className="justify-content-ceter discount-customized-plan my-5 pb-5">
          <Col md={4}>
            <div className='d-flex justify-content-end align-items-center'>
              <button className='button-book-class' style={{ padding: '25px 80px' }}>
                Discount
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className='d-flex flex-column align-items-stretch'>
              <div className='fs-3'>
                <span className='fw-bold'>Family Package:</span> 15% Discount for families.
              </div>
              <div className='fs-3'>
                <span className='fw-bold '>Low-Income Families:</span> 10% Discount for those who can't afford the full fee.
              </div>
            </div>

          </Col>
        </Row>

        {/*  */}
        <Row className="justify-content-ceter discount-customized-plan my-5 pb-5">
          <Col md={4}>
            <div className='d-flex justify-content-end align-items-center'>
              <button className='button-book-class' style={{ padding: '25px 35px' }}>
                Customized Plan
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className='d-flex flex-column align-items-stretch'>
              <div className='fs-3'>
                <span className='fw-bold'>Pay Per Class:</span> If you don't want to take monthly plan, Pay $5 Per Class (30 minutes)
              </div>
              <div className='fs-3'>
                <span className='fw-bold '>Customized Plan:</span> Contact us if you need a customized plan for your kids to meet your needs.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CurriculamPage