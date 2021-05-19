import React, { useEffect } from 'react';
import AppContext from '../../App/AppContext';

const SpaceJud = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])

    return (
        <div >
            <h1>Tramites</h1>
            <div className="news__bannerCards">
                <div className="news__bannerItems">
                    <h4>Urgencia Medica</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Solicitud de Refugio</h4>
                </div>
                <div className="news__bannerItems">
                    <h4>Renovación PEP</h4>
                </div>
            </div>
        </div>

    )

}

export default SpaceJud;