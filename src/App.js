import React from 'react';
import './App.css';
import './Responsive.css'
import { Component } from 'react'
import perfil from './perfil.jpg'
import cvtxt from './CVes.pdf'

export class App extends Component {

  

  

  render() {
    return (
      <div className="App">


        {/*HEADER COMIENZO*/}
        <header id="cabecera">

          {/*NOMBRE COMIENZO*/}

          <div className="nombre">
            <div id="nombre"><a href="/#">Luis Rosales</a></div>
          </div>

          {/*NOMBRE FINAL*/}


          {/*MENU COMIENZO*/}
          <div className="menu">

            <ul >
              <li>
                <a href="/#">INICIO</a>
              </li>
              <li>
                <a href="#cv">MI CV</a>
              </li>
              <li>
                <a href="#portafolio">PORTAFOLIO</a>
              </li>
              <li>
                <a href="#contacto">CONTACTO</a>
              </li>
            </ul>
          </div>
          {/*MENU FINAL*/}

        </header>

        {/*HEADER FINAL*/}


        <br />

        {/*INICIO COMIENZO*/}

        <section id="inicio">

          <img src={perfil} alt="Luigi" />

          <div id="about">
            <p> Hola! Soy desarrollador web Front-End. Me encanta el mundo de la informática, especialmente el del desarrollo web. Soy flexible y hasta ansioso por conocer nuevas tecnologías y crecer profesionalmente.</p>
          </div>

        </section>

        {/*INICIO FINAL*/}

        {/*CV INICIO*/}
        <section id="cv">

          <h1 className="titulo-seccion" id="cv-titulo">MI CV</h1>

          <a href={cvtxt} download><button id="descargar">DESCARGA MI CV</button></a>

          <div id="skills">

            <div className="carta">
              <p className="icon">H</p>
              <h2 className="categoria">MIS HABILIDADES</h2>
              <p className="descripcion">HTML, CSS, SASS, Bootstrap, Javascript, React, Node.js, Express</p>

            </div>

            <div className="carta">
              <p className="icon">e</p>
              <h2 className="categoria">EXTRA</h2>
              <p className="descripcion">Soy bilingüe y sé principios de Responsive Web Design  </p>

            </div>

          </div>

        </section>
        {/*CV  FINAL*/}

        {/*PORTFOLIO INICIO*/}
        <div id="portafolio">

          <h1 className="titulo-seccion" id="titulo-portafolio">PORTAFOLIO</h1>

          <div id="proyectos">

          <div className="unidad-proyecto" id="proyecto1">
            <span id="proyecto-titulo"><h1>Super Merch</h1></span>
            <div  id="proyecto-url"><a href="https://supermerch.netlify.app/" target="_blank"  rel="noopener noreferrer">Ir al proyecto</a></div>
            <div id="proyecto-github"><a href="https://github.com/luigiRP/Super-Merch" target="_blank"  rel="noopener noreferrer"> Github</a></div>

          </div>

          </div>
        </div>
        {/*PORTFOLIO FIN*/}

        {/*CONTACTO INICIO*/}
        <div id="contacto">

          <h1 className="titulo-seccion" id="titulo-contacto">CONTACTO</h1>



          <div id="caja-contacto">

            <div id="ubicacion">

              <h2 className="subtitulo">MI UBICACIÓN</h2>

              <h3>Madrid, España</h3>

              <iframe id="mapa" title="mi-ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.1398105032!2d-3.8196206842121603!3d40.43786975948415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1sen!2ses!4v1588756646090!5m2!1sen!2ses" width="auto" height="200px"></iframe>

            </div>

            <div id="redes">
              <h1 className="subtitulo">Mis Redes</h1>


              <div id="redes-caja">

                <a href="https://www.linkedin.com/in/luis-rosales-0b781a188/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" id="linkedin" aria-hidden="true" />
                </a>
                <a href="https://github.com/luigiRP" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" id="github" aria-hidden="true" />
                </a>


              </div>



            </div>

            <div id="contactame">
              <h1 className="subtitulo">Contáctame!</h1>

              <div className="titulo-seccion" id="contacto-seccion"><h2 >Correo:</h2></div>
              <h3 id="correo">luigirosales84@gmail.com</h3>
              
              <div id="caja-numero">
              <div className="titulo-seccion" id="contacto-seccion"><h2 >Número:</h2></div>
              <h3 id="numero">+34 648244118</h3>
              </div>

              


            </div>



          </div>

        </div>
        {/*CONTACTO FIN*/}

        {/*FOOTER INICIO*/}
        <footer>
          <h2>Copyright &copy; Luis Rosales 2020</h2>
        </footer>
        {/*FOOTER FIN*/}


      </div>
    )
  }
}

export default App

