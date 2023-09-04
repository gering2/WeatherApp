import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import { useState } from 'react';
import CurrentWeather from './Components/CurrentWeather';
function App() {

  const [selectedCity,setSelectedCity] = useState(null);
  const [searchFocused,setSearchFocused] = useState(false)

  function handleCityClick(city) {
    console.log(city)
    setSelectedCity(city)
    setSearchFocused(false)
    try {
     
    }
    catch (error){
      console.log(error)
    }
  }
  return (
   
      <div class="  bg-cover w-full h-[100vh]  flex-col items-center flex bg-[url('./Images/clouds.jpg')]">
      <Search setSearchFocused={setSearchFocused}searchFocused={searchFocused} handleCityClick={handleCityClick} selectedCity={selectedCity} setSelectedCity={setSelectedCity}></Search>
     
      <CurrentWeather class="backdrop-blur-lg" city={selectedCity}/>
    </div>
  );
}

export default App;
