import { useState, type SyntheticEvent } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    const newErrors = {
      name: form.name.trim() === '' ? 'Please enter your name' : '',
      email: form.email.trim() === '' ? 'Please enter your email' : '',
      phone: form.phone.trim() === '' ? 'Please enter your phone number' : '',
      subject: form.subject.trim() === '' ? 'Please enter a subject' : '',
      message: form.message.trim() === '' ? 'Please write a message' : '',
    }

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((msg) => msg !== '')

    if (hasErrors) {
      setSent(false)
    } else {
      setSent(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.card}>
        <div className={styles.info}>
          <p className={styles.label}>Contact</p>
          <h2>
            Get <span className={styles.accent}>in touch</span>
          </h2>
          <p>
            Have a project, an internship or just a question?
            <br />
            Feel free to reach out.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className={errors.name ? styles.inputError : ''}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={errors.email ? styles.inputError : ''}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              className={errors.phone ? styles.inputError : ''}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>

          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className={errors.subject ? styles.inputError : ''}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            {errors.subject && <p className={styles.error}>{errors.subject}</p>}
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className={errors.message ? styles.inputError : ''}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>

          <button type="submit" className={styles.button}>Send</button>
          {sent && <p className={styles.success}>Thank you! Your message has been sent.</p>}
        </form>

        <ul className={styles.links}>
          <li><a href="mailto:ika@ossler.se">ika@ossler.se</a></li>
          <li><a href="https://github.com/ikaossler">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/ika-ossler-2672833a0/">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact