import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
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
      </div>
    </article>
  )
}

export default ProjectCard