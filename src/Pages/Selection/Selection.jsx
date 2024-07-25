import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./Selection.module.css"
import Buttons from '../../Components/Buttons/buttons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/Images/canon.webp"
import Img2 from "../../assets/Images/fujifilm.webp"
import Img3 from "../../assets/Images/go.webp"
import Img4 from "../../assets/Images/nikon.webp"
import Img5 from "../../assets/Images/panasonic.webp"
import Img6 from "../../assets/Images/sony.webp"
import Img7 from "../../assets/Images/dji.webp"
const Selection = () => {
  const { state } = useLocation();
  const [err, setErr] = useState(false);
  const [camera, setCamera] = useState("")
  let navigate = useNavigate()
  const values = { ...state, camera };

  const handleGoBack = () => {
    window.history.back();
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    if (camera) {
      navigate('/thankyou', { state: values });
    } else {
      setErr(true);
    }
  };
  console.log(values);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };
  const cameras = [
    {
      img: Img1,
      name: "canon",
      price: "$59.00"
    },
    {
      img: Img2,
      name: "FujiFilm",
      price: "$59.00"
    },
    {
      img: Img3,
      name: "Go",
      price: "$59.00"
    },
    {
      img: Img4,
      name: "Nikon",
      price: "$59.00"
    },
    {
      img: Img5,
      name: "Panasonic",
      price: "$59.00"
    },
    {
      img: Img6,
      name: "Sony",
      price: "$59.00"
    },
    {
      img: Img7,
      name: "Dji",
      price: "$59.00"
    },
  ]
  return (
    <section className={styles.home}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headingWrapper} data-aos="fade-right" data-aos-duration="3000">
              {/* <h1 data-aos="fade-right" data-aos-duration="3000">hello...</h1> */}
              <h4>Select Your Camera</h4>
              <div>
                <Slider {...settings}>
                  {
                    cameras.map((items, i) => (
                      <div key={i}>
                        <img src={items.img} alt="" width={"40%"} />
                        <h3>{items.name}</h3>
                        <h4>{items.price}</h4>
                        <div>
                          <Buttons text={"select"} onclick={() => { setCamera(items) }} float={"left"} />
                        </div>
                      </div>
                    ))
                  }
                </Slider>

              </div>
                  {camera && <p style={{ textTransform: "uppercase", color: "red" ,textAlign:"left"}}>your camera is {camera.name} selected</p>}
            </div>
            <div className={styles.form}>
              <Buttons text={"back"} float={"left"} onclick={handleGoBack} />
              <Buttons text={"next"} onclick={handleSubmit} />
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Selection