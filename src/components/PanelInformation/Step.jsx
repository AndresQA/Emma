import React, { useEffect } from 'react';

const Step = () => {



    return (
        <div className="Body__faq">
            <div className="index__contentRightMenu">

                <div className="titleStep">
                    <div className="index__contentRightMenu__card">
                        <h3>Solicitud de refugio</h3>
                    </div>

                    <div className="index__contentRightMenu__boxSteps">

                        <div className="index__contentRightMenu__boxProgessBar">
                            <div className="progressBarColor"></div>
                            <div className="progressBarGrey"></div>
                            <p>50% completado</p>
                        </div>
                        <div className="infoSteps">
                            <div className="circle"></div>
                            <p>Datos Personales</p>

                        </div>

                        <div className="infoSteps">
                            <div className="circle"></div>
                            <p>Datos Beneficiarios</p>

                        </div>

                        <div className="infoSteps">
                            <div className="circle"></div>
                            <p>Anexos</p>

                        </div>

                        <div className="infoSteps">
                            <div className="circle"></div>
                            <p>Enviar Solicitud</p>

                        </div>


                    </div>

                </div>


            </div>
        </div>

    )

}

export default Step;