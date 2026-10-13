import styles from './About.module.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Git']

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About me</h2>
      <p>
        I'm a frontend student who enjoys building modern, responsive
        interfaces. Write a few sentences about yourself here.
      </p>

      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default About