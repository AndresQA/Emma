import React, { useEffect, useState } from 'react';

const BasicEdu = () => {


    return (
        <div className="services">
            <h1>Educación Básica</h1>
            <div className="formDescription__info">
                <div>
                    <img className="formDescription__info__img" src="/images/EPS PAG.jpg" align="right" alt="" />
                    <p>En caso de que el menor no posea visa estudiantil, puede presentar los siguientes documentos:</p>
                    <ul>
                        <li>Permiso especial de permanencia - PEP.</li>
                        <li>Salvoconducto.</li>
                        <li>Pasaporte.</li>
                    </ul>
                    <p>Pero si el estudiante no cuenta con ninguno de los documentos anteriormente mencionados, el colegio le asignará un código NES (Número establecido por la Secretaría de Educación) el cual, servirá para el registro de los estudiantes ante el SIMAT (Sistema de matrícula estudiantil).</p>
                    <p>Para efectuar la matrícula, se exige que los niños y niñas tengan como mínimo el NES1 expedido por la secretaria de educación.</p>
                    <p>En el caso de convalidación de años escolares, se necesitan los documentos referentes a la aprobación y constancia del grado lectivo en el que se encontraba en su país. Si no puede conseguirlos se ha establecido que podrán realizarse exámenes de nivelación.</p>
                </div>
            </div>

        </div>
    )
}

export default BasicEdu;
