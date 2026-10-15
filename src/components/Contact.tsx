import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.card}>
        <p className={styles.label}>Contact</p>
        <h2>Get in touch</h2>
        <p>
          Have a project, an internship or just a question?
          <br />
          Feel free to reach out.
        </p>

        <ul className={styles.links}>
          <li><a href="mailto:ika@ossler.se">ika@ossler.se</a></li>
          <li><a href="https://www.linkedin.com/in/ika-ossler-2672833a0/">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/ikaossler">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact