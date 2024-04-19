import Discuss from './Discuss.js'
import styles from './Timeline.module.css'
import React, { useState } from 'react'; // Import useState hook



export default function Timeline() {

// State to control the visibility of Discuss component
const [showDiscuss, setShowDiscuss] = useState(false);

// Event handler to toggle Discuss component
const handleClick = () => {
    setShowDiscuss(true);
};


  return (
    <>
    <div className={styles.wrap}>
        <div className={styles.timelineHeader}><img className={styles.plant} src="/img/plant-grow.gif"></img></div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;<a className={styles.a} href="#progress">Progress</a></span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;<a className={styles.a} href="#inspiration">Inspirations and<br></br>
            &nbsp;Historical work</a></span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;<a className={styles.a} href="#forecast">Forecast</a></span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;<a className={styles.a} href="#energy">Energy</a></span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;<a className={styles.a} href="#discuss" onClick={handleClick}>Discuss</a></span>
            </div>
    </div>
    <Discuss onClose={() => setShowDiscuss(false)} isVisible={showDiscuss} />

    </>
  )
}




