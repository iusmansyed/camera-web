import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./Modal.module.css"
const ModalComp = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className={styles.head}>
              <h3>details</h3>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className={styles.list}>
            <li><img src={data.images} alt="" width={"60%"}/></li>
            <li><span>Address:</span> {data.address}</li>
            <li><span>Postal Code:</span> {data.postalCode}</li>
            <li><span>Property:</span> {data.property}</li>
            <li><span>Name Of Product:</span> {data.nameOfProduct}</li>
            <li><span>Price Of Product</span> {data.priceOfProduct}</li>
            <li><span>Quantity:</span> {data.quantity}</li>
           
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.close}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComp