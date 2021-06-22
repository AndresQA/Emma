import React, { useEffect, useState } from 'react';
import AppContext from '../../../App/AppContext';

const Convalidation = () => {



    return (
        <div className="services">
            <h1>Homologacion de titulos</h1>

            <div className="formDescription__info">
                <div>
                    <img className="formDescription__info__img" src="/images/EPS PAG.jpg" align="right" alt="" />
                    <p>Los extranjeros, especialmente los venezolanos, que se encuentren en Colombia pueden convalidar sus títulos de educación básica, media o universitaria a través de la página web del <a className="renovPep__link" href="http://convalidacionesbasica.mineducacion.gov.co/TMS.Solution.MENCONV/(SwgUB8M7)/CV/es/Home/Inicio" target="_blank"> <strong> Ministerio de Educación Nacional</strong></a>.</p>
                    <p>Si obtuviste tu título de bachiller o de pre grado en el extranjero puedes seguir los siguientes pasos para validarlo en Colombia.</p>
                    <p>La convalidación por parte del Ministerio de Educación Nacional es el reconocimiento a los estudios realizados en el exterior de preescolar, básica, media y universitaria.</p>
                </div>
            </div>
            <h3>Convalidar el título universitario</h3>
            <ol>
                <li>Legalice o apostille su diploma. Si está en un idioma diferente al español debe ser traducido.</li>
                <li>Ingrese a la página del Ministerio de Educación en <a className="renovPep__link" href="http://convalidacionesbasica.mineducacion.gov.co/TMS.Solution.MENCONV/(SwgUB8M7)/CV/es/Home/Inicio" target="_blank"> <strong> CONVALIDACIONES</strong></a> y regístrese. </li>
                <li>Ingrese al sistema con los datos suministrados y en la opción <strong>CREAR </strong>ingrese a <strong>CONVALIDACIÓN</strong>.</li>
                <li>Seleccione el tipo de convalidación a realizar: pregrado o posgrado.</li>
                <li>Diligencie la información de la institución que otorgó el título a convalidar, la información de los estudios a convalidar y los datos de notificación de contacto en Colombia.</li>
                <li>Anexe los documentos previamente digitalizados.</li>
                <li>Radique la solicitud de convalidación en el botón <strong>RADICAR</strong>.</li>
                <li>Imprima la constancia de radicación que el sistema le generará.</li>
                <li>Una vez se confirme que los documentos están completos se habilitará el botón de pagos en la plataforma VUMEN. Se le notificará de esta activación por medio de correo electrónico.</li>
                <li>Si se identifica que los documentos no están completos se le pedirá que complemente la información para continuar con el proceso. </li>
            </ol>

            <h3>Requisitos</h3>
            <p>Recuerde que estos <a className="renovPep__link" href="https://www.mineducacion.gov.co/1759/articles-369204_recurso_1.pdf" target="_blank"> <strong>DOCUMENTOS</strong></a> deben ser digitalizados y cargados en el sistema.</p>
            <ul>
                <li>Fotocopia del documento de Identidad.</li>
                <li>Fotocopia de la cédula de ciudadanía, cédula de extranjería, pasaporte vigente o el PEP.</li>
                <li>Título.</li>
                <li>Seleccione el tipo de convalidación a realizar: pregrado o posgrado.</li>
                <li>Fotocopia del título a convalidar. Debidamente legalizado o apostillado en el país de origen. Para convalidar títulos de posgrado deberá anexar su título de pregrado si es nacional o su resolución de convalidación de título de pregrado si es internacional.</li>
                <li>Certificado de Calificaciones.</li>
                <li>Certificado de calificaciones del programa al que corresponde el título a convalidar, debidamente legalizado o apostillado en el país de origen.</li>
            </ul>

            <h3>Es importante que realices los siguientes trámites antes de ingresar a Colombia</h3>
            <ul>
                <li>Apostilla o legalización de título por vía diplomática.</li>
                <li>Traducción oficial del título.</li>
                <li>Certificación de notas apostilladas o legalizadas por vía diplomática.</li>
                <li>Traducción oficial de certificado de notas.</li>
                <li>Para área de salud: plan de estudios original y traducción oficial.</li>
                <li>Para área de salud pregrado: internado rotatorio apostillado o legalizado por vía diplomática.</li>
                <li>Para área de salud posgrado: récord quirúrgico o de consulta y documentos que demuestren las actividades académicas y asistenciales.</li>
            </ul>

            <h3>Costo y duración</h3>
            <p>Las tarifas establecidas para el trámite de convalidación de títulos extranjeros de educación superior en 2019 son:</p>
            <p><strong>Pregrado: 607.000 Pesos colombianos</strong></p>
            <p><strong>Posgrado: 689.800 Pesos colombianos</strong></p>

            <p>Para realizar el pago, usted recibirá una notificación de nuestro sistema de información al correo electrónico que inscribió, el pago se realizará por medio de PSE (pago seguro en línea) es por esto que debe verificar que su banco esté en el listado de bancos inscritos para este servicio. Asegúrese que su cuenta de ahorros, tenga habilitada la opción para realizar pagos electrónicos a través de PSE</p>
            <p>El proceso de convalidación podrá tardar entre 60 a 180 días calendario. Esto depende del criterio de convalidación por el cual sea procesada la solicitud.</p>

        </div>
    )
}

export default Convalidation;
