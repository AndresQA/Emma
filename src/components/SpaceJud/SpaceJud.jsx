import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../App/AppContext';
import Onboarding from '../Onboarding/Onboarding';
import "./SpaceJud.scss"

const SpaceJud = () => {
    const { useFaq, useBoard, useShowBoard } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [stepBoard, setStepBoard] = useBoard();
    const [onShowBoard, setShowBoard] = useShowBoard();

    useEffect(() => {
        Step("Notification");
        setStepBoard(4)
    }, [])


    return (
        <div className="comunity">

            {onShowBoard ? <Onboarding /> : <></>}

            <h1>Espacio Jurídico</h1>
            <div className="news__bannerCards">
                <Link to="/inicio/Espacio_Juridico/lugares">
                    <div className="news__bannerItems">
                        <h4>Puntos de atención al migrante</h4>
                    </div>
                </Link>
                <Link to="/inicio/Espacio_Juridico/glosario">
                    <div className="news__bannerItems">
                        <h4>Diccionario del migrante</h4>
                    </div>
                </Link>
                <Link to="/inicio/Espacio_Juridico/aprende">
                    <div className="news__bannerItems">
                        <h4>Infórmate en derechos</h4>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default SpaceJud;
