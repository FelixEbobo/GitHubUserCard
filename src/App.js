import {useState, useEffect} from 'react'
import Search from "./Components/Search"
import DrawCard from './Components/DrawCard'

function App() {

  const [searchResult, setSearchResult] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Search 
        setSearchResult={setSearchResult} 
        setIsLoading={setIsLoading}/>
      <DrawCard
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
