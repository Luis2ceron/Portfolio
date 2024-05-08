
import Header from './components/header';
import Main from './components/main';
function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
        <Header />
        <section className='bg-gray-800'>
        <Main />
     </section>
    </main>

  );
}

export default App;
