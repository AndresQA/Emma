import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import AppContext from '../../App/AppContext';
import Onboarding from '../Onboarding/Onboarding';
import './routeMig.scss'

const RouteMig = () => {

    const { useFaq, useBoard, useShowBoard } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [stepBoard, setStepBoard] = useBoard();
    const [onShowBoard, setShowBoard] = useShowBoard();

    useEffect(() => {
        Step("Notification");
        setStepBoard(1);
    }, [])


    return (
        <div className="routeMig">

            {onShowBoard ? <Onboarding /> : <></>}

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
                <Link to="/inicio/Ruta_Migratoria/Cedula_de_extranjeria">
                    <div className="news__bannerItems">
                        <h4>Cédula de extranjería</h4>
                    </div>
                </Link>
                <div className="news__bannerItems">
                    <h4>Salvoconducto</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>PEP - Permiso de permanencia</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Registro extranjero menor de 7 años</h4>
                </div>
                <Link to="/inicio/Ruta_Migratoria/RenovarPEP">
                    <div className="news__bannerItems">
                        <h4>Renovación PEP</h4>
                    </div>
                </Link>
                <div className="news__bannerItems">
                    <h4>Pasaporte</h4>
                </div>
            </div>



        </div>

    )

}

export default RouteMig;