import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.label}>Contact</p>
      <h2>Get in touch</h2>
      <p>Write a short sentence about how people can reach you.</p>

      <ul className={styles.links}>
        <li><a href="mailto:din@epost.se">din@epost.se</a></li>
        <li><a href="https://github.com/ikaossler">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/ditt-namn">LinkedIn</a></li>
      </ul>
    </section>
  )
}

export default Contact