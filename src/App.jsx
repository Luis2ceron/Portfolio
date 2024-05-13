// eslint-disable-next-line no-unused-vars
import React from 'react';
import './i18n'; // Importing the i18n configuration
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <main className='font-roboto flex flex-col justify-center items-center w-screen h-screen space-y-4'>
      <h1 className='text-3xl font-bold text-red-700'>Hello World!</h1>
      <p>{t('title')}</p>
      <select onChange={onChangeLang} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </main>
  );
}

export default App;
