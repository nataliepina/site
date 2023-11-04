import './Navbar.css';

import { useContext, useState } from 'react';

import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { MdClose, MdMenu } from 'react-icons/md';

import { ThemeContext } from '../../contexts/theme';
import { projects } from '../../portfolio';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className="nav__list"
      >
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <BsFillSunFill /> : <BsMoonStarsFill />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <MdClose /> : <MdMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
