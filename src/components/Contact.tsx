import { useState, type SyntheticEvent } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [form, setForm ] = useState({
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
        <p className={styles.label}>Contact</p>
        <h2>Get in touch</h2>
        <p>
          Have a project, an internship or just a question?
          <br />
          Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
           {errors.phone && <p>{errors.phone}</p>}

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          {errors.subject && <p>{errors.subject}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
           {errors.message && <p>{errors.message}</p>}

          <button type="submit">Send</button>
          {sent && <p>Thank you! Your message has been sent.</p>}
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