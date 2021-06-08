import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import AppContext from '../../App/AppContext';
import './routeMig.scss'

const RouteMig = () => {

    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])


    return (
        <div className="routeMig">

            <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close">
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding2.png" alt="" />
                    <h2>Tu ruta</h2>
                    <p>Aquí encontraras los diferentes tramites en el caso de que seas un migrante irregular o regular.</p>
                    <Button variant="contained" color="primary" className="next__style">
                    Siguiente
                    </Button>

                </div>
            </div>


            <h1>Regulariza tu situación</h1>
            <div className="news__bannerCards">
                <Link to="/inicio/Ruta_Migratoria/formulario">
                    <div className="news__bannerItems">
                        <h4>Solicitud de Refugio</h4>
                    </div>
                </Link>

            </div>

            <h1>Tramites para migrantes regulares</h1>
            <div className="news__bannerCards">
                <div className="news__bannerItems">
                    <h4>Cédula de extranjería</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Salvoconducto</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>PEP - Permiso de permanencia</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Registro extranjero menor de 7 años</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Renovación PEP</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Pasaporte</h4>
                </div>
            </div>



        </div>

    )

}

export default RouteMig;