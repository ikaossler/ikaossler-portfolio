import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectList from './ProjectList'
import { projects } from '../data/projects'

const tags = ['All', 'React', 'TypeScript', 'CSS', 'HTML', 'JavaScript', 'API']

function Projects() {
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag))

  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.label}>Projects</p>
      <h2>Selected projects</h2>

      <div className={styles.filters}>
        {tags.map((tag) => (
          <button key={tag} onClick={() => setSelectedTag(tag)}>
            {tag}
          </button>
        ))}
      </div>

      <ProjectList projects={filteredProjects} />
    </section>
  )
}

export default Projects