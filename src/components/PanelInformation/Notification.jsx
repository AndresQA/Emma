import React, { useEffect } from 'react';

const Notification = () => {



    return (
        <div className="Body__faq">
            <div className="index__contentRightMenu">




                <div className="index__contentRightMenu__boxfaq">
                    <h3 className="panelInfo_Tittle">Notificaciones</h3>
                    <hr />
                    <div className="index__contentRightMenu__faq">
                        <img src="/icons/migracioncolombia.png" alt="" className="index__contentRightMenu__faqImg"></img>
                        <div className="notificationInfo">
                            <h4>Migración Colombia</h4>
                            <p>El 28 de abril se cierra inscripción para actualización del PEP.</p>
                        </div>
                    </div>
                    <hr />

                    <div className="index__contentRightMenu__faq">
                        <img src="/icons/migracioncolombia.png" alt="" className="index__contentRightMenu__faqImg"></img>
                        <div className="notificationInfo">
                            <h4>Migración Colombia</h4>
                            <p>Conoce el nuevo estatuto para regulación migrante.</p>
                        </div>                    </div>
                    <hr />

                    <div className="index__contentRightMenu__faq">
                        <img src="/icons/eltiempo.png" alt="" className="index__contentRightMenu__faqImg"></img>
                        <div className="notificationInfo">
                            <h4>El Tiempo</h4>
                            <p>Este es el efecto de la migración de venezolanos...</p>
                        </div>                    </div>
                    <hr />

                    <div className="index__contentRightMenu__faq">
                        <img src="/icons/migcol2.png" alt="" className="index__contentRightMenu__faqImg"></img>
                        <div className="notificationInfo">
                            <h4>Migración Colombia</h4>
                            <p>Entrevista con el director de migración Colombia. </p>
                        </div>                    </div>
                    <hr />


                </div>




            </div>
        </div>

    )

}

export default Notification;