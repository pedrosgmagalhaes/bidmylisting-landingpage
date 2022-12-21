import React from 'react';
import { Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './transparentButton.module.scss';

function TransparentButton({ icon, text }) {
  return (
    <Button className={styles.transparentButton}>
      {text}
      <Image src={icon} alt={text} className={styles.transparentIcon} />
    </Button>
  );
}

TransparentButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TransparentButton;
