import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import styles from './listingContainer.module.scss';

function ListingComponent({ icon, title, description }) {
  return (
    <Row id={styles.ListingComponent}>
      <Col xs={12}>
        <Row className={styles.ListingComponentIcons}>
          <Col lg={6} md={12} xs={12}>
            <Row>
              <Col lg={1} md={2} xs={2}>
                <img src={icon} alt={title} />
              </Col>
              <Col lg={11} md={10} xs={10} className="d-flex align-items-start">
                <h4>{title}</h4>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} xs={12} className={styles.ListingComponentDescription}>
            <p>
              {description}
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

ListingComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListingComponent;
