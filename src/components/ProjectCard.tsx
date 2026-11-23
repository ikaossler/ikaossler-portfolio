import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'
import { motion } from 'motion/react'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const mainLink = project.liveUrl || project.repoUrl || project.figmaUrl

  return (
    <motion.article
      className={styles.card}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.frame}>
        <img src={project.image} alt={project.title} className={styles.image} />

        <div className={styles.glass}>
          <div>
            <h3>{project.title}</h3>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          {mainLink && (
            <a
              href={mainLink}
              className={styles.arrow}
              aria-label={`Open ${project.title}`}
            >
              ↗
            </a>
          )}
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.links}>
        {project.repoUrl && <a href={project.repoUrl}>Repo ↗</a>}
        {project.liveUrl && <a href={project.liveUrl}>Live demo ↗</a>}
        {project.figmaUrl && <a href={project.figmaUrl}>Figma ↗</a>}
      </div>
    </motion.article>
  )
}

export default ProjectCard