import React, { useEffect, useState } from 'react';
import News from '../../News/News';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import Health from '../../components/Health/Health';
import Education from '../../components/Education/Education';
import SpaceJud from '../../components/SpaceJud/SpaceJud';
import Comunity from '../../components/Comunity/Comunity';
import RouteMig from '../../components/RouteMig/RouteMig';
import FormRouteMig from '../../components/FormRouteMig/FormRouteMig';
import 'firebase/auth';
import "./Main.scss";


const Main = (props) => {



    return (

        <div className="index">
            <Route path="/inicio" exact component={News} />
            <Route path="/inicio/Ruta_Migratoria" exact component={RouteMig} />
            <Route path="/inicio/Salud" exact component={Health} />
            <Route path="/inicio/Educacion" exact component={Education} />
            <Route path="/inicio/Espacio_Juridico" exact component={SpaceJud} />
            <Route path="/inicio/Comunidad" exact component={Comunity} />
            <Route path="/inicio/Ruta_Migratoria/formulario" exact component={FormRouteMig} />
        </div>

    )

}

export default Main;