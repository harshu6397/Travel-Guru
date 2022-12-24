import React from 'react';
import "./Map.css";
import GoogleMapReact from 'google-map-react';
import { Rating } from '@material-ui/lab';
import mapStyles from './mapStyles';

const Map = ({ coordinates, setCoordinates, setBounds, places}) => {
    
    return (
        <div className="map-container" style={{ height: "91vh", width: "70vw" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
            >
                {places?.map((place, i) => (
                    <div
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {false ? (<i class="placeicon fa-2x fas fa-map-marker-alt"></i>) 
                                : (
                                    <div className="map-card-container">
                                        <h4>{place.name}</h4>
                                        <img src={ place.photo ? place.photo.images.large.url : "https://media-cdn.tripadvisor.com/media/photo-w/0e/e3/e2/1c/taj-view-point.jpg"} alt={place.name} />
                                        <Rating size='small' value={Number(place.rating)} readOnly/>
                                    </div>
                            )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map;