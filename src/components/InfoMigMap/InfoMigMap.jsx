import React, { useEffect, useState } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as comunitiesData from './Consultories.json'
import AppContext from '../../App/AppContext';

const Map = () => {
    const [selectedComunity, setSelectedComunity] = useState(null);
    const { UseDataMapsComunity } = AppContext.Consumer();
    const [dataMapsComunity, setDataMapsComunity] = UseDataMapsComunity();

    const {nombreComunidad, descripcionComunidad, direccionComunidad, telefonoComunidad, imgComunidad, email} = dataMapsComunity;

    useEffect(() => {
        setDataMapsComunity("");
    }, [])

    return (
        <GoogleMap defaultZoom={6} defaultCenter={{
            lat: 3.8677971220831284,
            lng: -73.43140983442527
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
                        setDataMapsComunity({ ...dataMapsComunity, descripcionComunidad:  comunities.properties.DESCRIPTIO, nombreComunidad:  comunities.properties.NAME,
                            direccionComunidad:  comunities.properties.ADDRESS, telefonoComunidad:  comunities.properties.PHONE_NUMBER, 
                            imgComunidad:  comunities.properties.PICTURE, email:  comunities.properties.EMAIL});
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

const InfoMigMap = () => {
    const { useFaq } = AppContext.Consumer();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Faq");
    }, [])


    return (
        <div className="comunity">
            <h1>Espacio Jur??dico</h1>

            <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDtYBdEwc_JoqUrA-GDkOwmv-K0YVrAoAw"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />} />

        </div>
    )
}

export default InfoMigMap;
