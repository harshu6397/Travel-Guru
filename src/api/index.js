import axios from "axios";

const apikey = process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY;

export const getPlaceData = async (type, sw, ne) => {
    try {
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude:  sw.lng,
                tr_longitude:  ne.lng,  
            },
            headers: {
                'X-RapidAPI-Key': apikey,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}