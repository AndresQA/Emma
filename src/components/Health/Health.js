import React from 'react';

const Health = () => {
    return(
        <div >
            <h1>Tramites</h1>
            <div className="news__bannerCards">
                <div className="news__bannerItems">
                    <h4>Urgencia Medica</h4>
                    <img src="/icons/salud.png" className="news__bannerItems__icon" alt="" />
                </div>
                <div className="news__bannerItems">
                    <h4>Solicitud de Refugio</h4>
                    <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                </div>
                <div className="news__bannerItems">
                    <h4>Renovación PEP</h4>
                    <img src="/icons/flag.png" className="news__bannerItems__icon" alt="" />
                </div>
            </div>

        </div>

    )

}

export default Health;