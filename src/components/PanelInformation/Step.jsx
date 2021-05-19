import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './PanelInformation.scss'

const Step = () => {
    const { useDataForms, usePageRouteMig } = AppContext.Consumer();

    const [data, setData] = useDataForms();

    const [pageRouteMig, setPageRouteMig] = usePageRouteMig();

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const props = Object.entries(data);
        var counter = 0;
        props.forEach((prop)=>{
            const [key, value] = prop;
            if(value != "" && value != undefined){
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
                            <progress min="0" max="100" value={progress} className="progressBar"></progress>
                            <p>{Math.round(progress, 0)}% completado</p>
                        </div>
                        <div className="infoSteps">
                            <div className="circle"></div>
                            <p style={{color : pageRouteMig == 2 ? "blueviolet" : ""}}>Datos Personales</p>

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