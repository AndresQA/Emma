import React, { useState } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as comunitiesData from './Comunities.json'
import comunityMapStyle from './comunityMapStyle'
import "./Comunity.scss"

const Map = () => {
    const [selectedComunity, setSelectedComunity] = useState(null);

    return (
        <GoogleMap defaultZoom={13} defaultCenter={{
            lat: 3.412414505047919,
            lng: -76.52585785099772
        }}
        defaultOptions={{styles: comunityMapStyle}}
        >
            {comunitiesData.features.map((comunities) => (

                <Marker key={comunities.properties.PARK_ID} 
                position={{
                    lat: comunities.geometry.coordinates[0],
                    lng: comunities.geometry.coordinates[1]
                }}
                    onClick={() => {
                        setSelectedComunity(comunities);
                    }}
                    icon={{
                        url: '/icons/Marker.png',

                    }}
                />
            ))}
            {selectedComunity && (
                <InfoWindow  position={{
                    lat: selectedComunity.geometry.coordinates[0],
                    lng: selectedComunity.geometry.coordinates[1]
                }}
                onCloseClick={()=>{
                    setSelectedComunity(null);
                }}
                >

                    <div>
                        <h2>{selectedComunity.properties.NAME}</h2>
                        <p>{selectedComunity.properties.DESCRIPTIO}</p>
                    </div>
                </InfoWindow>

            )}
        </GoogleMap>
    );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Comunity = () => {
    return (
        <div className="comunity">
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
