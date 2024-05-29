
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const HomePage = () => {

  return (
    
    <div className="container mx-auto px-4 py-8" style={{background: '#1f1f1f'}} >
      {/*Aqui empieza la pagina principal*/}
      <p className="text-4xl text-justify flex justify-center align-middle mb-4  font-bold text-white">Luis Alejandro Ceron Muñoz</p>
      <p className="text-lg text-justify flex justify-center align-middle mb-4 text-white ">Estudiante de Ing.Software</p>
      <p className="text-lg text-justify flex justify-center align-middle mb-4 text-white ">Indie GameDev</p>
     
      {/*Aqui empieza el About me*/}
      <section id="sobre-mi" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">Sobre mi</h2>
          <p className="text-xl text-justify flex justify-center align-middle mb-4 text-white">Soy un estudiante de quinto semestre de Ingeniería de Software con la capacidad de adaptarme fácilmente a flujos de trabajo exigentes y adquirir nuevos conocimientos sin afectar los resultados. Me enfoco en brindar soluciones sencillas pero escalables a los retos que se presenten en cualquier etapa del desarrollo de software.
Mi experiencia incluye trabajar como programador y tester en proyectos independientes, especialmente en el desarrollo y pruebas de videojuegos y simuladores. He participado en varios concursos amateur de creación de videojuegos (game jams) obteniendo resultados destacados.</p>
          <p className="text-xl mb-4 text-white"> Fuera del entorno del desarrollo de software, disfruto de todo el proceso relacionado con los videojuegos, Desde aprender sobre la historia de éstos en su desarrollo y temática hasta buscar formas de recrearlos total o parcialmente. Considero a su vez que esta pasión por aprender acerca de lo que disfruto está presente también en otros temas como la música y habilidades manuales Como reparar cosas y la carpintería</p>
          <div className="flex justify-center">
          
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/*Esta imagen y el de div con los p los puedes borrar si quieres*/}
          
          <div className="flex flex-col items-center">
          </div>
        </div>
      </div>
    </section>
    {/*Aqui empieza el portafolio*/}
    <section id="portafolio" className="container mx-auto px-4 py-8 text-white">
      <h2 className="flex flex-col items-center text-3xl font-bold mb-8">portfolio</h2>
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
                className="Videojuego rounded-lg shadow-md mb-4"
              />
              {/*Aqui en los h3 está los nombres de los proyectos, su descripcion y en el href el link para que te redireccione al directorio*/}

              <h3 className=" flex flex-col items-centertext-xl font-bold mb-2">Videojuego Independiente</h3>
              <p className=" flex flex-col items-center text-gray-600 mb-4">'Trabajo independiente en dearrollo de videojuegos en godot</p>
              <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md  transition-colors" style={{background: '#1f1f1f'}}>
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
                className="Simulador rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Simulador</h3>
              <p className="text-gray-600 mb-4">
                Simulador de lavado de manos para la facultad de medicina'
              </p>
              <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors" style={{background: '#1f1f1f'}}>
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
                className="Ecommerce rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">E Commerce</h3>
              <p className="text-gray-600 mb-4">
                E commerce desarrollado usando Bootstrap
              </p>
              <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors" style={{background: '#1f1f1f'}}>
              seeMore
              </a>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            </div>
          </Carousel>
        </div>
      </div>
      {/*Aqui empieza lo de habilidades aqui tambien le agregas tus iconos de mrd */}
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
    <section className="text-center">
        <h2 className="text-xl font-bold align-middle mb-4 text-white">Contacto</h2>
        {/*Aqui agregas la pendejada de los iconos */}
        <p>
        <a href="mailto:luiscerontrabajos@gmail.com" className="text-blue-500 hover:text-blue-700 align-middle">email</a>
          <a href="https://www.linkedin.com/in/luis-cerón-694626272" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">LinkedIn</a>
          <a href="https://wa.me/qr/P72NSGVSR6TWL1"  target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">WhatsApp</a>
          <a href="https://github.com/Luis2ceron"  target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">GitHub</a>
          <a href="https://gitlab.com/luiscerontrabajos"  target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-4 align-middle">GitLab</a>
        </p>
      </section>
    </section>
    </div>
  );
};

export default HomePage; 

