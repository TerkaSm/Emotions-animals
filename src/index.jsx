import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/',
  },
]);

createRoot(document.querySelector('#app')).render(<HomePage />);
