// App.jsx
import { useTranslation } from 'react-i18next';
import { languageData } from './data';

function App() {
  const { t, i18n } = useTranslation();

  const onChangeLang = (e) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  return (
    <main className='font-roboto flex flex-col justify-center items-center w-screen h-screen space-y-4'>
      <h1 className='text-3xl font-bold text-red-700'>{t('hello')}</h1>
      <select onChange={onChangeLang} defaultValue={i18n.language}>
        {languageData.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </main>
  );
}

export default App;
