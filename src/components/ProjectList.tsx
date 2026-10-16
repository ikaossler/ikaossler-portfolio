import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './ProjectList.module.css'
import { AnimatePresence } from 'motion/react'

type ProjectListProps = {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className={styles.list}>
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ProjectList