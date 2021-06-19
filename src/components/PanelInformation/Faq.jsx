import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import User from '../../constants/Firebase/User';


const Faq = () => {

    const [nombre, setNombre] = useState("Nombre de usuario");


    const { useLogin, UseDataMapsComunity } = AppContext.Consumer();
    const [isLoging, setIsLogin] = useLogin();
    const [dataMapsComunity, setDataMapsComunity] = UseDataMapsComunity();

    const { nombreComunidad, descripcionComunidad, direccionComunidad, telefonoComunidad, imgComunidad, email } = dataMapsComunity;


    useEffect(() => {

        setNombre(User.information.nombre)
    }, [isLoging])

    return <div className="Body__faq">
        <div className="index__contentRightMenu">


            <div className="index__contentRightMenu__boxfaq">
                <h4 className="panelInfo_Tittle">Información</h4>

                {nombreComunidad == null ? <div>
                <p>Selecciona un marcador <img src="/icons/Marker.png" alt="" /> para obtener información detallada acerca del lugar.</p>

                </div>

                    :
                    <div>
                        <h5>{nombreComunidad}</h5>
                        <img className="mapImgTag" src={imgComunidad} alt="" />

                        <p>{descripcionComunidad}</p>

                        <p>{direccionComunidad}</p>
                        <p>{telefonoComunidad}</p>
                        <p>{email}</p>
                    </div>

                }

                <div></div>



            </div>



        </div>
    </div>
}

export default Faq;