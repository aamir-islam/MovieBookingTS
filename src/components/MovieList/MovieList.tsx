import {useEffect, useState} from 'react'
import Card from './Card';
import PNF from './PNF'
import { CardDivStyle } from "../Styles/Card.style";

type Props = {
  input : string
}
interface  obj {
  results:MovieData[]
}
type MovieData = {
  id:number,
  title:string,
  poster_path : string
}
const API_KEY = "api_key=336ff2d06750b1a068e736a78e81d04f";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

const MovieList = ({input}: Props) => {

  const [data, setData] = useState<MovieData[]>([])

  const GetMovie = async (url:string) =>  {
    const res = await fetch(url);
    const resResults:obj = await res.json();
    const result = resResults.results;
    setData(result);

  };  
  useEffect(()=>{
    if (input.length === 0) {
      GetMovie(API_URL);
    } else {
      GetMovie(searchURL + input);
    }

  },[input])
  return (
    <CardDivStyle>
       {data.length === 0 ? <PNF /> : <Card data={data} />} 
    </CardDivStyle>
  )
}

export default MovieList