import React from "react";
import {
  CardStyle,
  CardsStyle,
  ButtonStyle,
  TitleStyle,
  CardsImageStyle,
} from "../Styles/Card.style";
import { fakeImg, imgUrl } from "../constants/global";

import { NavLink } from "react-router-dom";

type Props = {
  data: ApiData[];
};
type ApiData = {
  poster_path: string;
  title: string;
  id: number;
};

const Card = ({ data }: Props) => {
  const SetImagePath = (title:string,path:string)=>{
    localStorage.setItem(title,path)
  }
  return (
    <CardsStyle>
      {data.map((item: ApiData, index) => {
        return (
          <CardStyle key={index}>
            <CardsImageStyle src={item.poster_path ? imgUrl + item.poster_path : fakeImg} alt="path" />
            <TitleStyle>{item.title}</TitleStyle>
            <NavLink to={`/booking/${item.id}/${item.title}`}>
              <ButtonStyle onClick={()=>SetImagePath(item.title,item.poster_path)}>Book Now</ButtonStyle>
            </NavLink>
          </CardStyle>
        );
      })}
    </CardsStyle>
  );
};

export default Card;
