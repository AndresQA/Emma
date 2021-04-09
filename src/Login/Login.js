import React, { useState } from 'react';
import { HashRouter as Router, Route, link, Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';


const Login = () => {



    return (
        <div className="register">

            <div className="register__lrow">
                <img src="/images/logo.png" alt="" className="logo"></img>


                <div className="register__l">

                    <h1 className="register__ltitle">Iniciar Sesión</h1>
                    <div className="register__buttons">

                        <TextField id="outlined-basic" label="Correo electronico" variant="outlined" />
                        <TextField id="outlined-password-input" type="password" label="Contraseña" variant="outlined" />

                        <Link to="/inicio">
                            <Button variant="contained" color="secondary" style={{
                                borderRadius: 100,
                                backgroundColor: "#8349C1",
                                padding: "16px",
                                width: "180px"
                            }}>
                                Ingresar
    </Button>
                        </Link>



                    </div>




                </div>
            </div>


            <div className="register__r">
                <div className="register__rInfo">
                    <h1>¡Qué bueno que estés de vuelta! </h1>
                </div>
                <img src="/images/emmaAsis2.png" alt="" className="register__rEmma"></img>
            </div>
        </div>


    )

}

export default Login;