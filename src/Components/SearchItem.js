
import {
    ListItem,
    ListItemSuffix,
    Chip,
    Card,
  } from "@material-tailwind/react";
  import LocationCityIcon from '@mui/icons-material/LocationCity';
function SearchItem({setSelectedCity,searchItem,handleCityClick }) {
    console.log(searchItem)
    return ( <ListItem  onClick = {() => handleCityClick(searchItem)} className="p-1 py-5 flex items-center h-8  ">
        <LocationCityIcon class="mr-2 h-6 relative bottom-[1px]"></LocationCityIcon>
        {searchItem}</ListItem>);
}

export default SearchItem;

