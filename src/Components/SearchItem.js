function SearchItem({setSelectedCity,searchItem}) {
    console.log(searchItem)
    return ( <div onClick = {() => setSelectedCity(searchItem)} class="p-1 border-solid border-2 border-black">
        
        {searchItem}</div>);
}

export default SearchItem;