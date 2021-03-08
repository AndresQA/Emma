import { Button } from '@material-ui/core';
import React from 'react';
import { HashRouter as Router, Route, link, Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home">

            <div className="home__lrow">
                <img src="/images/logo.png" alt="" className="home__llogo"></img>


                <div className="home__l">

                    <h1 className="home__ltitle">¡Empieza tu camino ahora!</h1>
                    <div className="home__buttons">
                        <Link to="/registro">
                            <Button variant="contained" color="secondary" style={{
                                borderRadius: 100,
                                backgroundColor: "#8349C1",
                                padding: "16px",
                                width: "180px"
                            }}>
                                Registrate
            </Button>
                        </Link>

                        <Link to="/iniciarSesion">
                            <Button variant="outlined" color="primary" style={{
                                borderRadius: 100,
                                borderColor: "#8349C1",
                                padding: "16px",
                                width: "180px"
                            }}>
                                Ingresa
            </Button>

                        </Link>

                    </div>




                </div>
            </div>


            <div className="home__r">
                <div className="home__rInfo">
                    <h1>¡Hola, soy EMMA!</h1>
                    <p> Te guiare durante todo tu camino de regulación migratoria. </p>
                </div>
                <img src="/images/emmaAsis.png" alt="" className="home__rEmma"></img>
            </div>
        </div>
    )
}

export default Home;