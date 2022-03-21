import React from 'react'
import { Card } from 'react-bootstrap';
import './style.css';
const CurriculumCard = () => {
    return (
        <Card border="primary" style={{ width: '10rem', margin: '10px auto' }}>
            <Card.Header className='card-header p-2'>
                <div className="d-flex flex-column">
                    <div className=" mb-5 header-text-top">Text</div>
                    <div className='d-flex justify-content-between'>
                        <div className='header-text'>00 Classes</div>
                        <div className='px-2 header-text'>Save 5%</div>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <div className=''>
                    <Card.Text className='header-text-top'>
                        Curriculum Includes
                    </Card.Text>
                    <Card.Text className="inner-text">
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                    </Card.Text>
                </div>
            </Card.Body>
            {/* Card footer */}
            <Card.Body className='p-0 '>
                <div className='d-flex flex-column card-footer'>
                    <div className='header-text d-inline-flex'>
                        <span className='px-3 py-1  bg-primary'>View Details</span>
                    </div>
                    <div className='ps-4 fw-bold pb-0'>
                        US$ 0000
                    </div>
                    <div className="text text-primary fw-bold ps-4">Price plan classes</div>
                    <div className="button-enroll text-center my-3 mb-2">
                        <button className="btn btn-md">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CurriculumCard;