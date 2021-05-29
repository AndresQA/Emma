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
            </div>
        </div>
    )
}

export default LearnRight;
