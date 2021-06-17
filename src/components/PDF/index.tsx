import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import styles from "./style";
import AppContext from "../../App/AppContext";
import { Button } from "@material-ui/core";

interface PropsDocument {
    nombre: string;
    edad: string;
}


const PDF = () => {

    const { useDataForms, useDownloaded } = AppContext.Consumer()
    const [dataForms, setDataForms] = useDataForms();
    const [onDownloaded, setDownloaded] = useDownloaded();

    const refContainer = useRef<any>();



    return <div className="pdfContainer" ref={refContainer} style={{ width: "1080", height: "1920" }}>
        {/*
        <PDFViewer>
            <Documento {...dataForms} />
        </PDFViewer>
        */
        }

        <div className="download">
            <img className="downloadImg" src="/images/descargar.png" alt="Descargar" />
            <PDFDownloadLink document={<Documento {...dataForms} />} fileName="formato.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' :
                        <Button className="nextBtn" onClick={()=> {setDownloaded(true)}} variant="contained">Descargar</Button>

                }
            </PDFDownloadLink>
        </div>
    </div >
}

export default PDF;

///////// Maquetacion del documento pdf

const Documento = ({ formaIngreso, lugarIngreso, selectedDate, cedulaPersona, telefono, correoSolicitante, direccionResidencia, nombreSolicitante,
    nombreBeneficiario, idBeneficiario, edadBeneficiario, formaIngresoBeneficiario, lugarIngresoBeneficiario, fechaIngresoBeneficiario }: any) => {



    return <Document >
        <Page style={styles.body} size="A4">
            <View>
                <Text style={styles.subtitle}>

                    Santiago de Cali, 2 de Marzo de 2019</Text>

                <Text style={styles.subtitle}>
                    Señores/as</Text>
                <Text style={styles.subtitle}>
                    COMISIÓN ASESORA PARA LA DETERMINACIÓN DE LA CONDICIÓN DE REFUGIADO (CONARE)</Text>
                <Text style={styles.subtitle}>
                    MINISTERIO DE RELACIONES EXTERIORES (CANCILLERÍA)</Text>
                <Text style={styles.subtitle}>
                    República de Colombia</Text>
                <Text style={styles.subtitle}>
                    Carrera 5 No. 9-03, Bogotá D.C., Colombia.</Text>



                <Text style={styles.subtitle}>
                    REFERENCIA: </Text>
                <Text style={styles.subtitle}>
                    Solicitud de Reconocimiento de la Condición de Refugiado </Text>
                <Text style={styles.subtitle}>
                    {nombreSolicitante}</Text>
                <Text style={styles.subtitle}>
                    Beneficiarios: ALONDRA JOSLEIDY VIILLASMIL FLORES.</Text>
                <Text style={styles.subtitle}>
                    Cordial saludo: </Text>
                <Text style={styles.subtitle}>
                    {nombreSolicitante}, mayor de edad e identificada tal y como aparece al pie de mi
            correspondiente firma, actuando en nombre propio, y conforme lo establece el Decreto 2840 de
            2013, compilado en el Decreto 1067 de 2015; de manera respetuosa me permito solicitar,
            el reconocimiento de la condición de refugiado, a mí y a mis beneficiarios, teniendo en
            cuenta los siguientes:</Text>



                <Text style={styles.subtitle}>
                    HECHOS</Text>
                <Text style={styles.subtitle}>
                    1.	Venezuela es un país que se encuentra en una grave crisis institucional, social, económica y política,
                    lo que implica que la mayoría de migrantes que salen de Venezuela lo hacen por las masivas vulneraciones
                    de derechos humanos que afectan gravemente el orden público.  En otras palabras,
                    “La crisis multidimensional de Venezuela conduce a que miles de ciudadanos abandonen su país por
                    el colapso socioeconómico, por la persecución política o por la violencia y la inseguridad, en busca
                    de garantizar el derecho a la vida, la salud, la alimentación, la integridad y la libertad personal” .
                    Lo que genera que mi sobrina y yo no podamos volver a Venezuela en estos momentos, pues estaríamos en
                    condiciones vulnerables por el contexto del país .
            </Text>
                <Text style={styles.subtitle}>
                    2.	La contracción en un 50% de la economía venezolana entre el quinquenio 2013-2017 y el desplome en la
                    producción y en el precio internacional del petróleo agudizó la recesión y dio como resultado, en 2018,
                    que i) los salarios equivalieron a menos de 6 dólares mensuales, ii) la pobreza golpeara al 87% de la
                    población, iii) haya un 87% de desabastecimiento de fármacos y iv) la alimentación se convirtiera en un
                    asunto de supervivencia. Además, hay que sumarle el incremento de la inseguridad que posiciona a
                    Venezuela con la más alta tasa de homicidios de Latinoamérica y el Caribe en 2017. Causando que nosotras
                    no podamos conseguir medicamentos, la vida sea sumamente costosa y estemos expuestas algunos riesgos
                    como la inseguridad .
            </Text>
                <Text style={styles.subtitle}>
                    3.	A partir del segundo trimestre del 2019, el 80% de las empresas venezolanas paró o disminuyó su
                    producción y las empresas activas operan actualmente al 19% de su capacidad instalada; consecuentemente,
                    el empleo se redujo en 76%, principalmente en pequeñas y medianas empresas.Causando que no tenga la
                    posibilidad de obtener un empleo, con el cual subsistir y garantizar un mínimo vital.
            </Text>
                <Text style={styles.subtitle}>
                    4.	Desde hace años es evidente el desabastecimiento de alimentos y artículos de primera necesidad en la
                    gran mayoría de mercados venezolanos  (tiendas, supermercados, etc.); en 2019 unos 50.000 venezolanos
                    cruzan a diario el puente internacional Simón Bolívar, principal cruce peatonal en el fronterizo estado
            Táchira (oeste), para conseguir alimentos . </Text>
                <Text style={styles.subtitle}>
                    5.	Como ya había mencionado, en Venezuela hay desabastecimiento de medicamentos y otros insumos médicos en
                    los hospitales públicos, farmacias y en general en el mercado, lo que incrementa riesgos de mortalidad
                    infantil y riesgos en la maternidad. La tasa de mortalidad materna ha llegado al 130,7 por cada 100.000
                    nacimientos en el 2016 y la tasa de mortalidad infantil llegó a 18,61 por cada 10.000 nacidos vivos en el
                    2016.  Como la crisis continúa, lo más probable es que sigan en aumento dichas tasas de mortalidad.
                    Además, en 2018 la Sociedad Venezolana de Salud Pública reportó que el sistema solo tiene cobertura para
                    el 20% de la población.
            </Text>
                <Text style={styles.subtitle}>
                    6.	Todo lo anterior ha conllevado a que más de 4,5 millones de venezolanos  tengan que salir del país,
                    buscando otro Estado hermano en Latinoamérica , donde podamos encontrar ayuda básica para subsistir y
                    Colombia es uno de ellos, de hecho, tiene el mayor número de migrantes venezolanos con 1,4 millones.
            </Text>
                <Text style={styles.subtitle}>
                    7.	El día 15 de Mayo  de 2017, ingresé a Colombia de manera irregular vía terrestre a través de frontera
                    del departamento de Cucuta.
            </Text>
                <Text style={styles.subtitle}>
                    8.	No puedo volver a Venezuela porque no tengo forma de sostenerme económicamente, además temo por mi bienestar
                    e integridad pues la crisis de nuestro país ha generado demasiada inseguridad, desabastecimiento, problemas
                    institucionales, vulneraciones de derechos y violencia sistemática.
            </Text>
                <Text style={styles.subtitle}>
                    9.	Incluyó como beneficiaria del refugio a sobrina Alondra Josleidy Villasmil
            </Text>



                <Text style={styles.subtitle}>
                    BENEFICIARIOS
            </Text>
                <Text style={styles.subtitle}>
                    Sobrina: 1 año
                    NOMBRE: Alondra yosleidys Villamil flores
            </Text>


                <Text style={styles.subtitle}>
                    INFORMACIÓN DE INGRESO AL PAÍS
            </Text>
                <Text style={styles.subtitle}>
                    Forma de Ingreso: IRREGULAR
            </Text>
                <Text style={styles.subtitle}>
                    Día de Ingreso: Aproximadamente el 15 de mayo de 2017.
            </Text>
                <Text style={styles.subtitle}>
                    Ingresé por una trocha en la frontera entre el departamento Cúcuta, de Colombia.
            </Text>





                <Text style={styles.subtitle}>
                    CAUSAL PARA SER REFUGIADO.
            </Text>
                <Text style={styles.subtitle}>
                    Conforme a los hechos planteados yo y mis beneficiarios entramos en la causal del literal b
                    del art. 2.2.3.1.1.1. del Decreto 1067 de 2015 que es la misma de la Conclusión III de la
                    Declaración de Cartagena sobre Refugiados porque la razón de haber huido de Venezuela fue
                    por el desabastecimiento de alimentos y medicamentos en Venezuela que se traduce en una situación
                    de masiva vulneración de derechos humanos que afecta gravemente el orden público, tal como la ha planteado
                    el ACNUR en su nota de orientación sobre la protección internacional que requieren los venezolanos.
            </Text>
                <Text style={styles.subtitle}>
                    La ‘Declaración de Cartagena sobre los Refugiados’ promueve la ratificación de la Convención de Ginebra de 1951
                    entre aquellos Estados que aún no la habían firmado e impulsa la adopción de normas internas que faciliten
                    su aplicación. Su trascendencia internacional reside en la ampliación de la definición de persona refugiada. Se
                    incluye en la definición a las personas que han huido de sus países porque su vida, seguridad o libertad han sido amenazadas por la violencia
                    generalizada, la agresión extranjera, los conflictos internos, la violación masiva de los derechos humanos u otras
                    circunstancias que hayan perturbado gravemente el orden público.
            </Text>
                <Text style={styles.subtitle}>
                    La Declaración de Cartagena recoge el principio de no devolución llama a los países a buscar soluciones
                    duraderas como la repatriación voluntaria o la integración local y a realizar esfuerzos para erradicar las
                    causas que originan el problema de las personas refugiadas. Menciona además la difícil situación de las
                    personas desplazadas internas y enfatiza la importancia de normas mínimas para el trato de las personas
                    refugiadas en los flujos masivos.Igualmente, y según la definición consagrada en la Declaración Cartagena
                    de 1984
            </Text>
                <Text style={styles.subtitle}>
                    “Aquella persona que se hubiere visto obligada a salir de su país porque su vida, seguridad o libertad han sido
                    amenazadas por violencia generalizada, agresión extranjera, conflictos internos, violación masiva de derechos humanos,
                    u otras circunstancias que hayan perturbado el orden público.”
            </Text>
                <Text style={styles.subtitle}>
                    amenazados por motivos de violación masiva de derechos humanos o perturbación grave del orden público, por lo que somos
                    sujetos de protección.
            </Text>



                <Text style={styles.subtitle}>
                    SUJETOS DE ESPECIAL PROTECCIÓN: MENORES DE EDAD
            </Text>
                <Text style={styles.subtitle}>
                    Se desprende del siguiente apartado que el menor es un sujeto de especial protección debido a su condición
                    dentro de la sociedad, ya que se debe garantizar su desarrollo pleno, armónico e integral, junto con la
                    protección especial de sus derechos. Aunado a lo anterior, la misma corporación en sentencia T-510 de
                    2003 ha estipulado que los menores tienen un interés superior, definiendo este como:
            </Text>
                <Text style={styles.subtitle}>
                    “El interés superior del menor refleja una norma ampliamente aceptada por el derecho internacional,
                    consistente en que al menor se le debe otorgar un trato preferente, acorde con su caracterización jurídica
                    en tanto sujeto de especial protección, de forma tal que se garantice su desarrollo integral y armónico
                    como miembro de la sociedad. El interés superior del menor no constituye un ente abstracto, desprovisto
                    de vínculos con la realidad concreta, sobre el cual se puedan formular reglas generales de aplicación
                    mecánica. Al contrario: el contenido de dicho interés, que es de naturaleza real y relacional, sólo se
                    puede establecer prestando la debida consideración a las circunstancias individuales, únicas e
                    irrepetibles de cada menor de edad, que en tanto sujeto digno, debe ser atendido por la familia, la
                    sociedad y el Estado con todo el cuidado que requiere su situación personal.”
            </Text>
                <Text style={styles.subtitle}>
                    De estas categorías jurídicas, la Corte, ha propuesto que:
            </Text>
                <Text style={styles.subtitle}>
                    “Las decisiones adoptadas por las autoridades administrativas de Bienestar Familiar y las autoridades judiciales,
                    incluyendo los jueces de tutela, con el propósito de establecer las condiciones que mejor satisfacen el interés
                    superior de los niños en situaciones concretas, en el ejercicio de la discrecionalidad que les es propia y de
                    acuerdo a sus deberes constitucionales y legales, deben atender tanto a (i) criterios jurídicos relevantes,
                    es decir, los parámetros y condiciones establecidos por el ordenamiento jurídico para promover el bienestar infantil,
                    como a (ii) una cuidadosa ponderación de las circunstancias fácticas que rodean al menor involucrado, entendidas como
                    las circunstancias específicas del caso, visto en su totalidad y no atendiendo a aspectos aislados.”
            </Text>
                <Text style={styles.subtitle}>
                    Una de esas situaciones concretas de las que la Corte Constitucional habla, es precisamente la vulneración de derecho humanos,
                    que conlleva la falta de salud, educación y demás beneficios que en este momento le son negados a mis hijos por estar en una situación
                    de irregularidad en Colombia.
            </Text>




                <Text style={styles.subtitle}>
                    JUSTIFICACIÓN DE LA EXTEMPORANEIDAD DE LA SOLICITUD.
            </Text>
                <Text style={styles.subtitle}>
                    Conforme al parágrafo 1 del art. 2.2.3.1.6.1 del Decreto
                    1067 de 2015, justificó la extemporaneidad de esta solicitud de refugio.
            </Text>
                <Text style={styles.subtitle}>
                    Efectivamente han pasado más de dos (2) años, para esta solicitud, pero por
                    la falta de anuncios del Estado colombiano. Hay dos razones que justifican la
                    extemporaneidad nuestro actual estado de vulnerabilidad y la falta de asesoría
                    legal brindada por el Estado colombiano:
            </Text>
                <Text style={styles.subtitle}>
                    En primer lugar, los extranjeros venezolanos, como yo, que somos víctimas de la
                    migración internacional forzada, estamos en un gran estado de vulnerabilidad, porque
                    nos enfrentamos ante desigualdades estructurales o impedimentos fácticos (de facto) que
                    impiden nuestra integración a la sociedad del Estado receptor, uno de estos impedimentos
                    es el desconocimiento de la ley extranjera,  como la colombiana en este caso. Este concepto
                    de la desigualdad estructural fue acuñado por la Comisión de Derechos Humanos de las Naciones
                    Unidas y posteriormente reiterado por la Corte Interamericana de Derechos Humanos.
            </Text>
                <Text style={styles.subtitle}>
                    En segundo lugar, el Estado colombiano tiene la obligación internacional de brindar asesoría
                    jurídica gratuita a los migrantes indocumentados y a los refugiados, ante un eventual proceso
                    de deportación o privación de la libertad,  por la particular situación de vulnerabilidad en
                    que nos encontramos. Este deber del Estado colombiano viene de un estándar del Sistema
                    Interamericano de Derechos Humanos, porque es un Estado parte de la Convención Americana sobre
                    Derechos Humanos (CADH)  tiene el fin de proteger conjuntamente los derechos a las garantías
                    judiciales (art. 8 CADH) y a buscar y recibir asilo (art. 22-7 CADH).
            </Text>
                <Text style={styles.subtitle}>
                    no hemos recibido asesoría jurídica por parte del Estado, que me hubiera explicado el término
                    de los dos (2) meses para radicar una solicitud de refugio, dado que desconocía las Autoridades
                    competentes para hacerlo, la normatividad pertinente y nuestro mayor deseo era simplemente huir
                    de Venezuela y buscar mejores oportunidades, para salvar nuestras vidas de la crisis. Esto es
                    por los impedimentos fácticos que asumimos los venezolanos que huimos de nuestro país hacia Colombia
                    y la poca publicidad de las normas migratorias colombianas y por la falta de asesoría jurídica para
                    migrantes por parte del Estado. De haberlo sabido, habría hecho la solicitud en término.Sin embargo
                    luego de recibir la información me resulto imposible tomarme las fotos que se necesitaban para la
                    solicitud como lo fundamente en los hechos , en la crisis sanitaria actual la situación se ha
                    complejizado debido a que ya no puedo salir a trabajar , siendo yo el quien trae el sustento al hogar .
            </Text>





                <Text style={styles.subtitle}>
                    INFORMACIÓN DE CONTACTO
            </Text>
                <Text style={styles.subtitle}>
                    Yo, en calidad de solicitante, recibiré notificaciones conforme a los siguientes datos:
            </Text>
                <Text style={styles.subtitle}>
                    DIRECCIÓN:Calle 38ª #42D-53, Republica de israel en Cali.
            </Text>
                <Text style={styles.subtitle}>
                    Teléfono celular: 3011198.
            </Text>
                <Text style={styles.subtitle}>
                    Igualmente, MANIFIESTO AUTORIZACIÓN EXPRESA para notificación por correo electrónico cuya
                    cuenta es: eledeixysflores123@gmail.com
            </Text>




                <Text style={styles.subtitle}>
                    ANEXOS
            </Text>
                <Text style={styles.subtitle}>
                    Los documentos que relaciono como pruebas son:
            </Text>
                <Text style={styles.subtitle}>
                    ●	Copia de Cédula de Identidad Venezolana de ELEDEYXIS FLORES GLATEROL  No. 24419678
            </Text>


                <Text style={styles.subtitle}>
                    Cordialmente;
            </Text>
                <Text style={styles.subtitle}>
                    ELEDEYXIS FLORES GLATEROL
            </Text>
                <Text style={styles.subtitle}>
                    No.  24419678
            </Text>


            </View>




        </Page>
    </Document>


}