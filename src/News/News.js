import React, { useEffect } from 'react';
import Carusel from '../components/Carousel/Carousel';
import AppContext from '../App/AppContext';
import './News.scss'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Onboarding from '../components/Onboarding/Onboarding';
import RLink from '../constants/Routes/RLink';
const News = () => {

    const { useFaq, useBoard, useShowBoard, usePathname } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [stepBoard, setStepBoard] = useBoard();
    const [onShowBoard, setShowBoard] = useShowBoard();
    const [pathName, setPathName] = usePathname()

    useEffect(() => {
        Step("Notification");
        setStepBoard(0);
    }, [])

    return (
        <div className="news">

            {onShowBoard ? <Onboarding /> : <></>}

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
                    <div className="news__bannerItems" onClick={() => { setPathName(RLink.SALUD) }}>
                        <h4>Urgencia médica</h4>
                        <img src="/icons/salud.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <Link to="/inicio/Ruta_Migratoria/formulario">
                    <div className="news__bannerItems" onClick={() => { setPathName(RLink.MIGRACION) }}>
                        <h4>Solicitud de refugio</h4>
                        <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <Link to="/inicio/Ruta_Migratoria/RenovarPEP">
                    <div className="news__bannerItems" onClick={() => { setPathName(RLink.MIGRACION) }}>
                        <h4>Renovación PEP</h4>
                        <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <Link to="/inicio/Salud/afiliacion" onClick={() => { setPathName(RLink.SALUD) }}>
                    <div className="news__bannerItems">
                        <h4>Afiliación a la salud</h4>
                        <img src="/icons/salud.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <Link to="/inicio/Educacion/Homologacion_Titulos" onClick={() => { setPathName(RLink.EDUCACION) }}>
                    <div className="news__bannerItems">
                        <h4>Homologación de títulos</h4>
                        <img src="/icons/educacion.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <Link to="/inicio/Educacion/basica" onClick={() => { setPathName(RLink.EDUCACION) }}>
                    <div className="news__bannerItems">
                        <h4>Educación para menores</h4>
                        <img src="/icons/educacion.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>

            </div>



            <h1>Noticias</h1>
            <Carusel />
        </div>

    )

}

export default News;