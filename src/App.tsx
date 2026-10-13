import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectList from './components/ProjectList'
import { projects } from './data/projects'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App