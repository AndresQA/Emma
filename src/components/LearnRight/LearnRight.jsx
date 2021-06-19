import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import LearnRightViewer from './LearnRightViewer'
import './LearnRight.scss'

const LearnRight = () => {
    const { useFaq, useShowInfoPic } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [onShowInfoPic, setShowInfoPic] = useShowInfoPic();

    useEffect(() => {
        Step("Notification");
    }, [])



    return (
        <div className="learnRight">
            <h1>Infórmate en derechos</h1>
            {onShowInfoPic != "" ?<LearnRightViewer/> : <></>}
            
            <div className="news__bannerCards">
                <div className="news__bannerItemsContainer " onClick={()=> setShowInfoPic("renovacion_de_salvoconducto_en_pandemia")}>
                    <img src="/images/salvoconducto.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>Renovación virtual de salvoconducto</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer " onClick={()=> setShowInfoPic("solicitud_de_refugio")}>
                    <img src="/images/salvoconducto2.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>Solicitud de refugio</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer " onClick={()=> setShowInfoPic("Como solicitar refugio en Colombia")}>
                    <img src="/images/salvoconducto3.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>¿Qué es ACNUR?</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer " onClick={()=> setShowInfoPic("Como solicito mi PEPFF")}>
                    <img src="/images/salvoconducto4.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>PEPFF</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer " onClick={()=> setShowInfoPic("R2061-05")}>
                    <img src="/images/salvoconducto5.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>Renovación virtual de salvoconducto</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer " onClick={()=> setShowInfoPic("resolucion 2223 2020 Apertura de tramites Migracion")}>
                    <img src="/images/salvoconducto6.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>Afiliación a salud</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnRight;
