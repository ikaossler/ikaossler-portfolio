import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <img
        src="/images/profile-picture.png"
        alt="Ika Ossler"
        className={styles.image}
      />

      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 className={styles.srOnly}>Ika Ossler, frontend developer</h1>

          <p className={styles.label}>Frontend development student</p>

          <div className={styles.big}>
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <p className={styles.intro}>
            Curious and creative, and always learning how to build better web
            experiences.
          </p>

          <p className={styles.status}>
            <span className={styles.dot} />
            Looking for an internship (LIA) · Apr – Oct 2027 ·{' '}
            <a href="mailto:ika@ossler.se">ika@ossler.se</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero