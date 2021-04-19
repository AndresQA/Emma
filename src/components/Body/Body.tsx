
import React, { ReactChild, useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./Body.scss";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import RLink from "../../constants/Routes/RLink";
import AppContext from "../../App/AppContext";


const Body = (props: { children: ReactChild[] | ReactChild }) => {



    return <div className="Body">
        <Sidebar />
        <Contenido {...props} />
        <Faq />
    </div>
}

export default Body;


const Contenido = ({ children }: { children: ReactChild[] | ReactChild }) => {
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

            <div className={"index__contentLeftMenu__item" + (pathName.includes("inicio") && pathName.length <= 8 ? " menuselected" : "")}>
                <Link to={RLink.INICIO} onClick={() => { setPathName(RLink.INICIO) }}>
                    <div>
                        <HomeIcon style={{ color: "#ffffffc7" }}></HomeIcon>
                        <p>Inicio</p>
                    </div>
                </Link>
            </div>

            <div className={"index__contentLeftMenu__item" + (pathName.includes("Ruta_Migratoria") ? " menuselected" : "")}>
                <Link to="/inicio/Ruta_Migratoria" onClick={() => { setPathName(RLink.MIGRACION) }}>
                    <div>
                        <FlagIcon style={{ color: "#ffffffc7" }}></FlagIcon>
                        <p>Tu Ruta</p>
                    </div>
                </Link>
            </div>

            <div className={"index__contentLeftMenu__item" + (pathName.includes("Salud") ? " menuselected" : "")}>
                <Link to={RLink.SALUD} onClick={() => { setPathName(RLink.SALUD) }}>
                    <div>
                        <LocalHospitalIcon style={{ color: "#ffffffc7" }}></LocalHospitalIcon>
                        <p>Salud</p>
                    </div>
                </Link>
            </div>

            <div className={"index__contentLeftMenu__item" + (pathName.includes("Educacion") ? " menuselected" : "")}>
                <Link to={RLink.EDUCACION} onClick={() => { setPathName(RLink.EDUCACION) }}>
                    <div>
                        <img src="/icons/educacion.png" alt="" className="index__menuIcons"></img>
                        <p>Educación</p>
                    </div>
                </Link>
            </div>

            <div className={"index__contentLeftMenu__item" + (pathName.includes("Espacio_Juridico") ? " menuselected" : "")}>
                <Link to={RLink.JURIDICO} onClick={() => { setPathName(RLink.JURIDICO) }}>
                    <div>
                        <img src="/icons/espajuri.png" alt="" className="index__menuIcons"></img>
                        <p>Espacio jurídico</p>
                    </div>
                </Link>
            </div>

            <div className={"index__contentLeftMenu__item" + (pathName.includes("Comunidad") ? " menuselected" : "")}>
                <Link to={RLink.COMUNIDAD} onClick={() => { setPathName(RLink.COMUNIDAD) }}>
                    <div>
                        <img src="/icons/comunidad.png" alt="" className="index__menuIcons"></img>
                        <p>Comunidad</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}


const Faq = () => {
    return <div className="Body__faq">
        <div className="index__contentRightMenu">

            <div >
                <div className="index__contentRightMenu__card">
                    <img src="/images/cardname.png" alt="" className="index__contentRightMenu__cardImg"></img>
                    <h2>Hola Laura</h2>
                </div>

                <div className="index__contentRightMenu__boxfaq">
                    <div className="index__contentRightMenu__faq">
                        <p>Se me venció el PEP</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>
                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>Se me venció el salvoconducto</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>Necesito ir a un hospital</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>¿Dónde matricular a mis hijos?</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>Como afiliarme al sistema de salud</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                </div>

            </div>


        </div>
    </div>
}