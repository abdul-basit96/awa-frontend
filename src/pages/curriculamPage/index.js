import React, { useState } from 'react'
import { Col, Container, Row, Table, Tabs, Tab, Nav, Card } from 'react-bootstrap'
import CurriculumCard from '../../components/card'
import HeaderBottom from '../../components/header/headerBottom/headerBottom'
import HeaderTop from '../../components/header/headerTop/headerTop'
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
                <div>
                  <img className="img-fluid px-5 rounded" src={`${process.env.PUBLIC_URL}/images/image_quran_curriculam.jpg`} alt="" />
                </div>
                <div className='my-2 mx-5 px-2 py-2 content'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aut accusamus inventore enim eveniet ullam quae dolorum fugit ducimus iste, at recusandae? Repellendus voluptatem enim voluptatum esse deserunt, ex ipsam.
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
                    <li className='py-1 px-4' onClick={(e) => { setOneToOneTab(true); setGroupTab(false) }} style={{ backgroundColor: oneToOneTab ? '#6DBB0F' : '' }}>
                      <a>One to One</a></li>
                    <li className='py-1 px-4' onClick={(e) => { setOneToOneTab(false); setGroupTab(true) }} style={{ backgroundColor: groupTab ? '#6DBB0F' : '' }}>
                      <a>Group Session</a>
                    </li>
                  </ul>
                </div>
                {/* Tabs for one-to-one and group-session */}

                {/* Cards here */}
                <div className="d-flex my-3 justify-content-between flex-wrap">
                  {[1, 2, 3, 4].map((item, ind) => <React.Fragment key={ind}><CurriculumCard /></React.Fragment>)}
                </div>
                {/* Cards here */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* Learn Tajweed ul Quran Component */}
    </>
  )
}

export default CurriculamPage