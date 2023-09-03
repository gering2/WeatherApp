import Turnstone from 'turnstone'
import { useState } from 'react';
import {getCityOptions} from '../apis.js'
import SearchItem from './SearchItem.js';
import debounce from 'lodash/debounce.js';
import {
    List,
    ListItem,
    ListItemSuffix,
    Chip,
    Card,
  } from "@material-tailwind/react";
import _ from 'lodash';
function Search({handleCityClick,setSelectedCity}) {

    const [searchQuery,setSearchQuery] = useState("")
    const [currentResult,setCurrentResult] = useState([])
    const maxItems = 10;
    const minCityPopulation = 1000000;
    const listbox = [
        {
            id: 'cities',
            name: 'cities',
            data: (query) => {
                fetchSearch(query)
            },
            searchType:'startsWith'
        }
    ]
   async function handleSearchChange(e) {
    if(e.target.value !== ""){
        const res = await fetchSearch(e.target.value)
        console.log(res)
         setCurrentResult(res.map((city) => {
             return city.name
         }))
    }
     

    }
    async function fetchSearch(query) {
        try {
            console.log(getCityOptions)
            const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&minPopulation=${minCityPopulation}`,getCityOptions);
            const result = await response.json()
            const newres = await result.data.map((city) => {
              return {
                name:city.name,
                latitude:city.latitude,
                longitude:city.longitude
            }
            })
            console.log(typeof(newres))
            return newres

        } catch (error) {
            console.error(error);
        }
    }
   return (

    
<div class="w-[80%] h-[40%] p-4 mt-10 ">

    <input type="search" class="peer p-2 h-10 w-full flex   rounded-[7px] border border-blue-gray-200   bg-transparent 
    px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border 
    placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 
     focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
 placeholder="Enter City" onChange={ _.debounce(handleSearchChange,2000)} />
 <div class ="mt-3 px-3">
    <List>
    {
        currentResult.map((result) => {
            
            return <SearchItem handleCityClick={handleCityClick} setSelectedCity={setSelectedCity} searchItem={result}></SearchItem>
        })
    }
</List>
    </div>
    </div>
   )
  
}

export default Search ;