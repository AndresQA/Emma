import React from 'react';
import Carusel from '../components/Carousel/Carousel';
import './News.scss'
const News = () => {
    return (
        <div className="news">
            <div className="news__banner">
                <img src="/images/emmahome.png" className="news__bannerEmmaImg" alt="" />
                <div className="news__banner__text">
                    <h3>Hola, soy Emma</h3>
                    <p>Estoy aquí para ayudarte, déjame saber si necesitas ayuda. </p>
                </div>
                <div className="news__banner__buttomChat">
                    <img src="/icons/chat.png" className="" alt="" />
                    <p>Chat</p>
                </div>
            </div>
            <h1 className="firstTitle">Lo más buscado</h1>
            <div className="news__bannerCards">
                <div className="news__bannerItems">
                    <h4>Urgencia Medica</h4>
                    <img src="/icons/salud.png" className="news__bannerItems__icon" alt="" />
                </div>
                <div className="news__bannerItems">
                    <h4>Solicitud de Refugio</h4>
                    <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                </div>
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