import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectList from './ProjectList'
import { projects } from '../data/projects'

const tags = ['React', 'TypeScript', 'CSS', 'HTML', 'API', 'Figma']

function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

   function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }


  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) => 
          project.tags.some((tag) => selectedTags.includes(tag))
        )

  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.label}>Projects</p>
      <h2>Selected projects</h2>

      <div className={styles.filters}>
        {tags.map((tag) => (
         <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={selectedTags.includes(tag) ? styles.active : ''}
>
  {tag}
</button>
        ))}
        <button className={styles.clear} onClick={() => setSelectedTags([])}>Clear filter</button>
      </div>

      <ProjectList projects={filteredProjects} />
    </section>
  )
}

export default Projects