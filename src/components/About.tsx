import styles from './About.module.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Git']

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.text}>
        <p className={styles.label}>About me</p>
        <h2>A little bit about who I am</h2>
        <p>
          I'm Ika, a frontend development student at Medieinstitutet. I enjoy the
          creative side of building websites, turning a design idea into something
          people can actually click and use. I'm still discovering where my strengths
          lie, and I learn best by building real projects. I'm now looking for an
          internship where I can grow as a frontend developer.
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