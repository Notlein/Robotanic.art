import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/img/20231212_175730.jpg" className={styles.images} />
        <img src="/img/20231216_132417.jpg" className={styles.images} />
        <img src="/img/20231220_162928.jpg" className={styles.images} />
        <img src="/img/20240109_172754.jpg" className={styles.images} /> 

        {/* <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} /> */}
      </footer>
    </>
  )
}
