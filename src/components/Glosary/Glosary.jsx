import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './Glosary.scss'

const Glosary = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Notification");
    }, [])

    const handleClick = (index) => {
        const title = document.querySelector(".glosary__itemsDescription__"+index);
        const imgChindex = false;
        if (title.style.display == "block") {
            title.style.display = "none";
        } else
            title.style.display = "block";
    }


    return (
        <div className="glosary">
            <h1>Diccionario del migrante</h1>
            <div className="glosary__items">
                <div className="glosary__itemsTitle" onClick={()=>handleClick(1)}>
                    <h3>¿Quién es un migrante?</h3>
                    <img src="/icons/plus.png" alt="" />
                </div>
                <div className="glosary__itemsDescription__1">
                    <p>En el ámbito internacional no existe aún una definición concreta y universal de lo que es un “migrante”. Sin embargo, ACNUR lo define como una persona que elige dejar libremente su país de origen. Por su lado, Las Naciones Unidas definen al migrante como “Alguien que ha residido en un país extranjero durante más de un año independientemente de las causas de su traslado, voluntario o involuntario, o de los medios utilizados, legales u otros”.
                    La Declaración de Nueva York en 2016 estableció el Pacto Mundial sobre Migración, el cual no es jurídicamente vinculante, pero se basa en los valores de la soberanía del Estado, la responsabilidad compartida, la no discriminación y los Derechos Humanos2. Además, comprende de 23 objetivos para gestionar mejor la migración a nivel local, nacional, regional y mundial; es decir, este acuerdo es un apoyo ligado a las personas que deciden partir de su país de origen, y por tanto, puedan construir y mantener medios de vida sostenibles en el lugar al que decidan llegar.
                    </p>
                </div>
            </div>

            <div className="glosary__items">
                <div className="glosary__itemsTitle" onClick={()=>handleClick(2)}>
                    <h3>¿Qué es un extranjero?</h3>
                    <img src="/icons/plus.png" alt="" />
                </div>
                <div className="glosary__itemsDescription__2">
                    <p>Una persona extranjera es aquella que no es considerado como miembro de la comunidad política que enfrenta, es decir, cuando el entorno en el que se encuentra pertenece a una cultura y costumbre de un país distinto al que es originario. Simultáneamente, es extranjero quien no es ciudadano y no goza de la nacionalidad del país en el que está localizado. En otras palabras, aquel que no adquiere ni ejerce los derechos y responsabilidades inherentes a la pertenencia de ese Estado.3 Los extranjeros cuentan con derechos y deberes por el hecho de permanecer en un determinado territorio. En Colombia, tal como lo expresa el art. 100 de la Constitución Política, en palabras del Ministerio de Relaciones Exteriores “Los extranjeros gozan en el territorio colombiano de los mismos derechos y garantías de los nacionales, pero se encuentran también sometidos por los mismos deberes civiles y están obligados al respeto de la Constitución Política y de la ley” (Sentencia C-1251, 2001).
                    </p>
                </div>
            </div>

            <div className="glosary__items">
                <div className="glosary__itemsTitle" onClick={()=>handleClick(3)}>
                    <h3>¿Qué es un migrante interno?</h3>
                    <img src="/icons/plus.png" alt="" />
                </div>
                <div className="glosary__itemsDescription__3">
                    <p>Un migrante nacional es “una persona que se desplaza o se ha desplazado dentro de un país, fuera de su lugar habitual de residencia independientemente de 1) su situación jurídica; 2) carácter voluntario o involuntario del desplazamiento; 3) las causas del desplazamiento; o 4) la duración de su estancia”.
                    La migración interna hace referencia al movimiento de personas dentro de un país que conlleva al establecimiento de una nueva residencia temporal o permanente.2 Comprendiendo a aquellos nacionales o no nacionales que se muevan dentro de un país siempre que se trasladen fuera de su lugar de residencia habitual.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Glosary;
