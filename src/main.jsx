// main.jsx
import { createRoot } from 'react-dom';
import App from './data/App';
import './i18n'; // Importa la configuración de i18n

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
