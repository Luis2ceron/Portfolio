import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/index.css';
import App from './app/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
