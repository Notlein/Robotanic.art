import styles from './Timeline.module.css'



export default function Timeline() {
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
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;<a className={styles.a} href="#discuss">Discuss</a></span>
            </div>
    </div>
    </>
  )
}




