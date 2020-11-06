import {useState, } from 'react'
import Search from "./Components/Search"
import DrawUserCard from './Components/DrawUserCard'

function App() {

  const [searchResult, setSearchResult] = useState()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Search 
        setSearchResult={setSearchResult} 
        setIsLoading={setIsLoading}/>
      <DrawUserCard
        isLoading={isLoading}
        searchResult={searchResult}
      />
    </>
  );
}

export default App;
