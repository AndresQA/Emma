import React from 'react';
import GoogleMaps from "simple-react-google-maps";
import "./Comunity.scss"

const Comunity = () => {
    return (
        <div className="comunity">
            <h1>Comunidad</h1>
            <GoogleMaps
                apiKey={"AIzaSyDtYBdEwc_JoqUrA-GDkOwmv-K0YVrAoAw"}
                style={{ height: "100%", width: "100%" }}
                zoom={13}
                center={{
                    lat: 3.412414505047919,
                    lng: -76.52585785099772
                }}
                markers={[
                    { lat: 3.40266659366282, lng: -76.53803398008776 },
                    { lat: 3.4355196816293874, lng: -76.5156598182754 },
                    { lat: 3.416787795670481,  lng: -76.51522676998226 }
                ]}
            />


        </div>

    )

}

export default Comunity;