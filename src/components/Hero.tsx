import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <img
        src="/images/profile-picture.png"
        alt="Ika Ossler"
        className={styles.image}
      />

      <div className={styles.text}>
        <p className={styles.label}>Frontend development student</p>
      <h1>
  Hello,
  <br />
  My name is <span className={styles.name}>Ika</span>
</h1>
        <p>
          <p>
            Curious and creative, and always learning how to build better web
            experiences.
          </p>
        </p>

        <div className={styles.buttons}>
          <a href="#projects">View projects</a>
          <a href="#contact">Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero