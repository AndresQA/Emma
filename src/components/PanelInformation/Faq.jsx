import React, { useEffect, useState } from 'react';
import User from '../../constants/Firebase/User';


const Faq = () => {

    const [nombre, setNombre] = useState(User.information.nombre);
    console.log(User.information.nombre)

    return <div className="Body__faq">
        <div className="index__contentRightMenu">

            <div >
                <div className="index__contentRightMenu__card">
                    <img src="/images/cardname.png" alt="" className="index__contentRightMenu__cardImg"></img>
                    <h2>Hola {nombre}</h2>
                </div>

                <div className="index__contentRightMenu__boxfaq">
                    <div className="index__contentRightMenu__faq">
                        <p>Se me venció el PEP</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>
                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>Se me venció el salvoconducto</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>Necesito ir a un hospital</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>¿Dónde matricular a mis hijos?</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                    <div className="index__contentRightMenu__faq">
                        <p>Como afiliarme al sistema de salud</p>
                        <img src="/icons/info.png" alt="" className="index__contentRightMenu__faqImg"></img>

                    </div>

                </div>

            </div>


        </div>
    </div>
}

export default Faq;