import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../App/AppContext';
import "./SpaceJud.scss"

const SpaceJud = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])


    return (
        <div className="comunity">


            <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close">
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding4.png" alt="" />
                    <h2>Tu ruta</h2>
                    <p>Aquí encontraras los diferentes tramites en el caso de que seas un migrante irregular o regular.</p>
                    <Button variant="contained" color="primary" className="next__style">
                        Siguiente
                    </Button>

                </div>
            </div>






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
