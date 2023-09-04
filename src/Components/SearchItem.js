
import {
    ListItem,
    ListItemSuffix,
    Chip,
    Card,
  } from "@material-tailwind/react";
  import LocationCityIcon from '@mui/icons-material/LocationCity';
function SearchItem({setSelectedCity,searchItem,handleCityClick }) {
    console.log(searchItem)
    return ( <div  onClick = {() => handleCityClick(searchItem)} class= "whitespace-nowrap  overflow-x-auto cursor-pointer w-full py-2 flex items-center    ">
        <LocationCityIcon class="mr-2 h-[28px]  relative bottom-[1px]"></LocationCityIcon>
        {searchItem.name}</div>);
}

export default SearchItem;

