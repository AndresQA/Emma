import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './FormDescription.scss'

const FormDescription = () => {
    const { useFaq, usePageRouteMig } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [showBoarding, setShowBoarding] = useState(false);
    const [pageRouteMig, setPageRouteMig] = usePageRouteMig();

    useEffect(() => {
        Step("Notification");
    }, [type == 0])

    const handleContinue = () =>{
        setShowBoarding(false)
        setPageRouteMig(1)
        
    }


    return (
        <div className="formDescription">
            {showBoarding ?  <div className="boarding">
                <div className="boarding__Container">
                    <img src="/images/boarding6.png" alt="" />
                    <h2>¡Hagamos juntos la solicitud de refugio!</h2>
                    <p>A continuación, te realizare una encuesta preguntándote diferentes datos personales para completa tu solicitud de refugio. 
                        <strong> ESTOS DATOS NO SE ALMACENARAN Y SOLO SE UTILIZARAN PARA REALIZAR LA SOLICITUD</strong>. </p>
                    <Button className="formDescription__info__btn" key="2" variant="contained" color="primary" onClick={handleContinue}>
                        Entendido
                     </Button>
                </div>
            </div> : <></>}

           


            <div className="formDescription__info">
                <div>
                    <h3>¿Eres un refugiado?</h3>
                    <p>Un refugiado también es una persona que se ha visto obligada a salir de su país porque su vida, seguridad o libertad han sido amenazadas por violencia generalizada, agresión extranjera, conflictos internos, violación masiva de los derechos humanos u otras circunstancias que han perturbado gravemente el orden público.
            <br />
            Un refugiado normalmente ingreso al país por medio de entradas fronterizas ilegales, sin permisos o pasaporte vigente. </p>
                    <Button className="formDescription__info__btn" key="1" variant="contained" color="primary" onClick={()=> setShowBoarding(true)}>
                        Soy refugiado
                     </Button>
                </div>
                <img className="formDescription__info__img" src="/images/refugiado.png" alt="" />
            </div>
        </div>
    )
}

export default FormDescription;
