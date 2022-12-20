import React from 'react';
import {
  Container, Image, Col, Row,
} from 'react-bootstrap';
import Logo from '../../assets/images/logo.svg';
import Twitter from '../../assets/images/twitterIcon.svg';
import Linkedin from '../../assets/images/linkedinIcon.svg';
import Youtube from '../../assets/images/youtubeIcon.svg';
import Instagram from '../../assets/images/instagramIcon.svg';

import styles from './footer.module.scss';

function Footer() {
  return (
    <section id={styles.Footer}>
      <Container className="mt-5">
        <Row>
          <Col md={4} xs={12}>
            <div className="d-flex flex-row">
              <Image className="mt-2" src={Logo} alt="As Seen In" />
            </div>
            <div className="mt-4 d-flex flex-column">
              <small className="text-muted ">
                © 2022 BidMyListing®
              </small>
              <small className="text-muted mt-4">
                We are committed to making our website accessible and user friendly to all.
                While we are consistently working to improve, we welcome your feedback and
                accommodation requests.
                If you are having difficulty accessing or navigating our website, or if you have
                any suggestions
                to improve accessibility, please email our team.
              </small>
            </div>
          </Col>
          <Col md={4} xs={12} className={styles.FooterLinks}>
            <Row className={styles.FooterRow}>
              <Col md={12} xs={6}>
                <ul>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>User Agreement</li>
                </ul>
              </Col>
              <Col md={12} xs={6}>
                <ul>
                  <li>Careers</li>
                  <li>Help Center</li>
                  <li>Resources</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.FooterContact}>
              <ul>
                <li>P: 323-515-0624</li>
                <li>E: info@bidmylisting.comment</li>
                <li>Newport Beach, California 92660</li>
              </ul>
            </div>
            <div className={styles.FooterSocial}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
