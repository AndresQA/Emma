import React, { useEffect, useState } from 'react';
import AppContext from '../../../App/AppContext';

const JoinHealth = () => {



    return (
        <div className="services">
            <h1>Afiliación a salud</h1>

            <div className="formDescription__info">
                <div>
                    <img className="formDescription__info__img" src="/images/EPS PAG.jpg" align="right" alt="" />
                    <p>Para afiliarte al Sistema General de Seguridad Social en Salud (SGSSS) en Colombia primero debes tener en cuenta si tienes los documentos que exigen las Empresas Promotoras de Salud (EPS).</p>
                    <p>El Ministerio de Salud específica que podrás acceder a estos sistemas, bien sea al Régimen Contributivo o Subsidiado, con los siguientes documentos:</p>
                    <ul>
                        <li>Cédula de extranjería.</li>
                        <li>Salvoconducto.</li>
                        <li>Pasaporte de la Organización de las Naciones Unidas para quienes tengan la calidad de refugiado o asilados.</li>
                        <li>Pasaporte para menores de siete (7) años.</li>
                        <li>Permiso Especial de Permanencia (PEP).</li>
                        <li>Registro civil (valido para los menores nacidos en territorio nacional colombiano).</li>
                    </ul>
                </div>



            </div>
            <p><strong> Si eres empleado en cualquier empresa, trabajas de manera independiente o tienes capacidad para pagar</strong> tú mismo los servicios de salud, podrás afiliarte al régimen contributivo.</p>
            <p>
                Pero si no tienes para pagar los servicios de salud, podrás afiliarte al régimen subsidiado, para ello debes tener aprobado el Sisbén y que estés clasificado en el nivel I y II. La solicitud de la encuesta para el Sisbén debes hacerlo en la oficina del Sisbén del municipio donde vivas.</p>
            <p>
                La empresa Medimás EPS explica que si quieres afiliarte primero debes solicitar el formulario único de afiliación en la página web y llevarlo con todos los datos llenos a las oficinas de la ciudad donde te encuentres.</p>

            <p><strong> Si eres empleado en cualquier empresa, trabajas de manera independiente o tienes capacidad para pagar</strong></p>
            <ul>
                <li>En ningún momento podrás hacer tu afiliación con los documentos de identidad en Venezuela, solo con los anteriormente mencionados.</li>
                <li>Si vas a hacer tu afiliación al régimen contributivo, debes tener en cuenta que tienes que tener un trabajo bien sea dependiente de un empleador o de manera independiente, que te permita pagar (cotizar) el servicio de salud.</li>
                <li>Para afiliarte al <strong> régimen subsidiado</strong>, debes cumplir con los requisitos exigidos: residir en territorio colombiano, contar con Sisbén, pero si no lo tienen debes solicitar la inclusión en el listado censal del municipio, y actualizar la información de tu lugar de residencia cada 4 meses en este ente territorial. Esto mientras te realizan la encuesta de Sisbén.</li>
            </ul>

        </div>
    )
}

export default JoinHealth;
