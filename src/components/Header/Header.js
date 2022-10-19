import './Header.css'

import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import { ReactComponent as Logo } from './assets/nplogo.svg'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link home'>
            <Logo className='logo' />
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
