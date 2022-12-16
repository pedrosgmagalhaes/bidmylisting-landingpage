import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './blueButton.module.scss';

function BlueButton(props) {
    return (
        <Button
            variant="primary"
            className={styles.buttonCallToAction}
        >
            {props.text}
        </Button>
    )
}

export default BlueButton;