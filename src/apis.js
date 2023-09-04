export const getCityOptions = {
	method: 'GET',
    headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_CITY_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const getWeatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
}

