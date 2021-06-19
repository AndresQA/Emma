import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './LearnRight.scss'

const LearnRightViewer = () => {
    const { useFaq, useShowInfoPic } = AppContext.Consumer();
    const [onShowInfoPic, setShowInfoPic] = useShowInfoPic();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])



    return (
        <div className="learnRightViewer" onClick={()=> setShowInfoPic("")}>

            <div className="learnRightViewer__Container">
                <div className="boarding__Close">
                    <img src="/icons/close.svg" alt="" />
                </div>
                <img src={"/images/infografias/"+onShowInfoPic+".jpg"} alt="" />

            </div>

        </div>
    )
}

export default LearnRightViewer;
