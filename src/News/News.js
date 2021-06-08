import React, { useEffect } from 'react';
import Carusel from '../components/Carousel/Carousel';
import AppContext from '../App/AppContext';
import './News.scss'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
const News = () => {

    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])

    return (
        <div className="news">


            <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close">
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding1.png" alt="" />
                    <h2>Tu ruta</h2>
                    <p>Aquí encontraras los diferentes tramites en el caso de que seas un migrante irregular o regular.</p>
                    <Button variant="contained" color="primary" className="next__style">
                        Siguiente
                    </Button>

                </div>
            </div>





            <div className="news__banner">
                <img src="/images/emmahome.png" className="news__bannerEmmaImg" alt="" />
                <div className="news__banner__text">
                    <h3>Hola, soy Emma</h3>
                    <p>Estoy aquí para ayudarte, déjame saber si necesitas ayuda. </p>
                </div>
            </div>
            <h1 className="firstTitle">Lo más buscado</h1>
            <div className="news__bannerCards">
                <Link to="/inicio/Salud/Urgencia">
                    <div className="news__bannerItems">
                        <h4>Urgencia Medica</h4>
                        <img src="/icons/salud.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <Link to="/inicio/Ruta_Migratoria/formulario">
                    <div className="news__bannerItems">
                        <h4>Solicitud de Refugio</h4>
                        <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <div className="news__bannerItems">
                    <h4>Renovación PEP</h4>
                    <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                </div>
                <div className="news__bannerItems">
                    <h4>Afiliación a la Salud</h4>
                    <img src="/icons/salud.png" className="news__bannerItems__icon" alt="" />
                </div>
                <div className="news__bannerItems">
                    <h4>Homologación de Titulos</h4>
                    <img src="/icons/educacion.png" className="news__bannerItems__icon" alt="" />
                </div>
                <div className="news__bannerItems">
                    <h4>Educación de menores</h4>
                    <img src="/icons/educacion.png" className="news__bannerItems__icon" alt="" />
                </div>

            </div>



            <h1>Noticias</h1>
            <Carusel />
        </div>

    )

}

export default News;