import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.label}>Contact</p>
      <h2>
        Get <span className={styles.accent}>in touch</span>
      </h2>
      <p className={styles.text}>
        Have a project, an internship or just a question? Feel free to reach
        out.
      </p>

      <a href="mailto:ika@ossler.se" className={styles.mail}>
        ika@ossler.se
      </a>

      <div className={styles.links}>
        <a
          href="https://github.com/ikaossler"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/ika-ossler-2672833a0/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}

export default Contact