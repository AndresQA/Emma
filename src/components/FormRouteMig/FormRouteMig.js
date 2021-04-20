import React, { useEffect } from 'react';
import './FormRouteMig.scss'
import { Route, Link, Redirect, useHistory } from 'react-router-dom';

const FormRouteMig = () => {



    return (
        <div className="formRouteMig">
           <h1>Solicitud de Refugio</h1>

           <form action="">
               <h4>Datos personales</h4>
               <div className="fullName">
                   <p></p>

               </div>
               <hr/>
           </form>
        </div>

    )

}

export default FormRouteMig;