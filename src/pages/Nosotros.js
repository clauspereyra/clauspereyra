import React from 'react';
import './../App.css';
import './../components/Navbar.css'
import './Pages.css';

import img1 from './../images/nosotros-coin.jpg';

import equipo1 from './../images/nosotros/Gustavo-Frencheli.gif';
import equipo2 from './../images/nosotros/hernan-olivieri.gif';
import equipo3 from './../images/nosotros/anim2.gif';
import equipo4 from './../images/nosotros/maxi.gif';

import equipo5 from './../images/nosotros/Nicolas-Monzon.gif';
import equipo6 from './../images/nosotros/marcela.gif';
import equipo7 from './../images/nosotros/Vanina-Pugliese.gif';
import equipo8 from './../images/nosotros/HernandAndreis.gif';

import equipo9 from './../images/nosotros/Analia-Ledesma.gif';
import equipo10 from './../images/nosotros/alejandra.gif';
import equipo11 from './../images/nosotros/federico.gif';
import equipo12 from './../images/nosotros/geraldine.gif';

import equipo13 from './../images/nosotros/marianopaduani.gif';
import equipo14 from './../images/nosotros/yoendry-betancourt5.gif';
import equipo15 from './../images/nosotros/cristian-almaraz3.gif';
import equipo16 from './../images/nosotros/liliana-saliter.gif';

import equipo17 from './../images/nosotros/emanuel.gif';

import background from './../images/nosotros/sala-reuniones.jpg';


function Gateway() {
  return (
    <>      
      <div className='header-box'>
        <div className="item-box5">
        <h1 className='title-item'>Nosotros</h1>
        </div>
        <div className="item-box6">
        <img className="caja-img6" src={img1} alt="Cobro Inmediato" />
        </div>
      </div>

      <div className='equipo-all' style={{ backgroundImage: `url(${background})` }}>
      <div className='header-equipo'>
        <div className="equipo-box">
          <h1 className='title-item5'>Nuestro Equipo</h1>
          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo1} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Gustavo Frencheli</h1>
              <h2>Presidente</h2>
              <h4>Tenista amateur. No tiene WhatsApp.“Si pudiera tendría mil perritos”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo2} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Hernán Olivieri (Hache)</h1>
              <h2>CEO</h2>
              <h4>Ahora se copó con dar conferencias. Le pinta por la medicina alternativa. “Voy a hacer sushi para todos” “A la gente no le gusta pagar”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo3} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Diego Carretto</h1>
              <h2>CTO</h2>
              <h4>Fan del fútbol, las pelis y los autos. Los domingos son de familia. Falso vegano. "Está rico pero le falta dulce de leche"</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo4} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Maximiliano Tejada</h1>
              <h2>Team Leader de Desarrollo</h2>
              <h4>Gran cuestionador de multitudes. “Se cafetea”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo5} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Nicolás Monzón (Aoshido)</h1>
              <h2>IT -Desarrollo</h2>
              <h4>Aspiradora industrial de alimentos comunitarios. Magic player. “Man”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo6} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Marcela Gambolati</h1>
              <h2>Team Leader de Administración</h2>
              <h4>Le encanta leer de todo y podría comer pizza todos los días. "No hay problema“ De chiquita amaba a Alf</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo7} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Vanina Pugliese</h1>
              <h2>Team Leader de Atención al Cliente</h2>
              <h4>Se sabe de memoria El Señor de los Anillos. Ama a todos los animalitos. No te come un asado ni por un palo verde.</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo8} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Hernán D´Andreis</h1>
              <h2>Atención al cliente</h2>
              <h4>Simpsons super fan. “Me debés un cochinillo”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo9} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Analía Ledesma</h1>
              <h2>Atención al cliente</h2>
              <h4>Inquieta y ansiosa. Fan de los Simpsons y pelis de terror. Disfruta viajar, conocer otras culturas, el aire libre, cocinar y probar nuevos sabores. “Feliz viernes”
   </h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo10} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Alejandra Verón</h1>
              <h2>Departamento Comercial</h2>
              <h4>Muy organizada, loca de la limpieza y el orden. No le gusta dejar cosas para mañana. Juega al fútbol aunque no sepa bien las reglas. “El mundo es un pañuelo”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo11} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Federico Pérez</h1>
              <h2>Departamento Comercial</h2>
              <h4>Cúmulo inagotable de energía; alma metalera, Campeón de Mortal Kombat oficinístico; Guitarrista de Puñalada. “La vieja y confiable.”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo12} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Geraldine Bardin</h1>
              <h2>Marketing</h2>
              <h4>Xennial (un pie X y el otro Millenial.). Escorpiana, fotógrafa y viajera. Ama la aventura, el vino y la cultura pop. “Dejá fluir.”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo13} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Mariano Paduani</h1>
              <h2>Developer</h2>
              <h4>Amante del futbol y el asado. Fan de Guns N’ Roses, Stephen King y Riquelme. “Todavía sirve”</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo14} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Yoendry Betancourt</h1>
              <h2>Developer</h2>
              <h4>Le encanta escuchar música y bailar, andar en bici y jugar al ping pong. Fanático al helado y las pastas. "Todo lo que sucede, conviene"</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo15} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Cristian Almaraz</h1>
              <h2>Soporte Técnico</h2>
              <h4>Amante de la tecnología y las milanesas, fan de los videojuegos y las milanesas, entusiasta del hardware y las milanesas. "En teoría"</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo17} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Emmanuel Barrientos</h1>
              <h2>Soporte técnico</h2>
              <h4>Amante del cine de culto y del rock vintage. Hincha de River Plate. Apasionado por la electrónica y la informática. "Es por ahí"</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo16} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Liliana Saliter</h1>
              <h2>Recursos Humanos</h2>
              <h4>Multitasking, multicurso, muy geminis. Pasa gran parte de su vida googleando. Gran Stalker. “Tengo problemas técnicos”</h4>
              </div>
            </li>
          </ul>         
               
        </div>
        
      </div>
      </div>

          


            
           
    </>
  );
}

export default Gateway;