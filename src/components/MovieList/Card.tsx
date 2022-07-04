import React from "react";
import {
  CardStyle,
  CardsStyle,
  ButtonStyle,
  TitleStyle,
  CardsImageStyle,
} from "../Styles/Card.style";

import { useNavigate } from "react-router-dom";

type Props = {
  data: ApiData[];
};
type ApiData = {
  poster_path: string;
  title: string;
  id: number;
};
const IMG_URL:string = "https://image.tmdb.org/t/p/w500";
const fake_img = "http://via.placeholder.com/1080x1580";

const Card = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <CardsStyle>
      {data.map((item: ApiData , index) => {
        return (
          <CardStyle key={index}>
            {
              item.poster_path ? <CardsImageStyle src={IMG_URL + item.poster_path} alt="path" /> :
              <CardsImageStyle src={fake_img} alt="path" />

            }
            <TitleStyle>{item.title}</TitleStyle>,
            <ButtonStyle
              onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
                navigate("/booking", {
                  state: { path: IMG_URL + item.poster_path, MovieId: item.id },
                });
              }}
            >
              Book Now
            </ButtonStyle>
          </CardStyle>
        );
      })}
    </CardsStyle>
  );
};

export default Card;
