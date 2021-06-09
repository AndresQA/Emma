import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../App/AppContext';
import Onboarding from '../Onboarding/Onboarding';

const Health = () => {

    const { useFaq, useBoard, useShowBoard } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [stepBoard, setStepBoard] = useBoard();
    const [onShowBoard, setShowBoard] = useShowBoard();

    useEffect(() => {
        Step("Notification");
        setStepBoard(2)
    }, [])

    return (
        <div >

            {onShowBoard ? <Onboarding /> : <></>}

            <h1>Salud</h1>
            <div className="news__bannerCards">
                <Link to="/inicio/Salud/Urgencia">
                    <div className="news__bannerItems">
                        <h4>Urgencia Medica</h4>
                        <img src="/icons/salud.png" className="news__bannerItems__icon" alt="" />
                    </div>
                </Link>
                <div className="news__bannerItems">
                    <h4>Afiliación a salud</h4>
                    <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                </div>
            </div>

        </div>

    )

}

export default Health;