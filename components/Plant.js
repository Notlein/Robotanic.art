import styles from './Plant.module.css'



export default function Plantobject() {
  return (
    <>
    <div className={styles.ccanvas_container_div} id="canvas_container_div">
    <img src="/img/20231212_175730.jpg" className={styles.images} />
        <img src="/img/20231216_132417.jpg" className={styles.images} />
        <img src="/img/20231220_162928.jpg" className={styles.images} />
        <img src="/img/20240109_172754.jpg" className={styles.images} /> 
    <canvas className={styles.ccanvas} id="canvas" width="1000" height="1000"></canvas> 
    </div>
    


    </>
  )
}



