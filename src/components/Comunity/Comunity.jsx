import React, { useEffect, useState } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as comunitiesData from './Comunities.json'
import comunityMapStyle from './comunityMapStyle'
import AppContext from '../../App/AppContext';
import "./Comunity.scss"
import { Button } from '@material-ui/core';

const Map = () => {
    const [selectedComunity, setSelectedComunity] = useState(null);
    const { UseDataMapsComunity } = AppContext.Consumer();
    const [dataMapsComunity, setDataMapsComunity] = UseDataMapsComunity();

    const { nombreComunidad, descripcionComunidad, direccionComunidad, telefonoComunidad, imgComunidad } = dataMapsComunity;
    useEffect(() => {
        setDataMapsComunity("");
    }, [])
    return (
        <GoogleMap defaultZoom={13} defaultCenter={{
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
                            imgComunidad: comunities.properties.PICTURE
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
                        <p>{selectedComunity.properties.ADDRESS}</p>
                    </div>
                </InfoWindow>

            )}
        </GoogleMap>
    );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Comunity = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Faq");
    }, [])


    return (
        <div className="comunity">



            <div className="boarding">
                <div className="boarding__Container">
                    <div className="boarding__Close">
                        <img src="/icons/close.svg" alt="" />
                    </div>
                    <img src="/images/boarding5.png" alt="" />
                    <h2>Tu ruta</h2>
                    <p>Aquí encontraras los diferentes tramites en el caso de que seas un migrante irregular o regular.</p>
                    <Button variant="contained" color="primary" className="next__style">
                        Siguiente
                    </Button>

                </div>
            </div>




            <h1>Comunidad</h1>

            <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDtYBdEwc_JoqUrA-GDkOwmv-K0YVrAoAw"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />} />

        </div>
    )
}

export default Comunity;
