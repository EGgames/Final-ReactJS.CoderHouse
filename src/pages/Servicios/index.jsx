import React from 'react';
import { Link } from 'react-router-dom'; 
import servicios1 from '../../assets/images/Componentes_venta.webp';
import servicios2 from '../../assets/images/bg1.webp';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner'

function Servicios() {
    document.title = 'Wolf Informatica - Servicios';
    if(servicios2 === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
  return (
    <section className="slide-in-fwd-center">
  <section>
    <article>
      {/* Call to action o hero para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={servicios1} alt="nuestrocheffatufiesta" />
        <h1 className="display-5 fw-bold">Venta de componentes informaticos</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Tenemos los mejores precios para los mejores fabricantes del mercado. Distribuimos a nivel nacional lo que el cliente necesite.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></Link>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Ver tienda</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={servicios1} className="d-block mx-lg-auto img-fluid" alt="llevamosnuestrosmeseros" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Venta de componentes informaticos</h1>
            <p className="lead">Tenemos los mejores precios para los mejores fabricantes del mercado. Distribuimos a nivel nacional lo que el cliente necesite.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></Link>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Ver tienda</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section> <section>
    <article>
      {/* Hero para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={servicios2} alt="nuestrosservicios" />
        <h1 className="display-5 fw-bold">Mantenimiento Preventivo y Correctivo</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Somos una empresa lider en mantenimiento a nivel local. Realizamos mantenimientos tanto a empresas como a particulares, detectando y solucionando problemas en los dispositivos admitidos.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></Link>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Solicitar mantenimiento</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={servicios2} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Mantenimiento Preventivo y Correctivo</h1>
            <p className="lead">Somos una empresa lider en mantenimiento a nivel local. Realizamos mantenimientos tanto a empresas como a particulares, detectando y solucionando problemas en los dispositivos admitidos.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></Link>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Solicitar Mantenimiento</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</section>
  )
}

export default Servicios