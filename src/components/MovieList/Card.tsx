import React from "react";
import {
  CardStyle,
  CardsStyle,
  ButtonStyle,
  TitleStyle,
  CardsImageStyle,
} from "../Styles/Card.style";
import { fakeImg, imgUrl } from "../constants/global";

import { useNavigate } from "react-router-dom";

type Props = {
  data: ApiData[];
};
type ApiData = {
  poster_path: string;
  title: string;
  id: number;
};


const Card = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <CardsStyle>
      {data.map((item: ApiData , index) => {
        return (
          <CardStyle key={index}>
            {
              item.poster_path ? <CardsImageStyle src={imgUrl + item.poster_path} alt="path" /> :
              <CardsImageStyle src={fakeImg} alt="path" />

            }
            <TitleStyle>{item.title}</TitleStyle>,
            <ButtonStyle
              onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
                navigate("/booking", {
                  state: { path: imgUrl + item.poster_path, MovieId: item.id },
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
