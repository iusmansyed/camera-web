import React, { useState } from 'react'
import styles from "./Address.module.css"
import { useLocation, useNavigate } from 'react-router-dom'
import Buttons from '../../Components/Buttons/buttons'
const Address = () => {
  const { state } = useLocation();
  const [address, setAddress] = useState('');
  const [selectedPostalCode, setSelectedPostalCode] = useState('');
  const [err, setErr] = useState(false);


  const handleGoBack = () => {
    window.history.back();
  };

  let navigate = useNavigate();
  const usPostalCodes = [
    '10001', '10002', '10003', '10004', '10005',
    '90001', '90002', '90003', '90004', '90005',
    '60601', '60602', '60603', '60604', '60605',
    '77001', '77002', '77003', '77004', '77005',
    '19101', '19102', '19103', '19104', '19105',
    '85001', '85002', '85003', '85004', '85005',
    '78201', '78202', '78203', '78204', '78205',
    '92101', '92102', '92103', '92104', '92105',
    '75201', '75202', '75203', '75204', '75205',
    '95101', '95102', '95103', '95104', '95105'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { address, selectedPostalCode, state };
    console.log(values);
    if (address && selectedPostalCode) {
      navigate('/property', { state: { address, selectedPostalCode, state } });
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
              <h4>Where are You located?</h4>
            </div>
            <div className={styles.form}>
              <form action="" onSubmit={handleSubmit}>
                <div className={styles.inp}>
                  <div>
                    <select name="postalCode" id="postalCodeSelect" value={selectedPostalCode} onChange={(e) => setSelectedPostalCode(e.target.value)}>
                      <option value="">Select a postal code</option>
                      {usPostalCodes.map((postalCode, index) => (
                        <option key={index} value={postalCode}>{postalCode}</option>
                      ))}
                    </select>
                    <h5 style={{ opacity: err ? 1 : 0, transition: "0.3s", marginTop: "20px" }}>Please fill the feild</h5>
                  </div>
                  <div className={styles.imap}>
                    <input type="text" name="" id="" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='please enter your address' />
                    <h5 style={{ opacity: err ? 1 : 0, transition: "0.3s" }}>Please fill the feild</h5>
                  </div>
                </div>
                <Buttons text={"next"} />
                <Buttons text={"back"} float={"left"} onclick={handleGoBack} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address