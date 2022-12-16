import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

import styles from './agentTestimonial.module.scss';

const AgentTestimonial = (props) => {
    return (
        <div className={styles.reviewCard}>
            <Container className="p-4">
                <Row>
                    <Col xs={2}>
                        <Image src={props.avatar} roundedCircle />
                    </Col>
                    <Col className="mx-2">
                        <div className={styles.name}>{props.name}</div>
                        <div className={styles.city}>{props.city}</div>
                    </Col>
                </Row>
                < hr />
                <Row>
                    <Col>
                        <div className="text-muted">{props.text}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AgentTestimonial;