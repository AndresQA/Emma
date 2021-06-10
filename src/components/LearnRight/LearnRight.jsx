import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './LearnRight.scss'

const LearnRight = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])



    return (
        <div className="learnRight">
            <h1>Infórmate en derechos</h1>
            <div className="news__bannerCards">
                <div className="news__bannerItemsContainer ">
                    <img src="/images/salvoconducto.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>Renovación virtual de salvoconducto</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer ">
                    <img src="/images/salvoconducto2.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>Solicitud de refugio</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer ">
                    <img src="/images/salvoconducto3.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>¿Qué es ACNUR?</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer ">
                    <img src="/images/salvoconducto4.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>PEPFF</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer ">
                    <img src="/images/salvoconducto5.png" alt="" />
                    <div className="news__bannerItems bordercardsitems">
                        <h4>Renovación virtual de salvoconducto</h4>
                    </div>
                </div>
                <div className="news__bannerItemsContainer ">
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
