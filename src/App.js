import {useState, } from 'react'
import Search from "./Components/Search"
import DrawUserCard from './Components/DrawUserCard'
require('dotenv').config()

function App() {

  const [searchResult, setSearchResult] = useState()
  const [userRepos, setUserRepos] = useState()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Search 
        setSearchResult={setSearchResult} 
        searchResult={searchResult}
        setIsLoading={setIsLoading}
        setUserRepos={setUserRepos}
        />
      {isLoading && <div className="spinner"/>}
      {!isLoading && <DrawUserCard
        // isLoading={isLoading}
        key={Date.now().toString()}
        searchResult={searchResult}
        userRepos={userRepos}
      />}
    </>
  );
}

export default App;