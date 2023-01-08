import './App.css'

import { useContext } from 'react'

import About from './components/About/About'
// import Bio from './components/Bio/Bio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import { ThemeContext } from './contexts/theme'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
        {/* <Bio /> */}
      </main>

      {/* <ScrollToTop /> */}
      <Footer />
    </div>
  )
}

export default App
