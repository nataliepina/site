import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App tab="home" />
  </ThemeProvider>,
);
