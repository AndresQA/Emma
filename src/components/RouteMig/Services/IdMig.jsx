import React, { useEffect, useState } from 'react';

const IdMig = () => {


    return (
        <div className="idMig">
            <h1>Cédula de Extranjería</h1>

            <div className="formDescription__info">
                <div>
                    <img className="formDescription__info__img" src="/images/EPS PAG.jpg" align="right" alt="" />
                    <h3>Requisitos</h3>
                    <ul>
                        <li>Pasaporte original.</li>
                        <li>Fotocopia de la página con los datos biográficos del pasaporte.</li>
                        <li>Original de la visa vigente.</li>
                        <li>Diligenciar el<a className="renovPep__link" href="https://apps.migracioncolombia.gov.co/registro/public/formularioRegistro.jsf" target="_blank"> <strong> Formulario Único de Trámites</strong></a> a través de la página web de Migración Colombia.</li>
                        <li>Recibo del Pago por expedición de Cédula de extranjería.</li>
                    </ul>

                    <h3>Tenga en cuenta</h3>
                    <p>Los menores de edad entre 7 - 17 años beneficiarios de Visa deberán acudir al Centro Facilitador de Servicios Migratorios o Puestos de Control Migratorio con funciones de Extranjería en compañía del padre, madre o representante legal del menor.</p>
                    <h3>Costo</h3>
                    <ul>
                        <li>Tarifa 206,000.00 Pesos ($).</li>
                        <li>Venezolanos(as) cónyuges o compañeros permanentes de los nacionales colombianos deportados, expulsados o retornados, que sean titulares del Permiso Especial de Ingreso y Permanencia o del Permiso Especial Temporal de Permanencia. Lo anterior de conformidad con lo establecido en el Decreto 1814 del 14 de septiembre de 2015. 0.00 Pesos ($).</li>
                        <li>Becarios de la Alianza del Pacífico nacionales de Perú o México. (Visa TP-1) 0.00 Pesos ($).</li>
                        <li>Ecuatorianos - Cédula de extranjería (Duplicado por pérdida). El valor en dólares se ajustará a la tasa de cambio al momento del trámite. 15.00 Dolares (US$).</li>
                        <li>Ecuatorianos - Cédula de extranjería (Renovación). El valor en dólares se ajustará a la tasa de cambio al momento del trámite. 10.00Dolares (US$).</li>
                    </ul>
                </div>



            </div>
        </div>
    )
}

export default IdMig;