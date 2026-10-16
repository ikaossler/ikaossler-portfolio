import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'
import { motion } from 'motion/react'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className={styles.card}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={project.image} alt={project.title} className={styles.image} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className={styles.links}>
        {project.repoUrl && <a href={project.repoUrl}>Repo</a>}
        {project.liveUrl && <a href={project.liveUrl}>Live demo</a>}
        {project.figmaUrl && <a href={project.figmaUrl}>Figma</a>}
      </div>
    </motion.article>
  )
}

export default ProjectCard