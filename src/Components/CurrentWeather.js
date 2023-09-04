import { useEffect, useState } from "react";
import { getWeatherOptions } from "../apis";

function CurrentWeather({city}) {
    const [weatherData,setWeatherData] = useState(null)
    useEffect( () => {

        try {
            if(city !== null) {
                console.log(city)
                const fetchData = async () => {
                    const resWeather = await fetchWeather(city)
                    setWeatherData(resWeather)
                    console.log(weatherData)
                }
                fetchData()
            }
         
        }
        catch(error){
            console.log(error)
        }
    },[city])
    async function fetchWeather(city) {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city.latitude}%2C${city.longitude}`,getWeatherOptions);
        const res = await response.json();
        return res
    }
 
    return (weatherData !== null && 
    <div class="p-6 border-[1px]  rounded-md flex flex-col items-center">
        {console.log(weatherData)}
        <p class="text-xl">{city.name}</p>
        <p class="text-5xl p-4  ">{weatherData.current.temp_f}</p>
        <p class="text-sm">Percipitation (in):<span class="px-2">{weatherData.current.precip_in}</span></p>
        <p class="text-sm">Wind (mph):<span class="px-2 ">{weatherData.current.wind_mph}</span></p>
        
    </div> );
}

export default CurrentWeather;