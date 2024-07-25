import React, { useState } from 'react'
import styles from "./Home.module.css"
import AOS from "aos"
import Buttons from '../../Components/Buttons/buttons'
import { useNavigate } from 'react-router-dom'

AOS.init()
const Home = () => {
    const [name, setName] = useState("")
    const [err, setErr] = useState(false)
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name) {
            navigate('/address', { state: name });
        } else if (name == "") {
            setErr(true)
        }
    }
    return (
        <>
            <section className={styles.home}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.headingWrapper} data-aos="fade-right" data-aos-duration="3000">
                                <h1 data-aos="fade-right" data-aos-duration="3000">hello...</h1>
                                <h4>What should we call you?</h4>
                            </div>
                            <div className={styles.form}>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className={styles.inp}>
                                        <input type="text" placeholder='please enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                                        <h5 style={{ opacity: err ? 1 : 0, transition: "0.3s" }}>Please fill the feild</h5>
                                    </div>
                                    <Buttons text={"next"} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home