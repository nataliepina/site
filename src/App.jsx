import './App.css';
import { useContext } from 'react';
import { About, Footer, Header, Projects } from './components/index';
import { ThemeContext } from './contexts/theme';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
