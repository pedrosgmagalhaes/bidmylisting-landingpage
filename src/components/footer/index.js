import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import Logo from "../../assets/images/logo.svg";
import Twitter from "../../assets/images/twitterIcon.svg";
import Linkedin from "../../assets/images/linkedinIcon.svg";
import Youtube from "../../assets/images/youtubeIcon.svg";
import Instagram from "../../assets/images/instagramIcon.svg";


function Footer() {
    return (
        <section>
            <Container className="mt-5">
                <div className="d-flex flex-row">
                    <Image className="mt-2" src={Logo} alt="As Seen In" />
                </div>
                <div className="mt-4 d-flex flex-column">
                    <small className="text-muted ">
                        © 2022 BidMyListing®
                    </small>
                    <small className="text-muted mt-4">
                        We are committed to making our website accessible and user friendly to all.
                        While we are consistently working to improve, we welcome your feedback and accommodation requests.
                        If you are having difficulty accessing or navigating our website, or if you have any suggestions
                        to improve accessibility, please email our team.
                    </small>
                </div>
                <div className="mt-4">
                    <Row>
                        <Col>
                            About Us
                        </Col>
                        <Col>
                            Blog
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            User Agreement
                        </Col>
                        <Col>
                            Careers
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Help Center
                        </Col>
                        <Col>
                            Resources
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <div>
                            P: 323-515-0624
                        </div>
                        <div>
                            E: info@bidmylisting.comment
                        </div>
                        <div>
                            Newport Beach, California 92660
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center w-50 mt-4">
                    <span>
                        <Image src={Youtube} alt="Youtube" />
                    </span>
                    <span>
                        <Image src={Linkedin} alt="Linkedin" />
                    </span>
                    <span>
                        <Image src={Twitter} alt="Twitter" />
                    </span>
                    <span>
                        <Image src={Instagram} alt="Instagram" />
                    </span>
                </div>
            </Container>
        </section>
    )
}

export default Footer;