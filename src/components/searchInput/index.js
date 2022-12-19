import React from 'react';
import { InputGroup, FormControl, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './searchInput.module.scss';

function SearchInput({ icon, text }) {
  return (
    <InputGroup className={styles.inputGroup}>
      <InputGroup.Text className={styles.inputIcon}>
        <Image src={icon} alt={text} />
      </InputGroup.Text>
      <FormControl placeholder={text} className={styles.input} />
    </InputGroup>
  );
}

SearchInput.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SearchInput;
