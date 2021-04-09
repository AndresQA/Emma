import React from 'react';
import News from '../News/News';
import { Route, Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Health from '../Health/Health';
import Education from '../Education/Education';
import SpaceJud from '../SpaceJud/SpaceJud';
import Comunity from '../Comunity/Comunity';
import RouteMig from '../RouteMig/RouteMig';

const Index = () => {
    return (
        <div className="index">
            <div className="index__navbar">
                <img src="/images/logo.png" alt="" className="logo"></img>
                <div className="index__navbar__menuicon">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon fontSize="large"></MenuIcon>
                    </IconButton>
                </div>

            </div>
            <div className="index__content">
                <div className="index__contentLeftMenu">

                    <div className="index__contentLeftMenu__item menuselected">
                        <Link to="/inicio">
                            <div>
                                <HomeIcon style={{ color: "#ffffffc7" }}></HomeIcon>
                                <p className="menuItemSelect">Inicio</p>
                            </div>
                        </Link>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <Link to="/inicio/Ruta_Migratoria">
                            <div>
                                <FlagIcon style={{ color: "#ffffffc7" }}></FlagIcon>
                                <p>Tu Ruta</p>
                            </div>
                        </Link>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <Link to="/inicio/Salud">
                            <div>
                                <LocalHospitalIcon style={{ color: "#ffffffc7" }}></LocalHospitalIcon>
                                <p>Salud</p>
                            </div>
                        </Link>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <Link to="/inicio/Educacion">
                            <div>
                                <img src="/icons/educacion.png" alt="" className="index__menuIcons"></img>
                                <p>Educación</p>
                            </div>
                        </Link>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <Link to="/inicio/Espacio_Juridico">
                            <div>
                                <img src="/icons/espajuri.png" alt="" className="index__menuIcons"></img>
                                <p>Espacio jurídico</p>
                            </div>
                        </Link>
                    </div>

                    <div className="index__contentLeftMenu__item">
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
                    <div className="index__contentRightMenu__card">
                        <img src="/images/cardname.png" alt="" className="index__contentRightMenu__cardImg"></img>
                        <h2>Hola Laura</h2>
                    </div>

                    <h3>Preguntas frecuentes</h3>

                    <div className="index__contentRightMenu__faq">
                        <div className="index__contentRightMenu__faqImg"></div>
                        <p>Se me venció el PEP</p>
                    </div>

                    <div className="index__contentRightMenu__faq">
                        <div className="index__contentRightMenu__faqImg"></div>
                        <p>Se me venció el salvoconducto</p>
                    </div>

                    <div className="index__contentRightMenu__faq">
                        <div className="index__contentRightMenu__faqImg"></div>
                        <p>Necesito ir a un hospital</p>
                    </div>

                    <div className="index__contentRightMenu__faq">
                        <div className="index__contentRightMenu__faqImg"></div>
                        <p>¿Dónde matricular a mis hijos?</p>
                    </div>

                    <div className="index__contentRightMenu__faq">
                        <div className="index__contentRightMenu__faqImg"></div>
                        <p>Como afiliarme al sistema de salud</p>
                    </div>

                    <div className="index__contentRightMenu__showMore">
                        <p>Mas preguntas frecuentes </p>
                    </div>

                </div>

            </div>



        </div>

    )

}

export default Index;