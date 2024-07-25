import React from 'react'
import styles from "./buttons.module.css"
const Buttons = (props) => {
    return (
        <button type='submit' className={styles.button} style={{float:props.float}} onClick={props.onclick}>
            {props.text}
        </button>
    )
}

export default Buttons