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

    const { useDataForms } = AppContext.Consumer()
    const [dataForms, setDataForms] = useDataForms();

    const refContainer = useRef<any>();



    return <div className="pdfContainer" ref={refContainer} style={{ width: "1080", height: "1920" }}>
        <PDFViewer>
            <Documento {...dataForms} />
        </PDFViewer>

        <div className="download">
            <img className="downloadImg" src="/images/descargar.png" alt="Descargar" />
            <PDFDownloadLink document={<Documento {...dataForms} />} fileName="formato.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' :
                        <Button className="nextBtn" variant="contained">Descargar</Button>

                }
            </PDFDownloadLink>
        </div>
    </div >
}

export default PDF;

///////// Maquetacion del documento pdf

const Documento = ({ formaIngreso, lugarIngreso, selectedDate, nombreSolicitante }: any) => {



    return <Document >
        <Page style={styles.body} size="A4">
            <View>
                <Text>Documento PDF de {nombreSolicitante} y tengo {formaIngreso} años de edad</Text>
            </View>
            <View>
                <Text>Venezuela es un país que se encuentra en una grave crisis institucional, social, económica y política, lo que implica que la mayoría de migrantes que salen de Venezuela lo hacen por las masivas vulneraciones de derechos humanos que afectan gravemente el orden público.  En otras palabras, “La crisis multidimensional de Venezuela conduce a que miles de ciudadanos abandonen su país por el colapso socioeconómico, por la persecución política o por la violencia y la inseguridad, en busca de garantizar el derecho a la vida, la salud, la alimentación, la integridad y la libertad personal” .Lo que genera que mi sobrina y yo no podamos volver a Venezuela en estos momentos, pues estaríamos en condiciones vulnerables por el contexto del país.</Text>
            </View>


        </Page>
    </Document>


}