import styles from './Projects.module.css'
import ProjectList from './ProjectList'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.label}>Projects</p>
      <h2>Selected projects</h2>
      <ProjectList projects={projects} />
    </section>
  )
}

export default Projects