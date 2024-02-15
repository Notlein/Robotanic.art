import styles from './Timeline.module.css'



export default function Timeline() {
  return (
    <>
    <div className={styles.wrap}>
        <div className={styles.timelineHeader}><img className={styles.plant} src="/img/plant-grow.gif"></img></div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;Home</span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;Inspirations and<br></br>
            &nbsp;Historical work</span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;Discuss</span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;Design</span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;Forecast</span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;Energy</span>
            </div>
            <div className={styles.flexdiv}>---<span className={styles.span}>&nbsp;Contact</span>
            </div>
    </div>
    </>
  )
}




