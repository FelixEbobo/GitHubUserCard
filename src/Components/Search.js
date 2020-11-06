import React, { useState } from 'react'
import '../static/css/reset.css'
import '../static/css/search-from.css'

const Search = ({setSearchResult, setIsLoading}) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = async (event) => {
        setSearchResult();
        event.preventDefault();
        const searchValue = searchQuery.toLowerCase();
        const url = "https://api.github.com/users/" + searchValue
        // console.log(url)
        setSearchQuery('')
        setIsLoading(true)
        const searchResult = await (await fetch(url)).json()
        // console.log(searchResult)
        setIsLoading(false)
        setSearchResult(searchResult)
    }
    
    const handleChange = event => {
        setSearchQuery(event.target.value)
    }

    return (<>
        <form onSubmit={handleSearch}>
            <input 
                type="text"
                id="searchQuery"
                name="searchQuery"
                placeholder="Enter a user name" 
                value={searchQuery}
                onChange={handleChange}></input>
            <button type="submit">Search</button>
        </form>
        </>
    )
}


export default Search