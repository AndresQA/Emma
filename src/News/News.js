import React from 'react';
import Carusel from '../Carousel/Carousel';
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
            <h1>Lo más buscado</h1>
            <div className="news__bannerCards">
            <div className="news__bannerItems"></div>

            </div>

            <h1>Noticias</h1>
            <Carusel />
        </div>

    )

}

export default News;