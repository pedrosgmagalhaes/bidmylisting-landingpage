import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './blueButton.module.scss';

function BlueButton({ text }) {
  return (
    <Button
      variant="primary"
      className={styles.buttonCallToAction}
    >
      {text}
    </Button>
  );
}

BlueButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlueButton;
