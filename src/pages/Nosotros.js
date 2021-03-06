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
              <h4>Tenista amateur. No tiene WhatsApp.???Si pudiera tendr??a mil perritos???</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo2} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Hern??n Olivieri (Hache)</h1>
              <h2>CEO</h2>
              <h4>Ahora se cop?? con dar conferencias. Le pinta por la medicina alternativa. ???Voy a hacer sushi para todos??? ???A la gente no le gusta pagar???</h4>
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
              <h4>Fan del f??tbol, las pelis y los autos. Los domingos son de familia. Falso vegano. "Est?? rico pero le falta dulce de leche"</h4>
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
              <h4>Gran cuestionador de multitudes. ???Se cafetea???</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo5} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Nicol??s Monz??n (Aoshido)</h1>
              <h2>IT -Desarrollo</h2>
              <h4>Aspiradora industrial de alimentos comunitarios. Magic player. ???Man???</h4>
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
              <h2>Team Leader de Administraci??n</h2>
              <h4>Le encanta leer de todo y podr??a comer pizza todos los d??as. "No hay problema??? De chiquita amaba a Alf</h4>
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
              <h2>Team Leader de Atenci??n al Cliente</h2>
              <h4>Se sabe de memoria El Se??or de los Anillos. Ama a todos los animalitos. No te come un asado ni por un palo verde.</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo8} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Hern??n D??Andreis</h1>
              <h2>Atenci??n al cliente</h2>
              <h4>Simpsons super fan. ???Me deb??s un cochinillo???</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo9} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Anal??a Ledesma</h1>
              <h2>Atenci??n al cliente</h2>
              <h4>Inquieta y ansiosa. Fan de los Simpsons y pelis de terror. Disfruta viajar, conocer otras culturas, el aire libre, cocinar y probar nuevos sabores. ???Feliz viernes???
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
              <h1>Alejandra Ver??n</h1>
              <h2>Departamento Comercial</h2>
              <h4>Muy organizada, loca de la limpieza y el orden. No le gusta dejar cosas para ma??ana. Juega al f??tbol aunque no sepa bien las reglas. ???El mundo es un pa??uelo???</h4>
              </div>
            </li>
          </ul>

          <ul className='lista-equipo'>
            <li>
              <div className='lista-box1'>
              <img className="equipo-img" src={equipo11} alt="Cobro Inmediato" />
              </div>
              <div className='lista-box2'>
              <h1>Federico P??rez</h1>
              <h2>Departamento Comercial</h2>
              <h4>C??mulo inagotable de energ??a; alma metalera, Campe??n de Mortal Kombat oficin??stico; Guitarrista de Pu??alada. ???La vieja y confiable.???</h4>
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
              <h4>Xennial (un pie X y el otro Millenial.). Escorpiana, fot??grafa y viajera. Ama la aventura, el vino y la cultura pop. ???Dej?? fluir.???</h4>
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
              <h4>Amante del futbol y el asado. Fan de Guns N??? Roses, Stephen King y Riquelme. ???Todav??a sirve???</h4>
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
              <h4>Le encanta escuchar m??sica y bailar, andar en bici y jugar al ping pong. Fan??tico al helado y las pastas. "Todo lo que sucede, conviene"</h4>
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
              <h2>Soporte T??cnico</h2>
              <h4>Amante de la tecnolog??a y las milanesas, fan de los videojuegos y las milanesas, entusiasta del hardware y las milanesas. "En teor??a"</h4>
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
              <h2>Soporte t??cnico</h2>
              <h4>Amante del cine de culto y del rock vintage. Hincha de River Plate. Apasionado por la electr??nica y la inform??tica. "Es por ah??"</h4>
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
              <h4>Multitasking, multicurso, muy geminis. Pasa gran parte de su vida googleando. Gran Stalker. ???Tengo problemas t??cnicos???</h4>
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