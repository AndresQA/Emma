import React, { useEffect } from 'react';
import './Onboarding.scss'
import AppContext from '../../App/AppContext';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RLink from '../../constants/Routes/RLink';

const Onboarding = () => {

    const { useBoard, usePathname, useShowBoard } = AppContext.Consumer();

    const [stepBoard, setStepBoard] = useBoard();
    const [pathName, setPathName] = usePathname()
    const [onShowBoard, setShowBoard] = useShowBoard();


    const handlefinish = () => {
        const board = document.querySelectorAll(".boarding");
        board.style.display = "none";
    }


    switch (stepBoard) {
        case 0:
            return <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close" onClick={()=> setShowBoard(false)}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding1.png" alt="" />
                    <h2>Inicio</h2>
                    <p>Hola, en mi plataforma principal encontraras los servicios mas solicitados por todos, además recibirás notificaciones y las ultimas noticias. También puedes hablar conmigo mediante mi chat virtual.  </p>
                    <Link to="/inicio/Ruta_Migratoria" onClick={() => { setPathName(RLink.MIGRACION) }}>
                        <Button variant="contained" color="primary" className="next__style">
                            Siguiente
                    </Button>
                    </Link>
                </div>
            </div>
            break;
        case 1:
            return <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close" onClick={()=> setShowBoard(false)}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding2.png" alt="" />
                    <h2>Tu ruta</h2>
                    <p>Aquí encontraras los diferentes tramites en el caso de que seas un migrante irregular o regular.</p>
                    <Link to="/inicio/salud" onClick={() => { setPathName(RLink.SALUD) }}>
                        <Button variant="contained" color="primary" className="next__style">
                            Siguiente
                    </Button>
                    </Link>
                </div>
            </div>
            break;
        case 2:
            return <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close" onClick={()=> setShowBoard(false)}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding3.png" alt="" />
                    <h2>Salud</h2>
                    <p>¿Tienes alguna urgencia? ¿ya te afiliaste al sistema de salud colombiano o al menos sabes cómo funciona? Aquí te indicare las instituciones a las cuales acudir. </p>
                    <Link to="/inicio/educacion" onClick={() => { setPathName(RLink.EDUCACION) }}>
                        <Button variant="contained" color="primary" className="next__style">
                            Siguiente
                    </Button>
                    </Link>
                </div>
            </div>
            break;
        case 3:
            return <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close" onClick={()=> setShowBoard(false)}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding4.png" alt="" />
                    <h2>Educación</h2>
                    <p>Aquí te explicare como ingresar a la educación en Colombia, desde la educación básica primaria, pasando por la media, hasta educación universitaria.</p>
                    <Link to="/inicio/Espacio_Juridico" onClick={() => { setPathName(RLink.JURIDICO) }}>
                        <Button variant="contained" color="primary" className="next__style">
                            Siguiente
                    </Button>
                    </Link>
                </div>
            </div>
            break;
        case 4:
            return <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close" onClick={()=> setShowBoard(false)}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding5.png" alt="" />
                    <h2>Espacio Jurídico</h2>
                    <p>Es importante que conozcas tus derechos, este espacio es exclusivamente dedicado a ti, te orientamos en trámites y procesos.</p>
                    <Link to="/inicio/Comunidad" onClick={() => { setPathName(RLink.COMUNIDAD) }}>
                        <Button variant="contained" color="primary" className="next__style">
                            Siguiente
                    </Button>
                    </Link>
                </div>
            </div>
            break;
        case 5:
            return <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close" onClick={()=> setShowBoard(false)}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding6.png" alt="" />
                    <h2>Comunidad </h2>
                    <p>Es importante conocer a tu comunidad. Aquí encontraras un mapa con diferentes grupos de apoyo y asistencia a la población migrante para que te sientas siempre acompañado. </p>
                    <Button variant="contained" color="primary" className="next__style"  onClick={()=>setStepBoard(6)}>
                        Siguiente
                    </Button>
                </div>
            </div>
            break;

        case 6:
            return <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close" onClick={()=> setShowBoard(false)}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding3.png" alt="" />
                    <h2>Bienvenidos y bienvenidas</h2>
                    <p>Por último, te doy la bienvenida, espero ayudarte a solucionar tus problemas migratorios.</p>
                    <Link to="/inicio" onClick={() => { setPathName(RLink.INICIO, setShowBoard(false))}}>
                        <Button variant="contained" color="primary" className="next__style">
                            Siguiente
                    </Button>
                    </Link>
                </div>
            </div>
            break;
    }
    return <div></div>
}

export default Onboarding;