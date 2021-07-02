import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './PanelInformation.scss'

const Step = () => {
    const { useDataForms, usePageRouteMig, useCompleted, useDownloaded } = AppContext.Consumer();

    const [data, setData] = useDataForms();

    const [onCompleted, setCompleted] = useCompleted();

    const [onDownloaded, setDownloaded] = useDownloaded();

    const [pageRouteMig, setPageRouteMig] = usePageRouteMig();

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const props = Object.entries(data);
        var counter = 0;
        props.forEach((prop) => {
            const [key, value] = prop;
            if (value != "" && value != undefined) {
                counter++;
            }
        })
        const progreso = counter / props.length * 100;
        setProgress(progreso);
        console.log(props);
    }, [data])




    return (
        <div className="Body__faq">
            <div className="index__contentRightMenu">

                <div className="titleStep">
                    <div className="index__contentRightMenu__card">
                        <h3>Solicitud de refugio</h3>
                    </div>

                    <div className="index__contentRightMenu__boxSteps">

                        <div className="index__contentRightMenu__boxProgessBar">
                            <progress min="0" max="100" value={onCompleted ? 100 : progress} className="progressBar"></progress>
                            <p>{onCompleted ? 100 : Math.round(progress, 0)}% completado</p>
                        </div>
                        <div className="infoSteps">
                            <div className="circle" style={{ borderColor: pageRouteMig >= 2 ? "blueviolet" : "" }}></div>
                            <p style={{ color: pageRouteMig >= 2 ? "blueviolet" : "" }}>Datos personales</p>

                        </div>

                        <div className="infoSteps">
                            <div className="circle" style={{ borderColor: pageRouteMig >= 3 ? "blueviolet" : "" }}></div>
                            <p style={{ color: pageRouteMig >= 3 ? "blueviolet" : "" }}>Datos beneficiarios</p>

                        </div>

                        <div className="infoSteps">
                            <div className="circle" style={{ borderColor: pageRouteMig >= 4 ? "blueviolet" : "" }}></div>
                            <p style={{ color: pageRouteMig >= 4 ? "blueviolet" : "" }}>Anexos</p>

                        </div>

                        <div className="infoSteps">
                            <div className="circle" style={{ borderColor: onDownloaded ? "blueviolet" : "" }}></div>
                            <p style={{ color: onDownloaded ? "blueviolet" : "" }}>Descargar solicitud</p>

                        </div>

                        <div className="infoSteps">
                            <div className="circle"></div>
                            <p>Enviar solicitud</p>

                        </div>


                    </div>

                </div>


            </div>
        </div>

    )

}

export default Step;