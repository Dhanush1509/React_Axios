import React,{useState,useEffect} from 'react'
import Pokemonlist from './Pokemonlist';
import Pagination from "./Pagination";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
function App() {
const [pokemon,setPokemon]=useState(["hi","pikachu"]);
const [currentpageUrl, setCurrentpageUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
const [prevpageUrl, setPrevpageUrl] = useState();
const [nextpageUrl, setNextpageUrl] = useState();
const [loading,setLoading] = useState(true);
useEffect(() => {
    let cancel;
   setLoading(true);
   axios.get(currentpageUrl,{
       cancelToken:new axios.CancelToken(c=>cancel=c)
   }).then((res) => {
       setLoading(false);
       setNextpageUrl(res.data.next);
       setPrevpageUrl(res.data.previous);
     setPokemon(res.data.results.map((p) => p.name));
   });
     return () => {
       cancel();}
    }
  
, [currentpageUrl])
function gotoNext(){
    setCurrentpageUrl(nextpageUrl);
}
function gotoPrevious() {
  setCurrentpageUrl(prevpageUrl);
}
if(loading) return <CircularProgress />;


    return (
      <div>
        
        <Pokemonlist pokemon={pokemon} />
        <Pagination next={nextpageUrl?gotoNext:null} prev={prevpageUrl?gotoPrevious:null} />
      </div>
    );
}
export default App;
