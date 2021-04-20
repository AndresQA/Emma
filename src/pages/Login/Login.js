import React, { useState } from 'react';
import { HashRouter as Router, Route, link, Link, Redirect } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import firebase from '../../constants/Firebase/Firebase';
import 'firebase/auth';


const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin } = props;


    return (
        <div className="register">

            <div className="register__lrow">

                <div className="register__l">

                    <h1 className="register__ltitle">Iniciar Sesión</h1>
                    <div className="register__buttons">

                        <TextField id="outlined-basic" label="Correo electronico" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                        <TextField id="outlined-password-input" type="password" label="Contraseña" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />


                        <Button variant="contained" color="secondary" onClick={handleLogin} style={{
                            borderRadius: 100,
                            backgroundColor: "#8349C1",
                            padding: "16px",
                            width: "180px"
                        }}>
                            Ingresar
    </Button>




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