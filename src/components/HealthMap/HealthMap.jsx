import React, { useEffect, useState } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as comunitiesData from './Hospitals.json'
import AppContext from '../../App/AppContext';
import { Button } from '@material-ui/core';

const Map = () => {
    const [selectedComunity, setSelectedComunity] = useState(null);
    const { UseDataMapsComunity } = AppContext.Consumer();
    const [dataMapsComunity, setDataMapsComunity] = UseDataMapsComunity();

    const { nombreComunidad, descripcionComunidad, direccionComunidad, telefonoComunidad, imgComunidad, email } = dataMapsComunity;

    useEffect(() => {
        setDataMapsComunity("");
    }, [])

    return (
        <GoogleMap defaultZoom={12} defaultCenter={{
            lat: 3.412414505047919,
            lng: -76.52585785099772
        }}
        >
            {comunitiesData.features.map((comunities) => (

                <Marker key={comunities.properties.PARK_ID}
                    position={{
                        lat: comunities.geometry.coordinates[0],
                        lng: comunities.geometry.coordinates[1]
                    }}
                    onClick={() => {
                        setSelectedComunity(comunities);
                        setDataMapsComunity({
                            ...dataMapsComunity, descripcionComunidad: comunities.properties.DESCRIPTIO, nombreComunidad: comunities.properties.NAME,
                            direccionComunidad: comunities.properties.ADDRESS, telefonoComunidad: comunities.properties.PHONE_NUMBER,
                            imgComunidad: comunities.properties.PICTURE, email: comunities.properties.EMAIL
                        });
                    }}
                    icon={{
                        url: '/icons/Marker.png',

                    }}
                />
            ))}
            {selectedComunity && (
                <InfoWindow position={{
                    lat: selectedComunity.geometry.coordinates[0],
                    lng: selectedComunity.geometry.coordinates[1]
                }}
                    onCloseClick={() => {
                        setSelectedComunity(null);
                    }}
                >

                    <div className="mapTag">
                        <img className="mapImgTag" src={selectedComunity.properties.PICTURE} alt="" />
                        <h3>{selectedComunity.properties.NAME}</h3>
                        <p>{selectedComunity.properties.PHONE_NUMBER}</p>
                        <p>{selectedComunity.properties.EMAIL}</p>
                    </div>
                </InfoWindow>

            )}
        </GoogleMap>
    );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const HealthMap = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();
    const [healthPage, setHealthPage] = useState(0);

    useEffect(() => {
        Step("Faq");
    }, [])


    switch (healthPage) {
        case 0:
            return <div className="comunity">
                <h1>Urgencia Medica</h1>
                <div className="formDescription">
                    <div className="formDescription__info">
                        <div>
                            <h3>¿Qué es una Urgencia médica?</h3>
                            <p>Una urgencia es una alteración a tu integridad física o mental. Esta puede estar causada por un accidente, enfermedad o cualquier otro motivo por el cual requieras atención medica inmediata para disminuir los riesgos de invalidez y muerte. Debes acudir al hospital publico mas cercano para recibir atención.
                                <br />
                                A continuación te mostramos un mapa con los hospitales públicos mas cercanos a los cuales acudir </p>
                            <Button className="formDescription__info__btn" key="1" variant="contained" color="primary" onClick={() => setHealthPage(1)}>
                                Ir al mapa
                            </Button>
                        </div>
                        <img className="formDescription__info__img" src="/images/refugiado.png" alt="" />
                    </div>
                </div>

            </div>
            break;

        case 1:
            return <div className="comunity">
                <h1>Urgencia Medica</h1>
                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDtYBdEwc_JoqUrA-GDkOwmv-K0YVrAoAw"}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />} />

            </div>
            break;

        default:
            break;
    }
    return <div></div>
}
export default HealthMap;
