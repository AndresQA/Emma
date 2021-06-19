import React, { useEffect, useState } from 'react';
import AppContext from '../../App/AppContext';
import './Glosary.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Glosary = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [iconstatus, setIconstatus] = useState(Array(13));

    useEffect(() => {
        Step("Notification");
        for (let i = 0; i < iconstatus.length; i++) {
            iconstatus[i] = 0;
        }
    }, [])



    return (
        <div className="glosary">
            <h1>Diccionario del migrante</h1>
            <GlosaryItem
                title="¿Quién es un migrante?"
                description="En el ámbito internacional no existe aún una definición concreta y universal de lo que es un “migrante”. Sin embargo, ACNUR lo define como una persona que elige dejar libremente su país de origen. Por su lado, Las Naciones Unidas definen al migrante como “Alguien que ha residido en un país extranjero durante más de un año independientemente de las causas de su traslado, voluntario o involuntario, o de los medios utilizados, legales u otros”.
                La Declaración de Nueva York en 2016 estableció el Pacto Mundial sobre Migración, el cual no es jurídicamente vinculante, pero se basa en los valores de la soberanía del Estado, la responsabilidad compartida, la no discriminación y los Derechos Humanos2. Además, comprende de 23 objetivos para gestionar mejor la migración a nivel local, nacional, regional y mundial; es decir, este acuerdo es un apoyo ligado a las personas que deciden partir de su país de origen, y por tanto, puedan construir y mantener medios de vida sostenibles en el lugar al que decidan llegar." />

            <GlosaryItem
                title="¿Qué es un extranjero?"
                description="Una persona extranjera es aquella que no es considerado como miembro de la comunidad política que enfrenta, es decir, cuando el entorno en el que se encuentra pertenece a una cultura y costumbre de un país distinto al que es originario. Simultáneamente, es extranjero quien no es ciudadano y no goza de la nacionalidad del país en el que está localizado. En otras palabras, aquel que no adquiere ni ejerce los derechos y responsabilidades inherentes a la pertenencia de ese Estado.3 Los extranjeros cuentan con derechos y deberes por el hecho de permanecer en un determinado territorio. En Colombia, tal como lo expresa el art. 100 de la Constitución Política, en palabras del Ministerio de Relaciones Exteriores “Los extranjeros gozan en el territorio colombiano de los mismos derechos y garantías de los nacionales, pero se encuentran también sometidos por los mismos deberes civiles y están obligados al respeto de la Constitución Política y de la ley” (Sentencia C-1251, 2001)." />

            <GlosaryItem
                title="¿Qué es un migrante interno?"
                description="Un migrante nacional es “una persona que se desplaza o se ha desplazado dentro de un país, fuera de su lugar habitual de residencia independientemente de 1) su situación jurídica; 2) carácter voluntario o involuntario del desplazamiento; 3) las causas del desplazamiento; o 4) la duración de su estancia”.
                La migración interna hace referencia al movimiento de personas dentro de un país que conlleva al establecimiento de una nueva residencia temporal o permanente.2 Comprendiendo a aquellos nacionales o no nacionales que se muevan dentro de un país siempre que se trasladen fuera de su lugar de residencia habitual." />

            <GlosaryItem
                title="¿Qué es un migrante internacional?"
                description="Un migrante internacional es “una persona que se desplaza o se ha desplazado a través de una frontera internacional, fuera de su lugar habitual de residencia independientemente de 1) su situación jurídica; 2) carácter voluntario o involuntario del desplazamiento; 3) las causas del desplazamiento; o 4) la duración de su estancia”. 
                El término incluye a los migrantes que tienen la intención de trasladarse de forma permanente o temporal, a los que se trasladan de forma regular o con la documentación requerida, y a aquellos que se encuentran en situación irregular.
                el Departamento de Asuntos Económicos y Sociales de las Naciones Unidas (DAES) define “migrante internacional” como “toda persona que cambia de país de residencia habitual”" />

            <GlosaryItem
                title="¿Quién es un migrante regular?"
                description="Movimiento de personas que se produce de conformidad con las leyes del país de origen, de tránsito y de destino. Esta migración esta ajustada con las normas de entrada, salida y permanencia en los países." />

            <GlosaryItem
                title="¿Quién es un migrante irregular?"
                description="Movimiento de personas que se da al margen de la ley, las normas o los acuerdos internacionales que rigen la entrada o la salida del país de origen, de tránsito o de destino7. Un migrante irregular es aquella persona que al movilizarse por un país o ingresar a uno distinto al de su residencia habitual no cuenta con los documentos necesarios estipulados por la legislación para ello o no cuenta con documentación que autorice su residencia en un país." />

            <GlosaryItem
                title="¿Quién es refugiado?"
                description="Persona que cumple los criterios de elegibilidad de la definición de refugiado prevista en los instrumentos internacionales o regionales sobre refugiados, el mandato del ACNUR y/o la legislación nacional. De acuerdo con muchos de estos instrumentos, un refugiado o refugiada es una persona que no puede regresar a su país de origen debido a un temor fundado de persecución o a amenazas graves e indiscriminadas contra la vida, la integridad física o la libertad." />


            <GlosaryItem
                title="¿Quién es un solicitante de asilo?"
                description="Un solicitante de asilo es una persona que solicita oficialmente al país de asilo el reconocimiento de su condición como refugiado, pero su solicitud aún no ha sido evaluada en forma definitiva." />

            <GlosaryItem
                title="¿Quién es un retornado?"
                description="Proceso o acto por el cual los solicitantes de asilo, refugiados o migrantes regresan desde el país de acogida a su país de nacionalidad o residencia habitual." />


            <GlosaryItem
                title="Permiso de ingreso y permanencia - PIP"
                description="Es la autorización expedida por Migración Colombia, al extranjero que no requiera Visa, la autoridad migratoria estampa un sello en el pasaporte, donde consta el ingreso (fecha del ingreso, días de permanencia autorizados y tipo de ingreso), que será de noventa (90) días consecutivos, prorrogables, por noventa (90) días más, hasta completar un máximo de 180 días por año calendario." />

            <GlosaryItem
                title="Tarjeta de Movilización Fronteriza"
                description="Documento que permite Ingresar y transitar libremente por zonas fronterizas, estudiar primaria o secundaria; realizar turismo en zonas de frontera, visitar familiares y comprar medicamentos. No permite ingresar al interior del país, vivir en Colombia o afiliarse al sistema de salud." />

            <GlosaryItem
                title="Permiso De Ingreso Y Permanencia De Tránsito Temporal"
                description="Está dirigido a ciudadanos extranjeros que pretendan transitar dentro del territorio colombiano con el fin de hacer conexiones o escalas para abordar algún medio de transporte marítimo, terrestre, aéreo o fluvial, para retornar a su país de origen o hacia un tercer país, sin el ánimo de establecerse o domiciliarse en Colombia, por el término de 15 días calendario, no prorrogables.{<br>}
                Los extranjeros que ingresen dentro del territorio colombiano presentando documento de identificación diferente al pasaporte y pretendan hacer uso del PIP-TT deberán identificarse con la Tarjeta Migratoria Electrónica durante el término de tránsito y presentarla a su salida del país ante el Puesto de Control Migratorio." />

            <GlosaryItem
                title="Permiso Temporal de Permanencia  PEP"
                description="Es un permiso que expide Migración Colombia para los extranjeros que quieran extender su permanencia en Colombia, siempre y cuando no haya excedido el tiempo de su Permiso de Ingreso y Permanencia (PIP). Tiene una vigencia de noventa (90) días. Se puede solicitar en el portal web de Migración Colombia. Este permiso tiene un costo y exige que la persona tenga una reserva de transporte aéreo o terrestre a su país de origen." />

            <GlosaryItem
                title="Permanencia para el Fomento de la Formalización (PEPFF)"
                description="Es un permiso que permite regularizar la situación migratoria durante la vigencia de un contrato laboral. El empleador tramita este permiso por medio de la pagina de migración Colombia." />


        </div>
    )
}

export default Glosary;

const GlosaryItem = ({ title, description }) => {

    const [desplegar, setDesplegar] = useState(false);

    return <div className="glosary__items">
        <div className="glosary__itemsTitle" onClick={() => setDesplegar(!desplegar)}>
            <h3>{title}</h3>
            {desplegar === false ? <ExpandMoreIcon style={{ fontSize: 55, color: "#7241A6" }} /> : <ExpandLessIcon style={{ fontSize: 55, color: "#7241A6" }} />}

        </div>
        {desplegar === true ? <div className="glosary__itemsDescription">
            <p>{description}</p>
        </div> : <></>}

    </div>
}