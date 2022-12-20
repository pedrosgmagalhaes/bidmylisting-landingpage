import React from 'react';
import {
  Image, Row, Col, Container,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from './agentTestimonial.module.scss';

function AgentTestimonial({
  avatar, name, city, text,
}) {
  return (
    <div className={styles.reviewCard}>
      <Container className="p-4">
        <Row>
          <Col xs={2}>
            <Image src={avatar} roundedCircle />
          </Col>
          <Col className="mx-2">
            <div className={styles.name}>{name}</div>
            <div className={styles.city}>{city}</div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div className={styles.text}>{text}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

AgentTestimonial.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AgentTestimonial;
