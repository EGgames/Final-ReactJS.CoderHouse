import React from 'react'
import ceo from '../../assets/images/foto_carne.webp';
import about1 from '../../assets/images/about1.webp'
import about2 from '../../assets/images/about2.webp'
import { Link } from 'react-router-dom';
import '../../assets/css/animaciones.css'

function Acerca() {
    document.title = 'Wolf informatica - Acerca de Nosotros';
    return (
        <div className="slide-in-fwd-center">
        <div className="container marketing">
          <div className="row mx-auto align-middle text-center py-4">
            <div className="col-lg-4 mx-auto">
              <img src={ceo} className="img-fluid mx-auto" alt="Emiliano Galmarini - CEO" />
              <h2>Emiliano Galmarini <p>Nuestro CEO</p></h2>
              <p>28 años, se desempeña como docente de mantenimiento informatico en DGETP UTU desde 2015. Fundador de Wolf Informatica en junio de 2021.</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
          </div>
          {/* Nuestra ética */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Etica y profesionalismo. <span className="text-muted"><p>de la A a la Z.</p></span></h2>
              <p className="lead">Wolf Informatica nacio en base a la falta de etica y profesionalisto en gran parte del mercado informatico local. Se necesitan tecnicos capaces de detectar problemas simples u complejos, pero sobre todas las cosas que lo solucionen y le den seguidad al cliente de que saben lo que hacen.</p>
            </div>
            <div className="col-md-5">
              <img src={about1} className="img-fluid mx-auto" alt="Trabajamos con base en la etica y profesionalismo laboral" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">La informatica con apasiona. <span className="text-muted"><p>Y se nota en nuestro trabajo.</p></span></h2>
              <p className="lead">En Wolf Informatica hacemos lo que nos gusta, solucionar problemas a nuestros clientes e insertarlos en el mundo de la informatica que tanto conocemos, por eso vendemos una amplia gama de componentes para insertarse en este lindo mundo!.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={about2} className="img-fluid mx-auto" alt="Amamos lo que hacemos" />
            </div>
          </div>
          <hr className="featurette-divider" />
         {/* fin de nuestra ética */}
        </div>
      </div>
  )
}

export default Acerca