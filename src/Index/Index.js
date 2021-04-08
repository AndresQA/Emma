import React from 'react';
import News from '../News/News';
import { HashRouter as Router, Route, link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

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
                        <div>
                            <HomeIcon style={{ color: "#ffffffc7" }}></HomeIcon>
                            <p className="menuItemSelect">Inicio</p>
                        </div>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <div>
                            <FlagIcon style={{ color: "#ffffffc7" }}></FlagIcon>
                            <p>Tu Ruta</p>
                        </div>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <div>
                            <LocalHospitalIcon style={{ color: "#ffffffc7" }}></LocalHospitalIcon>
                            <p>Salud</p>
                        </div>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <div>
                            <img src="/icons/educacion.png" alt="" className="index__menuIcons"></img>
                            <p>Educación</p>
                        </div>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <div>
                            <img src="/icons/espajuri.png" alt="" className="index__menuIcons"></img>
                            <p>Espacio jurídico</p>
                        </div>
                    </div>

                    <div className="index__contentLeftMenu__item">
                        <div>
                        <img src="/icons/comunidad.png" alt="" className="index__menuIcons"></img>
                            <p>Comunidad</p>
                        </div>
                    </div>
                </div>

                <div className="index__contentNews">
                <Route path="/inicio" exact component={News}/>
                </div>
                <div className="index__contentRightMenu">
                    menu 3
                </div>

            </div>



        </div>

    )

}

export default Index;