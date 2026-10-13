import Navbar from './components/Navbar'
import ProjectList from './components/ProjectList'
import { projects } from './data/projects'

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello, I'm Ika</h1>
      <ProjectList projects={projects} />
    </div>
  )
}

export default App