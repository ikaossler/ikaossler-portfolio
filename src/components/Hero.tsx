import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.text}>
       <p className={styles.label}>Frontend development student</p>
<h1>Hi, I'm Ika</h1>
        <p>Frontend developer who loves building dark, modern and flowing interfaces.</p>

        <div className={styles.buttons}>
          <a href="#projects">View projects</a>
          <a href="#contact">Contact me</a>
        </div>
      </div>

      <img
        src="/images/profile-picture.png" alt="Ika Ossler"
        className={styles.image}
      />
    </section>
  )
}

export default Hero