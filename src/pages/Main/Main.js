import React, { useEffect, useState } from 'react';
import News from '../../News/News';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import Health from '../../components/Health/Health';
import Education from '../../components/Education/Education';
import SpaceJud from '../../components/SpaceJud/SpaceJud';
import Comunity from '../../components/Comunity/Comunity';
import RouteMig from '../../components/RouteMig/RouteMig';
import InfoMigMap from '../../components/InfoMigMap/InfoMigMap'
import FormRouteMig from '../../components/FormRouteMig/FormRouteMig';
import BasicEdu from '../../components/Education/Services/BasicEdu'
import AppContext from '../../App/AppContext';
import Chat from '../Chat/Chat';
import Glosary from '../../components/Glosary/Glosary';
import LearnRight from '../../components/LearnRight/LearnRight';
import HealthMap from '../../components/HealthMap/HealthMap';
import RenovPEP from '../../components/RouteMig/Services/RenovPEP';
import JoinHealth from '../../components/Health/Services/JoinHealth';
import Convalidation from '../../components/Education/Services/Convalidation';
import IdMig from '../../components/RouteMig/Services/IdMig';
import 'firebase/auth';
import "./Main.scss";



const Main = () => {

    const { useLogin } = AppContext.Consumer();
    const [isLoging, setIsLogin] = useLogin();


    return (

        isLoging === true ? <div className="index">


            <Route path="/inicio/chat" exact component={Chat} />
            <Route path="/inicio" exact component={News} />
            <Route path="/inicio/Ruta_Migratoria" exact component={RouteMig} />
            <Route path="/inicio/Salud" exact component={Health} />
            <Route path="/inicio/Educacion" exact component={Education} />
            <Route path="/inicio/Espacio_Juridico" exact component={SpaceJud} />
            <Route path="/inicio/Comunidad" exact component={Comunity} />
            <Route path="/inicio/Espacio_Juridico/lugares" exact component={InfoMigMap} />
            <Route path="/inicio/Espacio_Juridico/glosario" exact component={Glosary} />
            <Route path="/inicio/Espacio_Juridico/aprende" exact component={LearnRight} />
            <Route path="/inicio/Ruta_Migratoria/formulario" exact component={FormRouteMig} />
            <Route path="/inicio/Educacion/basica" exact component={BasicEdu} />
            <Route path="/inicio/Salud/Urgencia" exact component={HealthMap} />
            <Route path="/inicio/Ruta_Migratoria/RenovarPEP" exact component={RenovPEP} />
            <Route path="/inicio/Salud/afiliacion" exact component={JoinHealth} />
            <Route path="/inicio/Educacion/Homologacion_Titulos" exact component={Convalidation} />
            <Route path="/inicio/Ruta_Migratoria/Cedula_de_extranjeria" exact component={IdMig} />

        </div>
            : <Redirect to="/" />

    )

}

export default Main;