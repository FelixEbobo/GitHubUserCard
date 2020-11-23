import React, { useState } from 'react'
import '../static/css/reset.css'
import '../static/css/search-from.css'
import {repQuery, pinRepQuery} from "../static/js/GraphQLQueries"

const Search = ({setSearchResult, setIsLoading, 
                 searchResult, setUserRepos}) => {

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
        // const {repos_url} = searchResult
        const userRepos = await fetchReps(searchResult.login.toLowerCase())
        searchResult.pinned = await fetchPinnedReps(searchResult.login.toLowerCase())
        console.log(userRepos)
        setUserRepos(Array.from(userRepos))
        setSearchResult(searchResult)
        setIsLoading(false)
    }

    const fetchReps = async (login) => {
        return fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,   
            },
            body: JSON.stringify({
                query: repQuery.replace("{login}", login)
            })
        })
        .then(res => res.json())
        .then(data => data.data.repositoryOwner.repositories.edges)
    }

    const fetchPinnedReps = async (login) => {
        return fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
            body: JSON.stringify({
                query: pinRepQuery.replace("{login}", login)
            })
        })
        .then(res => res.json())
        .then(data => data.data.repositoryOwner.pinnedItems.edges)
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