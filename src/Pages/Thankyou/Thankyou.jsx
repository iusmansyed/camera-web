import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import styles from "./Thankyou.module.css";
import Buttons from '../../Components/Buttons/buttons';
import html2canvas from 'html2canvas';
import ModalComp from '../../Components/Modal/Modal';
const Thankyou = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { state } = useLocation();
  const data = {
    name: state.state,
    address: state.address,
    postalCode: state.selectedPostalCode,
    property: state.prop,
    images: state.camera.img,
    nameOfProduct: state.camera.name,
    priceOfProduct: state.camera.price,
    quantity: state.quantity
  }
  const handleDownload = () => {
    // Create a formatted string for the PDF content
    const content = `
      Name: ${data.name}
      Address: ${data.address}
      Postal Code: ${data.postalCode}
      Property: ${data.property}
      Quantity: ${data.quantity}
      Name of Product: ${data.nameOfProduct}
      Price of Product: ${data.priceOfProduct}
    `;

    const imgSrc = data.images; // Assuming data.images is a valid image source (URL or base64 data)

    html2canvas(document.body).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      // Add image
      // pdf.addImage(imgData, 'PNG', 40, 40, width - 80, height - 160);
      if (imgSrc) {
        pdf.addImage(imgSrc, 'JPEG', 70, 130, width - 500, height - 1200); // Adjust position and size as needed
      }
      // Add formatted text
      pdf.setTextColor('#333333');
      pdf.setFontSize(14);
      pdf.text(content, 40, 250);


      pdf.save('data.pdf');
    });
  };
  return (
    <section className={styles.home}>
      <ModalComp data={data} show={show} open={handleShow} close={handleClose}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headingWrapper} data-aos="fade-right" data-aos-duration="3000">
              <h1 data-aos="fade-right" data-aos-duration="3000">Thank you {state.state}, Here is a customized proposal for you </h1>
              <Buttons text={"view"} onclick={()=>setShow(true)} />
              {/* <a href={state} download={state}>download</a> */}
              <Buttons text={"download"} onclick={handleDownload} />
            </div>
            <div className={styles.form}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thankyou