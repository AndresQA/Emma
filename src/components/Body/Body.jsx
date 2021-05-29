
import React, { ReactChild, useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import RLink from "../../constants/Routes/RLink";
import AppContext from "../../App/AppContext";
import User from "../../constants/Firebase/User";
import PanelInformation from "../PanelInformation/PanelInformation";

import "./Body.scss";

const Body = (props) => {

    const { useLogin, useStyle } = AppContext.Consumer();
    const [isLogin] = useLogin();
    const [style] = useStyle();

    return <div className={"Body" + (isLogin === false ? " login" : "")}>
        {isLogin === true ? <Sidebar /> : <></>}
        <Contenido {...props} />
        {isLogin === true ? <PanelInformation /> : <></>}

    </div>
}

export default Body;


const Contenido = ({ children }) => {
    return <div className="Body__content">
        {Array.isArray(children) ? children.map(c => { return c }) : children}
    </div>
}


const Sidebar = () => {

    const { usePathname } = AppContext.Consumer();


    const history = useHistory();

    const [pathName, setPathName] = usePathname()


    return <div className="Body__sidebar">
        <div className="index__contentLeftMenu">

            <Link to={RLink.INICIO} onClick={() => { setPathName(RLink.INICIO) }}>
                <div className={"index__contentLeftMenu__item" + (pathName.includes("inicio") && pathName.length <= 8 ? " menuselected" : "")}>
                    <div>
                        <HomeIcon style={{ color: "#ffffffc7" }}></HomeIcon>
                        <p>Inicio</p>
                    </div>
                </div>
            </Link>

            <Link to="/inicio/Ruta_Migratoria" onClick={() => { setPathName(RLink.MIGRACION) }}>
                <div className={"index__contentLeftMenu__item" + (pathName.includes("Ruta_Migratoria") ? " menuselected" : "")}>
                    <div>
                        <FlagIcon style={{ color: "#ffffffc7" }}></FlagIcon>
                        <p>Tu Ruta</p>
                    </div>
                </div>
            </Link>

            <Link to={RLink.SALUD} onClick={() => { setPathName(RLink.SALUD) }}>
                <div className={"index__contentLeftMenu__item" + (pathName.includes("Salud") ? " menuselected" : "")}>
                    <div>
                        <LocalHospitalIcon style={{ color: "#ffffffc7" }}></LocalHospitalIcon>
                        <p>Salud</p>
                    </div>
                </div>
            </Link>

            <Link to={RLink.EDUCACION} onClick={() => { setPathName(RLink.EDUCACION) }}>
                <div className={"index__contentLeftMenu__item" + (pathName.includes("Educacion") ? " menuselected" : "")}>
                    <div>
                        <img src="/icons/educacion.png" alt="" className="index__menuIcons"></img>
                        <p>Educación</p>
                    </div>
                </div>
            </Link>

            <Link to={RLink.JURIDICO} onClick={() => { setPathName(RLink.JURIDICO) }}>
                <div className={"index__contentLeftMenu__item" + (pathName.includes("Espacio_Juridico") ? " menuselected" : "")}>
                    <div>
                        <img src="/icons/espajuri.png" alt="" className="index__menuIcons"></img>
                        <p>Espacio jurídico</p>
                    </div>
                </div>
            </Link>

            <Link to={RLink.COMUNIDAD} onClick={() => { setPathName(RLink.COMUNIDAD) }}>
                <div className={"index__contentLeftMenu__item" + (pathName.includes("Comunidad") ? " menuselected" : "")}>
                    <div>
                        <img src="/icons/comunidad.png" alt="" className="index__menuIcons"></img>
                        <p>Comunidad</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
}

