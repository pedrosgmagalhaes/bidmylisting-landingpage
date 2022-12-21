import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './loading.module.scss';

function LoadingSpinner() {
  return (
    <div className={styles.loadingSpinner}>
      <Spinner animation="border" role="status" className={styles.spinner}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;
