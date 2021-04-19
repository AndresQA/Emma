import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import styles from "./style";

interface PropsDocument {
    nombre: string;
    edad: string;
}


const PDF = () => {

    const refContainer = useRef<any>();
    const [data, setData] = useState<PropsDocument>({
        nombre: "",
        edad: ""
    })

    const onSendData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let doc = event.target as HTMLFormElement;
        let nombre = (doc.querySelector("#nombre") as HTMLInputElement).value;
        let edad = (doc.querySelector("#edad") as HTMLInputElement).value;


        setData({
            nombre,
            edad
        })

    }


    useEffect(() => {


        let HTMLContainer = refContainer.current as HTMLDivElement;


    }, [])


    return <div className="pdfContainer" ref={refContainer} style={{ width: "1080", height: "1920" }}>
        <h1>Hola soy un pdf</h1>

        <form onSubmit={onSendData}>
            <label >
                <input id="nombre" type="text" placeholder="Mi nombre" />
            </label>
            <label >
                <input id="edad" type="text" placeholder="Mi nombre" />
            </label>

            <button type="submit">Enviar</button>
        </form>

        <PDFViewer>
            <Documento {...data} />
        </PDFViewer>


        <PDFDownloadLink document={<Documento />} fileName="formato.pdf">
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download now!'
            }
        </PDFDownloadLink>
    </div >
}

export default PDF;


const Documento = ({ nombre, edad }: PropsDocument & any) => {

    return <Document >
        <Page style={styles.body} size="A4">
            <View>
                <Text>Documento PDF de {nombre} y tengo {edad} años de edad</Text>
            </View>
            <View>
                <Text>Venezuela es un país que se encuentra en una grave crisis institucional, social, económica y política, lo que implica que la mayoría de migrantes que salen de Venezuela lo hacen por las masivas vulneraciones de derechos humanos que afectan gravemente el orden público.  En otras palabras, “La crisis multidimensional de Venezuela conduce a que miles de ciudadanos abandonen su país por el colapso socioeconómico, por la persecución política o por la violencia y la inseguridad, en busca de garantizar el derecho a la vida, la salud, la alimentación, la integridad y la libertad personal” .Lo que genera que mi sobrina y yo no podamos volver a Venezuela en estos momentos, pues estaríamos en condiciones vulnerables por el contexto del país.</Text>
            </View>


        </Page>
    </Document>


}