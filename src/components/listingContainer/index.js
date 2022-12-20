import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import styles from './listingContainer.module.scss';

function ListingComponent({ icon, title, description }) {
  return (
    <Row id={styles.ListingComponent}>
      <Col xs={12}>
        <Row className={styles.ListingComponentIcons}>
          <Col md={6} xs={12}>
            <Row>
              <Col md={1} xs={2}>
                <img src={icon} alt={title} />
              </Col>
              <Col md={11} xs={10} className="d-flex align-items-start">
                <h4>{title}</h4>
              </Col>
            </Row>
          </Col>
          <Col md={6} xs={12} className={styles.ListingComponentDescription}>
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
