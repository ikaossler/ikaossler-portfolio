import styles from './About.module.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Git']

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.text}>
        <p className={styles.label}>About me</p>
        <h2>A little bit about who I am</h2>
        <p>
          I'm a frontend student who enjoys building modern, responsive
          interfaces. Write a few sentences about yourself here.
        </p>
      </div>

      <div className={styles.skillsCard}>
        <h3>Skills</h3>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About