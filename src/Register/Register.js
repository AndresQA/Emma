import React, { useState } from 'react';
import { HashRouter as Router, Route, link, Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const Register = () => {

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const firebase = useFirebaseApp();

    const submit = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="register">

            <div className="register__lrow">
                <img src="/images/logo.png" alt="" className="logo"></img>


                <div className="register__l">

                    <h1 className="register__ltitle">Registrate </h1>
                    <div className="register__buttons">

                        <TextField id="outlined-basic" label="Nombre completo" variant="outlined" onChange={ (ev)=> setName(ev.target.value)} />
                        <TextField id="outlined-basic" label="Correo electronico" variant="outlined" onChange={ (ev)=> setEmail(ev.target.value)}/>
                        <TextField id="outlined-password-input" type="password" label="Contraseña" variant="outlined" onChange={ (ev)=> setPassword(ev.target.value)}/>

                        <Link to="/inicio">
                            <Button variant="contained" color="secondary" onClick={submit} style={{
                                borderRadius: 100,
                                backgroundColor: "#8349C1",
                                padding: "16px",
                                width: "180px"
                            }}>
                                Siguiente
        </Button>
                        </Link>



                    </div>




                </div>
            </div>


            <div className="register__r">
                <div className="register__rInfo">
                    <h1>¡Me encantaría conocerte! </h1>
                </div>
                <img src="/images/emmaAsis2.png" alt="" className="register__rEmma"></img>
            </div>
        </div>

    )

}

export default Register;