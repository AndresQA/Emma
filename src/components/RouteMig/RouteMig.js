import React, { useEffect } from 'react';
import './routeMig.scss'
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import PDF from '../PDF';

const RouteMig = () => {



    return (
        <div className="routeMig">
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

            {/*<PDF/>*/}


        </div>

    )

}

export default RouteMig;