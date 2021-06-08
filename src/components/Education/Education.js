import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.scss'
import AppContext from '../../App/AppContext';
import { Button } from '@material-ui/core';

const Education = () => {

    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])

    return (
        <div className="education">




            <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close">
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding6.png" alt="" />
                    <h2>Tu ruta</h2>
                    <p>Aquí encontraras los diferentes tramites en el caso de que seas un migrante irregular o regular.</p>
                    <Button variant="contained" color="primary" className="next__style">
                        Siguiente
                    </Button>

                </div>
            </div>






            <h1>Eduación</h1>
            <div className="news__bannerCards">
                <Link to="/inicio/Educacion/basica">
                    <div className="news__bannerItems">
                        <h4>Educación Básica</h4>
                    </div>
                </Link>

                <div className="news__bannerItems">
                    <h4>Educación Secundaria</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Educación Universitaria</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Homologación Titulos</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>SENA</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>ICFES</h4>
                </div>
            </div>
        </div>

    )

}

export default Education;