import React, { useEffect } from 'react';
import './FormRouteMig.scss'
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';

const FormRouteMig = () => {



    return (
        <div className="formRouteMig">
            <h1>Solicitud de Refugio</h1>

            <form action="">
                <h4>Datos personales</h4>
                <hr/>
                <div className="fullName">
                    <p>Nombre completo del solicitante</p>
                    <TextField id="outlined-basic" label="nombre completo" variant="outlined" />

                </div>
            </form>
        </div>

    )

}

export default FormRouteMig;