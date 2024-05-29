import React from 'react';
import { useTranslation, t } from 'react-i18next'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {
  const { i18n } = useTranslation(); 

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ background: '#1f1f1f' }}>
      <h1 className="text-3xl font-bold text-center mb-4 text-white">{t('welcomePort')}</h1>
      <p className="text-lg text-justify flex justify-center align-middle mb-4 text-white">Estudiante de Ing.Software</p>
      <p className="text-lg text-justify flex justify-center align-middle mb-4 text-white">Indie GameDev</p>
      <section className="text-center">
        <h2 className="text-xl font-bold align-middle mb-4 text-white">{t('contactMe')}:</h2>
        <p>
          <a href="mailto:luiscerontrabajos@gmail.com" className="text-blue-500 hover:text-blue-700 align-middle">{t('email')}</a>
          <a href="https://www.linkedin.com/in/luis-cerón-694626272" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">LinkedIn</a>
          <a href="https://wa.me/qr/P72NSGVSR6TWL1" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">WhatsApp</a>
          <a href="https://github.com/Luis2ceron" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">GitHub</a>
          <a href="https://gitlab.com/luiscerontrabajos" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">GitLab</a>
        </p>
      </section>
      <section id="sobre-mi" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">{t('aboutMe')}</h2>
          <p className="text-xl mb-4 text-white">Soy un estudiante de quinto semestre de Ingeniería de Software con la capacidad de adaptarme fácilmente a flujos de trabajo exigentes y adquirir nuevos conocimientos sin afectar los resultados. Me enfoco en brindar soluciones sencillas pero escalables a los retos que se presenten en cualquier etapa del desarrollo de software.
Mi experiencia incluye trabajar como programador y tester en proyectos independientes, especialmente en el desarrollo y pruebas de videojuegos y simuladores. He participado en varios concursos amateur de creación de videojuegos (game jams) obteniendo resultados destacados.</p>
          <p className="text-xl mb-4 text-white"> Fuera del entorno del desarrollo de software, disfruto de todo el proceso relacionado con los videojuegos, Desde aprender sobre la historia de éstos en su desarrollo y temática hasta buscar formas de recrearlos total o parcialmente. Considero a su vez que esta pasión por aprender acerca de lo que disfruto está presente también en otros temas como la música y habilidades manuales Como reparar cosas y la carpintería</p>
          <div className="flex justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1QETDDSSWN7oV_E9hq-_aInkwJCBVH4C8/view?usp=sharing"
            className="text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            style={{ background: '#1f1f1f' }}
            target="_blank" 
          >
            {t('downCV')}
          </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/*Esta imagen y el de div con los p los puedes borrar si quieres*/}
          <img
            className="w-48 h-48 rounded-xl mb-4"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-white">Luis Alejandro Ceron Muñoz</p>
            <p className="text-base text-white">Estudiante de Ingeniería de Software</p>
          </div>
        </div>
      </div>
      </section>
      <section id="portafolio" className="container mx-auto px-4 py-8 text-white">
        {/* Contenido del portafolio... */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <Carousel className="carousel items-center mx-auto max-w-md">
               <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              {/*En cada classname de las img esta project1, project2, project3, esos los tienes que cambiar por las imagenes que subas vos */}
              <img
                width={350}
                height={250}
                className="project1 rounded-lg shadow-md mb-4"
                src="Videojuego.mp4"
              />
              {/*Aqui en los h3 está los nombres de los proyectos, su descripcion y en el href el link para que te redireccione al directorio*/}

              <h3 className=" flex flex-col items-centertext-xl font-bold mb-2">{t('Videojuego Independiente')}</h3>
              <p className=" flex flex-col items-center text-gray-600 mb-4">{t('TrBjo independiente en dearrollo de videojuegos en godot')}</p>
              <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md  transition-colors" style={{background: '#1f1f1f'}}>
                {t('seeMore')}</a>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img
                width={350}
                height={250}
                className="project2 rounded-lg shadow-md mb-4"
                src="Simulador.jpeg"
              />
              <h3 className="text-xl font-bold mb-2">{t('Simulador')}</h3>
              <p className="text-gray-600 mb-4">
                {t('Simulador de lavado de manos para la facultad de medicina')}
              </p>
              <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors" style={{background: '#1f1f1f'}}>
              {t('seeMore')}
              </a>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img
                width={350}
                height={250}
                src="Ecommerce.jpg"
              />
              <h3 className="text-xl font-bold mb-2">{t('E Commerce')}</h3>
              <p className="text-gray-600 mb-4">
                {t('E commerce desarrollado usando Bootstrap')}
              </p>
              <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors" style={{background: '#1f1f1f'}}>
              {t('seeMore')}
              </a>
            </div>
            </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-lg px-4 py-4">
          <h3 className="font-bold text-lg mb-2">Lenguajes</h3>
          <ul className="list-disc ml-4">
            <li>C++</li>
            <li>C#</li>
            <li>JS</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="border rounded-lg px-4 py-4">
          <h3 className="font-bold text-lg mb-2">Metodologías</h3>
          <ul className="list-disc ml-4">
            <li>XP</li>
            <li>Scrum</li>
          </ul>
        </div>

        <div className="border rounded-lg px-4 py-4">
          <h3 className="font-bold text-lg mb-2">Frameworks</h3>
          <ul className="list-disc ml-4">
            <li>Vite</li>
            <li>Docker</li>
            <li>Django</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div className="border rounded-lg px-4 py-4">
          <h3 className="font-bold text-lg mb-2">Tecnologias</h3>
          <ul className="list-disc ml-4">
            <li>Illustrator</li>
            <li>Acesprite</li>
            <li>Unity</li>
            <li>Godot</li>
          </ul>
        </div>
      </div>
    </section>
      </section>
    </div>
  );
};

export default HomePage;