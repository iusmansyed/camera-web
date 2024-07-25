import React, { useState } from 'react'
import styles from "./Property.module.css"
import { useLocation, useNavigate } from 'react-router-dom';
import Buttons from '../../Components/Buttons/buttons';
import Villa from "../../assets/Images/vila.jpg"
import Flat from "../../assets/Images/flat.jpg"
import Shop from "../../assets/Images/shop.jpg"
import { FaCheck } from "react-icons/fa";
const Property = () => {
  const {state} = useLocation();
  const [err, setErr] = useState(false);
  const [prop, setProperty] = useState("villa")
let navigate = useNavigate()

  const handleGoBack = () => {
    window.history.back();
  };

  const values = {...state , prop};
console.log(values);


const handleSubmit = (e) => {
  e.preventDefault();
  if (prop) {
    navigate('/quantity', {state:values});
  } else {
    setErr(true);
  }
};
  return (
    <section className={styles.home}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headingWrapper} data-aos="fade-right" data-aos-duration="3000">
              {/* <h1 data-aos="fade-right" data-aos-duration="3000">hello...</h1> */}
              <h4>Whats Your Property Type?</h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.imageCon} onClick={() => setProperty("villa")}>
              <img src={Villa} alt="" width={"100%"} />
              <div className={styles.checkBox} style={{ backgroundColor: prop === "villa" ? "#007bff" : "" }}>
                <FaCheck style={{color:"white", fontSize: "10px",display:prop === "villa" ? "block" : "none" }} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.imageCon} onClick={() => setProperty("flat")}>
              <img src={Flat} alt="" width={"100%"} />
              <div className={styles.checkBox} style={{ backgroundColor: prop === "flat" ? "#007bff" : "" }}>
                <FaCheck style={{color:"white", fontSize: "10px",display:prop === "flat" ? "block" : "none" }} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.imageCon} onClick={() => setProperty("shop")}>
              <img src={Shop} alt="" width={"100%"} />
              <div className={styles.checkBox} style={{ backgroundColor: prop === "shop" ? "#007bff" : "" }}>
                <FaCheck style={{color:"white", fontSize: "10px",display:prop === "shop" ? "block" : "none" }} />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className={styles.form}>
              <Buttons text={"next"} onclick={handleSubmit}/>
              <Buttons text={"back"} float={"left"} onclick={handleGoBack} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Property