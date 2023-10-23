import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'

function App() {

  return (
    <div className='relative  w-full h-full overflow-hidden bg-gradient-to-b from-stone-50 from-10% via-stone-200 via-50% to-stone-400 to-100%'>
    <Navbar />
    <Home />
    <Aboutme />
    <Projects />
    <Contact />
    </div>
  )
}

export default App
