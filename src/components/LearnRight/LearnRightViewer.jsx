import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './LearnRight.scss'

const LearnRightViewer = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])



    return (
        <div className="learnRightViewer">
            
        </div>
    )
}

export default LearnRightViewer;
