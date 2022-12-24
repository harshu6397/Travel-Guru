// npm install @material-ui/core @material-ui/icons @material-ui/lab @react-google-maps/api axios google-map-react
import React, {useState, useEffect} from "react";
import Navbar from "./components/NavBar/Navbar";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import "./App.css";
import { getPlaceData } from "./api";

const App = () => {
    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [loading, setLoading] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => Number(place.rating) > rating);
        setFilteredPlaces(filteredPlaces);
    }, [rating])

    useEffect(() => {
        setLoading(true);
        getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
            console.log(data);
            setPlaces(data);
            setFilteredPlaces([]);
            setLoading(false);
        });
    }, [type, coordinates, bounds]);

    return(
        <>
            <Navbar setCoordinates={setCoordinates}/>
            <div className="grid-container">
                <List 
                places={filteredPlaces.length? filteredPlaces : places}
                type={type}
                setType={setType}
                rating={rating}
                setRating={setRating}
                loading={loading}
                />
                <Map 
                coordinates = {coordinates}
                setCoordinates={setCoordinates}
                setBounds = {setBounds}
                places={filteredPlaces.length? filteredPlaces : places}
                />
            </div>
        </>

    )
}

export default App;