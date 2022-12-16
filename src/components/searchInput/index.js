import React from 'react';
import { InputGroup, FormControl, Image } from 'react-bootstrap';
import styles from './searchInput.module.scss';

function SearchInput(props) {
    return (
        <InputGroup className={styles.inputGroup}>
            <InputGroup.Text className={styles.inputIcon}>
                <Image src={props.icon} alt={props.text} />
            </InputGroup.Text>
            <FormControl placeholder={props.text} className={styles.input} />
        </InputGroup>
    )
}

export default SearchInput;