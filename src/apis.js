
export const getWeatherOptions = {
	method: 'GET',
    headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
