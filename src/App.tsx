import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectList from './components/ProjectList'
import { projects } from './data/projects'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App