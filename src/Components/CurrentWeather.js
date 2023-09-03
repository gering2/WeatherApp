import { useEffect } from "react";
function CurrentWeather({city}) {
    useEffect( () => {

        try {
            const fetchData = async () => {
                const test = await fetchWeather(city)
                console.log(test)
            }
        }
        catch(error){
            console.log(error)
        }
    },[city])
    async function fetchWeather(city) {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city.lattitude}%2C${city.longitude}`);
        const res = await response.json();
        return res
    }
 
    return (<div></div> );
}

export default CurrentWeather;