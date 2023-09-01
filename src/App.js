import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import { useState } from 'react';
function App() {

  const [selectedCity,setSelectedCity] = useState(null);
  return (
   
      <div class="w-full h-[100vh]  flex-col items-center flex ">
      <Search setSelectedCity={setSelectedCity}></Search>
      {selectedCity !== null &&
        <div>{selectedCity}</div>
      }
    </div>
  );
}

export default App;
