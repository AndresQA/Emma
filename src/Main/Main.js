import React, { useEffect, useState } from 'react';
import News from '../News/News';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Health from '../Health/Health';
import Education from '../Education/Education';
import SpaceJud from '../SpaceJud/SpaceJud';
import Comunity from '../Comunity/Comunity';
import RouteMig from '../RouteMig/RouteMig';
import firebase from '../Firebase/Firebase';
import 'firebase/auth';


const Main = (props) => {
    const { setIsLogin } = props;

    const history = useHistory();

    const [pathName, setPathName] = useState(window.location.pathname);

    useEffect(()=>{
        if(window.location.pathname !== pathName){
            setPathName(window.location.pathname);
        }
    }, [window.location.pathname])


    var handleLogOut = () => {
        firebase.auth().signOut();
    };

    return (

        <div className="index">

            <div className="index__navbar">
                <img src="/images/logo.png" alt="" className="logo"></img>
              

            </div>
            <div className="index__content">
                <div className="index__contentLeftMenu">

                    <div className={"index__contentLeftMenu__item" + (pathName.includes("inicio") && pathName.length <= 8 ? " menuselected" : "")}>
                        <Link to="/inicio">
                            <div>
                                <HomeIcon style={{ color: "#ffffffc7" }}></HomeIcon>
                                <p>Inicio</p>
                            </div>
                        </Link>
                    </div>

                    <div className={"index__contentLeftMenu__item" + (pathName.includes("Ruta_Migratoria") ? " menuselected" : "")}>
                        <Link to="/inicio/Ruta_Migratoria">
                            <div>
                                <FlagIcon style={{ color: "#ffffffc7" }}></FlagIcon>
                                <p>Tu Ruta</p>
                            </div>
                        </Link>
                    </div>

                    <div className={"index__contentLeftMenu__item" + (pathName.includes("Salud") ? " menuselected" : "")}>
                        <Link to="/inicio/Salud">
                            <div>
                                <LocalHospitalIcon style={{ color: "#ffffffc7" }}></LocalHospitalIcon>
                                <p>Salud</p>
                            </div>
                        </Link>
                    </div>

                    <div className={"index__contentLeftMenu__item" + (pathName.includes("Educacion") ? " menuselected" : "")}>
                        <Link to="/inicio/Educacion">
                            <div>
                                <img src="/icons/educacion.png" alt="" className="index__menuIcons"></img>
                                <p>Educación</p>
                            </div>
                        </Link>
                    </div>

                    <div className={"index__contentLeftMenu__item" + (pathName.includes("Espacio_Juridico") ? " menuselected" : "")}>
                        <Link to="/inicio/Espacio_Juridico">
                            <div>
                                <img src="/icons/espajuri.png" alt="" className="index__menuIcons"></img>
                                <p>Espacio jurídico</p>
                            </div>
                        </Link>
                    </div>

                    <div className={"index__contentLeftMenu__item" + (pathName.includes("Comunidad") ? " menuselected" : "")}>
                        <Link to="/inicio/Comunidad">
                            <div>
                                <img src="/icons/comunidad.png" alt="" className="index__menuIcons"></img>
                                <p>Comunidad</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="index__contentNews">
                    <Route path="/inicio" exact component={News} />
                    <Route path="/inicio/Ruta_Migratoria" component={RouteMig} />
                    <Route path="/inicio/Salud" component={Health} />
                    <Route path="/inicio/Educacion" component={Education} />
                    <Route path="/inicio/Espacio_Juridico" component={SpaceJud} />
                    <Route path="/inicio/Comunidad" component={Comunity} />


                </div>


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



        </div>

    )

}

export default Main;