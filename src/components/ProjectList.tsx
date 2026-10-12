import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './ProjectList.module.css'

type ProjectListProps = {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList