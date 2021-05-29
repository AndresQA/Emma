import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.scss'
import AppContext from '../../App/AppContext';

const Education = () => {

    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])

    return (
        <div className="education">
            <h1>Eduación</h1>
            <div className="news__bannerCards">
                <Link to="/inicio/Educacion/basica">
                    <div className="news__bannerItems">
                        <h4>Educación Básica</h4>
                    </div>
                </Link>
                
                    <div className="news__bannerItems">
                        <h4>Educación Secundaria</h4>
                    </div>
                    <div className="news__bannerItems">
                        <h4>Educación Universitaria</h4>
                    </div>
                    <div className="news__bannerItems">
                        <h4>Homologación Titulos</h4>
                    </div>
                    <div className="news__bannerItems">
                        <h4>SENA</h4>
                    </div>
                    <div className="news__bannerItems">
                        <h4>ICFES</h4>
                    </div>
            </div>
        </div>

    )

}

export default Education;