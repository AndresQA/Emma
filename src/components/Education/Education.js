import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.scss'
import AppContext from '../../App/AppContext';
import { Button } from '@material-ui/core';
import Onboarding from '../Onboarding/Onboarding';

const Education = () => {

    const { useFaq, useBoard, useShowBoard } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [stepBoard, setStepBoard] = useBoard();
    const [onShowBoard, setShowBoard] = useShowBoard();

    useEffect(() => {
        Step("Notification");
        setStepBoard(3);
    }, [])

    return (
        <div className="education">

            {onShowBoard ? <Onboarding /> : <></>}

            <h1>Eduación</h1>
            <div className="news__bannerCards">
                <Link to="/inicio/Educacion/basica">
                    <div className="news__bannerItems">
                        <h4>Educación para menores</h4>
                    </div>
                </Link>
                <Link to="/inicio/Educacion/Homologacion_Titulos">
                    <div className="news__bannerItems">
                        <h4>Homologación titulos</h4>
                    </div>
                </Link>
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