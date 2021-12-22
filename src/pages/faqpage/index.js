import React from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/header";
import { Accordion } from "react-bootstrap";
import "./styles.css";
function FaqPage() {
  return (
    <>
      <Header />
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-lg text-center jss14">
            <h1 style={{ color: "#b5651d" }}>Frequently Asked Question</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h6>How to start Online Quran Classes?</h6>
                </Accordion.Header>
                <Accordion.Body>
                  You simply click on “Registration” and fill in the
                  Registration Form. We will call you for a free trial at a time
                  that suits you the best. After the Free Trial classes, if you
                  are satisfied and want to continue, you have to make payment
                  for Regular classes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h6> What is One to One Online session? </h6>
                </Accordion.Header>
                <Accordion.Body>
                  1 to 1 online session means there are only one student and one
                  teacher in the live session on Skype or Zoom. The teacher
                  completely focuses on one student for 30 minutes or one hour.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h6>
                    Can we choose any time and day for our Online Classes?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you can choose the time and days for your classes. We do
                  our best to find the teachers who are available at that time
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h6> How long will it take to complete the course? </h6>
                </Accordion.Header>
                <Accordion.Body>
                  Depending on the number of weekly classes, it will take for
                  adults about 6 to 8 months. For children, it depends on their
                  competency level and the support given by parents.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h6>
                    {" "}
                    I have never taken an online course before; will I able to
                    cope with this?{" "}
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  Yes, of course, it is very simple to start learning Quran
                  Online. Moreover, our team will be available anytime to assist
                  you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg jss13">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h6>Can I start learning Quran from very beginning?</h6>
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we offer Quran reading course for beginners. We have
                  prepared a ready-made and easier course for kids and
                  beginners. Even kids of 4 years can start this course
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h6>What do I need to get started? </h6>
                </Accordion.Header>
                <Accordion.Body>
                  A laptop, PC, Tablet, or SmartPhone Internet Connection Skype
                  or Zoom account for audio/video live sessions
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h6>How the classes are conducted?</h6>
                </Accordion.Header>
                <Accordion.Body>
                  We use Skype or Zoom software for Live 1 to 1 Session. In the
                  UAE and some other countries where Skype and Zoom are not
                  working we use GoToMeeting for classes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h6> What if I miss a class? </h6>
                </Accordion.Header>
                <Accordion.Body>
                  If you miss a lesson and send a prior notice to your teacher,
                  a make-up class can be rescheduled on your request.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h6>What is the duraiton of each class?</h6>
                </Accordion.Header>
                <Accordion.Body>
                  1 to 1 Classes duration is 30 minutes for each student. For
                  Quran Memorization and Arabic Language course class duration
                  maybe 45 to 60 minutes
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FaqPage;
