import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./Quantity.module.css"
import Buttons from '../../Components/Buttons/buttons';
const Quantity = () => {
  const { state } = useLocation();
  const [err, setErr] = useState(false);
  const [quantity, setQuantity] = useState("")
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity) {
      navigate('/camera', {state:values});
    } else {
      setErr(true);
    }
  };
  const handleGoBack = () => {
    window.history.back();
  };
  const values = { ...state, quantity };
console.log(values);

  return (
    <section className={styles.home}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headingWrapper} data-aos="fade-right" data-aos-duration="3000">
              {/* <h1 data-aos="fade-right" data-aos-duration="3000">hello...</h1> */}
              <h4>How Many Cameras?</h4>
              <div className={styles.inp}>
                <select name="" id="" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                  <option value="">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div className={styles.form}>
              <Buttons text={"next"} onclick={handleSubmit} />
              <Buttons text={"back"} float={"left"} onclick={handleGoBack} />
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Quantity