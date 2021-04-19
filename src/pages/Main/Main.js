import React, { useEffect, useState } from 'react';
import News from '../../News/News';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Health from '../../components/Health/Health';
import Education from '../../components/Education/Education';
import SpaceJud from '../../components/SpaceJud/SpaceJud';
import Comunity from '../../components/Comunity/Comunity';
import RouteMig from '../../components/RouteMig/RouteMig';
import firebase from '../../constants/Firebase/Firebase';
import 'firebase/auth';

import "./Main.scss";


const Main = (props) => {
    const { setIsLogin } = props;

    const history = useHistory();
/*
    const [pathName, setPathName] = useState(window.location.pathname);

    useEffect(()=>{
        if(window.location.pathname !== pathName){
            setPathName(window.location.pathname);
        }
    }, [window.location.pathname])
*/

    var handleLogOut = () => {
        firebase.auth().signOut();
    };

    return (

        <div className="index">
            <div className="index__content">
                

                <div className="index__contentNews">
                    <Route path="/inicio" exact component={News} />
                    <Route path="/inicio/Ruta_Migratoria" component={RouteMig} />
                    <Route path="/inicio/Salud" component={Health} />
                    <Route path="/inicio/Educacion" component={Education} />
                    <Route path="/inicio/Espacio_Juridico" component={SpaceJud} />
                    <Route path="/inicio/Comunidad" component={Comunity} />


                </div>
            </div>



        </div>

    )

}

export default Main;