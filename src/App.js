import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import { useState } from 'react';
import CurrentWeather from './Components/CurrentWeather';
function App() {

  const [selectedCity,setSelectedCity] = useState(null);
  
  function handleCityClick(city) {
    setSelectedCity(city)
    try {
     
    }
    catch (error){
      console.log(error)
    }
  }
  return (
   
      <div class="w-full h-[100vh]  flex-col items-center flex ">
      <Search handleCityClick={handleCityClick} setSelectedCity={setSelectedCity}></Search>
      {selectedCity !== null &&
        <div>{selectedCity}</div>
      }
      <CurrentWeather city={selectedCity}/>
    </div>
  );
}

export default App;
