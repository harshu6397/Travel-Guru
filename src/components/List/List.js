import React from 'react';
import './List.css';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import Loader from '../Loader/Loader';

const List = ({ places, type, setType, rating, setRating, loading }) => {
    return (
        <div>
            <div className="container">
                <h2>Resturatents, Hotels and Attractions around you</h2>
                {
                    loading ? <Loader /> : (
                        <>
                            <div className='selection' >
                                <label className='type'>Type</label>
                                <select value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="restaurants">Resturants</option>
                                    <option value="hotels">Hotels</option>
                                    <option value="attractions">Attractions</option>
                                </select>
                                <label className='rating'>Rating</label>
                                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                                    <option value={0}>All</option>
                                    <option value={3}>Above 3.0</option>
                                    <option value={4}>Above 4.0</option>
                                    <option value={4.5}>Above 4.5</option>
                                </select>
                            </div>
                            <div className="place-details-container">
                                {places?.map((place, i) => {
                                    return <div className="individual-item" key={i}>
                                        <PlaceDetails place={place} />
                                    </div>
                                })}
                            </div>
                        </>
                    )}

            </div>
        </div>
)}

            export default List;