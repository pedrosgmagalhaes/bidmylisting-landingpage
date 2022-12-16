import React from 'react';
import { Button, Image} from 'react-bootstrap';
import styles from "./transparentButton.module.scss";

function TransparentButton(props) {
  return (
    <Button className={styles.transparentButton}>
      {props.text}
      <Image src={props.icon} alt={props.text} className={styles.transparentIcon}/>
    </Button>
  );
}

export default TransparentButton;



