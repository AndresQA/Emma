import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import User from '../../constants/Firebase/User';


const Faq = () => {

    const [nombre, setNombre] = useState("Nombre de usuario");


    const { useLogin, UseDataMapsComunity } = AppContext.Consumer();
    const [isLoging, setIsLogin] = useLogin();
    const [dataMapsComunity, setDataMapsComunity] = UseDataMapsComunity();

    const {nombreComunidad, descripcionComunidad} = dataMapsComunity;


    useEffect(() => {

        setNombre(User.information.nombre)
    }, [isLoging])

    return <div className="Body__faq">
        <div className="index__contentRightMenu">


            <div className="index__contentRightMenu__boxfaq">
                <h4 className="panelInfo_Tittle">Información</h4>

                <h5>{nombreComunidad}</h5>

                <p>{descripcionComunidad}</p>
                


            </div>



        </div>
    </div>
}

export default Faq;