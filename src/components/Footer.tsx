import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© 2026 Ika Ossler</p>
        <div className={styles.links}>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer