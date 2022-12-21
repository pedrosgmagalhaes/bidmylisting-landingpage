import React from 'react';
import { InputGroup, FormControl, Image } from 'react-bootstrap';
import { BrowserView, MobileView } from 'react-device-detect';
import PropTypes from 'prop-types';
import BlueButton from '../blueButton';

import styles from './searchInput.module.scss';

function SearchInput({ icon, text }) {
  return (
    <>
      <BrowserView>
        <InputGroup className={styles.inputGroup}>
          <InputGroup.Text className={styles.inputIcon}>
            <Image src={icon} alt={text} />
          </InputGroup.Text>
          <FormControl placeholder={text} className={styles.input} />
          <InputGroup.Text className={styles.inputButton}>
            <BlueButton text="Let's go" />
          </InputGroup.Text>
        </InputGroup>
      </BrowserView>
      <MobileView>
        <InputGroup className={styles.inputGroup}>
          <InputGroup.Text className={styles.inputIcon}>
            <Image src={icon} alt={text} />
          </InputGroup.Text>
          <FormControl placeholder={text} className={styles.input} />
        </InputGroup>
        <BlueButton text="Let's go" />
      </MobileView>
    </>
  );
}

SearchInput.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SearchInput;
