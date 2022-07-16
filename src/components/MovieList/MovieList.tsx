import {useEffect, useState} from 'react'
import Card from './Card';
import PNF from './PNF'
import { CardDivStyle } from "../Styles/Card.style";
import {searchUrl , apiUrl} from '../constants/global'

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
      GetMovie(apiUrl);
    } else {
      GetMovie(searchUrl + input);
    }

  },[input])
  return (
    <CardDivStyle>
       {data.length === 0 ? <PNF /> : <Card data={data} />} 
    </CardDivStyle>
  )
}

export default MovieList