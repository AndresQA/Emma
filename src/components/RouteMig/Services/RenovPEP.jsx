import React, { useEffect, useState } from 'react';

const RenovPEP = () => {


    return (
        <div className="renovPep">
            <h1>Renovación PEP</h1>
            <p>Actualmente debes hacer el tramite directamente en la web de migración Colombia. 
                <a className="renovPep__link" href="https://www.migracioncolombia.gov.co/venezuela/pep/renovacion-pep-1840" target="_blank"> <strong>Haz Click Aqui </strong> </a></p>
            <iframe src="https://www.migracioncolombia.gov.co/venezuela/pep/renovacion-pep-1840" width="100%" height="0%" frameborder="0"></iframe>
        </div>
    )
}

export default RenovPEP;
