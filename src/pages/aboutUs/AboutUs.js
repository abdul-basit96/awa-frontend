import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import HeaderTop from "../../components/header/headerTop/headerTop";
import HeaderBottom from "../../components/header/headerBottom/headerBottom";
import Footer from '../../components/footer/Footer'
import ReconnetKids from "../../components/reconnect-kids";
import "./styles.css";

const AboutUs = (props) => {
    return (
        <Container fluid>
            <HeaderTop />
            <HeaderBottom />
            <hr className="mt-0 pt-0" />
            <Container>
                <div className="quran-host-heading pt-1 pb-1  mx-4">
                    <h3 className="fw-bolder fs-2 text-center">QuranHost</h3>
                </div>
                <div className="heading2 my-4">
                    <h3 className="fw-bolder fs-2 text-center">
                        The Best Online Quran Academy
                    </h3>
                </div>
                <Row className="mx-4">
                    <Col lg={6} md={6} sm={6}>
                        <p className="paragraph-text-1">
                            <a href="#">QuranHost</a> is the pioneer and leading Online Quran
                            Academy, founded by a team of Islamic scholars in 2010. With a
                            team of dedicated native Arab and non-Arab Quran teachers, we are
                            committed to set standards in Online Quran Teaching.
                        </p>
                        <p className="paragraph-text-2">
                            We at QuranHost provide you and your kids with a great opportunity
                            to learn Quran Online with Tajweed at home conveniently. You can
                            learn Online Noorani Qaida, Reading Quran with Tajweed, Quran
                            Memorization, Tafseer -e- Quran, and Arabic Language at your place
                            without disturbing a busy life schedule. We have developed the
                            <a href="#"> best Online Quran Courses</a> for kids and adults to
                            improve Quran recitation and memorization.
                        </p>
                        <div className="why-join-quran">
                            <h3 className="fw-bold">Why Join QuranHost?</h3>
                        </div>
                        <p className="paragraph-text-2">
                            Our Online Quran classes are preferred by a large number of Muslim
                            parents, especially those living in the UK, USA, Canada, and
                            Australia because we have highly{" "}
                            <a href="#">qualified Quran tutors</a> from Egypt, Jordan, and
                            Saudi Arabia. We also have Online Quran teachers from Pakistan who
                            can teach the kids in English and Urdu. All our teachers are
                            fluent speakers of English and Arabic. We also have very qualified
                            and expert <a href="#">female Quran teachers</a> for kids and
                            sisters.
                        </p>
                        <p className="paragraph-text-2">
                            We also feel proud in helping the converted Muslims to get{" "}
                            <a
                                href=""
                                style={{
                                    textDecoration: "underline",
                                    textDecorationColor: "#777",
                                }}
                            >
                                FREE Online Quran Classes{" "}
                            </a>
                            and learn more about Islam, Basic Islamic Beliefs, Prayers, and
                            other Islamic worship and reading and{" "}
                            <a href="">understanding Quran Online</a>.
                        </p>
                        <p className="paragraph-text-2">
                            No matter, what your age is, but if you did not get a chance to
                            learn how to read Quran with Tajweed,{" "}
                            <a href="#">Book Your Free Trials now</a>.
                        </p>
                    </Col>

                    <Col lg={6} md={6} sm={6}>
                        <div className="image m-4 mt-5">
                            <Image
                                className="img-fluid shadow shadow-md shadow-dark"
                                src="https://www.quranhost.com/wp-content/uploads/2019/03/reading-quran-with-tajweed.jpg"
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center m-4 mb-5 pt-3 pb-3 vision-row">
                    <Col lg={3} md={3} sm={3}>
                        <div className="d-flex ps-5">
                            <div className="svg-div">
                                <svg
                                    id="svg-5873"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="37pt"
                                    viewBox="-12 0 512 512.0007"
                                    width="37pt"
                                >
                                    <path
                                        d="m481.414062 387.503906c-46.253906 75.460938-129.484374 125.507813-224.226562 124.480469-142.894531-1.546875-257.1875-117.976563-257.1875-261.953125 0-115.910156 74.722656-214.253906 178.257812-248.757812 4.996094-1.664063 9.546876 3.523437 7.28125 8.308593-16.441406 34.6875-25.527343 73.601563-25.222656 114.691407 1.070313 144.238281 116.875 260 260.039063 260 18.78125 0 37.082031-2.007813 54.730469-5.832032 5.136718-1.113281 9.089843 4.554688 6.328124 9.0625zm0 0"
                                        fill="#ffc143"
                                    ></path>
                                    <path
                                        d="m481.394531 387.53125c-6.792969 11.078125-14.378906 21.601562-22.679687 31.496094-9.984375 1.027344-20.101563 1.546875-30.355469 1.546875-164.023437 0-297.003906-133.980469-297.003906-299.226563 0-38.714844 7.300781-75.707031 20.578125-109.652344 8.53125-3.941406 17.308594-7.421874 26.304687-10.421874 5.007813-1.667969 9.570313 3.511718 7.300781 8.304687-16.394531 34.589844-25.476562 73.378906-25.226562 114.34375.878906 144.339844 116.777344 260.347656 260.046875 260.347656 18.78125 0 37.082031-2.007812 54.726563-5.828125 5.152343-1.117187 9.078124 4.570313 6.308593 9.089844zm0 0"
                                        fill="#ffb509"
                                    ></path>
                                    <path
                                        d="m389.464844 4.546875 26.585937 54.273437c1.179688 2.40625 3.457031 4.074219 6.09375 4.460938l59.449219 8.703125c6.640625.972656 9.289062 9.195313 4.484375 13.914063l-43.015625 42.246093c-1.90625 1.875-2.777344 4.574219-2.328125 7.222657l10.15625 59.648437c1.132813 6.664063-5.808594 11.746094-11.75 8.601563l-53.171875-28.164063c-2.355469-1.25-5.175781-1.25-7.535156 0l-53.167969 28.164063c-5.941406 3.144531-12.882813-1.9375-11.75-8.601563l10.15625-59.648437c.449219-2.648438-.421875-5.347657-2.328125-7.222657l-43.015625-42.246093c-4.804687-4.71875-2.15625-12.941407 4.484375-13.914063l59.449219-8.703125c2.636719-.386719 4.914062-2.054688 6.09375-4.460938l26.585937-54.273437c2.972656-6.0625 11.554688-6.0625 14.523438 0zm0 0"
                                        fill="#ffc143"
                                    ></path>
                                    <path
                                        d="m443.066406 128.144531c-1.90625 1.871094-2.785156 4.574219-2.328125 7.222657l10.148438 59.65625c1.132812 6.660156-5.808594 11.738281-11.75 8.59375l-7.300781-3.867188-12.179688-71.570312c-.558594-3.234376.515625-6.527344 2.847656-8.824219l49.648438-48.753907 9.433594 1.382813c6.644531.976563 9.292968 9.195313 4.488281 13.914063zm0 0"
                                        fill="#ffb509"
                                    ></path>
                                </svg>
                            </div>
                            <div className="our-vision ms-3">
                                <h3
                                    className="fw-bold text-white"
                                    style={{ fontSize: "28px", lineHeight: "1.3" }}
                                >
                                    Our Vision
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9} md={9} sm={9}>
                        <div className="ps-2 pe-5 pt-4 paragraph-text-1 text-white">
                            <p>
                                Our vision is to spread the knowledge of Quran around the world.
                                We at QuranHost strive hard for every Muslim to read and
                                understand the Holy Quran with the applied rules of Tajweed. We
                                expect that from the reachings, students will practice it in
                                their daily lives to become as a role model for this global
                                society.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <div className="lower-cources">
                <Container>
                    <div className="cources-heading text-center mt-5 mb-5">
                        <h3
                            className="fw-bold"
                            style={{ fontSize: "30px", color: "#B5651D" }}
                        >
                            Cources we offer
                        </h3>
                    </div>
                    <Row className="mx-5 px-5 mb-5">
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card className="course-card" style={{ width: "16rem" }}>
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                        data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text className="text-center fw-bold">
                                            Qaida Noorania Online
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card className="course-card" style={{ width: "16rem" }}>
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/tafseer-ul-quraan-1.jpg"
                                        data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text className=" text-center fw-bold">
                                            Online Quran Reading
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card className="course-card" style={{ width: "16rem" }}>
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/Online-Quran-with-Tajweed-1.jpg"
                                        data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text
                                            className="fw-bold text-center"
                                            style={{ fontSize: 16 }}
                                        >
                                            Reading Quran with Tajweed
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card className="course-card" style={{ width: "16rem" }}>
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/Memorizing-Quran-Online.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text className="fw-bold text-center">
                                            Quran Memorization Online
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mx-5 px-5 pb-5">
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card className="course-card" style={{ width: "16rem" }}>
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/tajweed-course.jpg"
                                        data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text className="text-center fw-bold">
                                            Advance Tajweed Course
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card
                                    className="course-card"
                                    className="course-card"
                                    style={{ width: "16rem" }}
                                >
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/learning-arabicc-1.jpg"
                                        data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text className=" text-center fw-bold">
                                            Basic Islamic Teaching
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card className="course-card" style={{ width: "16rem" }}>
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/quranic-arabic-online.jpg"
                                        data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text
                                            className="fw-bold text-center"
                                            style={{ fontSize: 16 }}
                                        >
                                            Arabic Language Online
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} className="px-auto">
                            <div className="image-card">
                                <Card className="course-card" style={{ width: "16rem" }}>
                                    <Card.Img
                                        variant="center"
                                        src="https://www.quranhost.com/wp-content/uploads/2019/03/Arabic-Language-Online.jpg"
                                        data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Text className="fw-bold text-center">
                                            Quranic Arabic Online
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="" style={{ position: "relative" }}>
                <ReconnetKids heading="Reconnect your kids with Quran" />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </Container>
    );
};

export default AboutUs;
