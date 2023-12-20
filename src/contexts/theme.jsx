import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = Cookies.get('themeName');
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    return savedTheme || (darkMediaQuery.matches ? 'dark' : 'light');
  });

  useEffect(() => {
    Cookies.set('themeName', themeName, { expires: 365 });
    // Cookie expiration set to 1 year
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
