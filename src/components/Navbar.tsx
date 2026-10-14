import { useState } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>Ika Ossler</a>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={isOpen ? styles.linksOpen : styles.links}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar