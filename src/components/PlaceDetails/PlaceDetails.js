import React from 'react';
import './PlaceDetails.css';

const PlaceDetails = ({ place, selected, refProp }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <div className="card">
            <div className="card-image">
                <img src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} />
            </div>
            <div className="content" style={{ textAlign: 'center' }}>
                <h2 className="card-title">{place.name}</h2>
                <div className="content-show">
                    <span>Rating</span>
                    <p>{place.rating ? place.rating : "3.5"}</p>
                </div>
                <div className="content-show">
                    <span>Review</span>
                    <p>{place.num_reviews} review{place.num_reviews > 1 ? 's' : ''}</p>
                </div>
                <div className="content-show">
                    <span>Price</span>
                    <p>{place.price ? place.price : "$700 - $1,000"} </p>
                </div>

                <div className="content-show">
                    <span>Phone No.</span>
                    <p className="card-phone">{place.phone ? place.phone : "No Phone Number Available"}</p>
                </div>
                <div className="cusines">
                    {
                        place?.cuisine?.map(({name}) => (
                             <span key={name} className='cusines-name'> {name}</span>  
                        ))
                    }
                </div>

                <div className="description">
                    <span className='bold'>Description</span>
                    <p className="card-description">{place.description ? place.description : "No Description Available"}</p>
                </div>
                <div >
                    <span className='bold'>Address</span>
                    <p className="card-address">{place.address ? place.address : "No Address Available"}</p>
                </div>

                <div className="button-container">
                    <button className='btn' type='button' onClick={() => window.open(place.web_url, "_blank")}>Trip Advisor</button>
                    <button className='btn' type='button' onClick={() => window.open(place.website, "_blank")}>Website</button>
                </div>

            </div>
        </div>
    )
}

export default PlaceDetails;