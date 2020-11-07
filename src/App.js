import {useState, } from 'react'
import Search from "./Components/Search"
import DrawUserCard from './Components/DrawUserCard'

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
      <DrawUserCard
        isLoading={isLoading}
        searchResult={searchResult}
        userRepos={userRepos}
      />
    </>
  );
}

export default App;
