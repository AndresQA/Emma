import React, { useEffect } from 'react';
import Faq from './Faq';
import Notification from './Notification';
import Step from './Step';

import './PanelInformation.scss'
import AppContext from '../../App/AppContext';

const PanelInformation = () => {

    const { useFaq } = AppContext.Consumer();

    const [type, setType] = useFaq();

    switch (type) {
        case "Faq":
            return <Faq />
            break;
        case "Notification":
            return <Notification />
            break;
        case "Step":
            return <Step />
            break;
    }
    return <div></div>
}

export default PanelInformation;