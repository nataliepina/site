import './App.css'

import { useContext } from 'react'

import {
  About,
  Contact,
  Footer,
  Header,
  Projects,
} from './components/index'
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

      <Footer />
    </div>
  )
}

export default App
