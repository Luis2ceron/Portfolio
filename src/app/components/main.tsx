import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n.ts';
import './assets/styles/index.css';
import App from '../App.tsx';
import { useTranslation } from 'react-i18next';
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


const Main = () => {
  const { t } = useTranslation();
  return (
    <main className='flex flex-row items-center justify-between p-4 bg-gray-800'>
      <p>{t('hi')}</p>

    
    </main>
  );
};
export default Main;