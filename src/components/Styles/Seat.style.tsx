import styled from "styled-components";
import { ButtonStyle } from '../Styles/Button.style'

export const SeatMainDivStyle = styled.main`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SeatImgStyle = styled.img`
  width: 1082px;
  height: 129px;
  margin-top: 46px ;
`;

export const SeatTableStyle = styled.article`
  margin: 75px auto;
  ${ButtonStyle}{
    margin: 115px 450px 180px 450px;
    width: 190px;

  }
`;
export const SeatStyle = styled.article`
  display: flex;
  justify-content: flex-start;
`;
export const SeatRowStyle = styled.article`
  text-align: center;
  padding-right: 30px;
  padding-top: 20px;
  font-weight: 400;
  font-size: 48px;
  font-family: "Inter";
  font-style: normal;
`;

export const ListStyle = styled.ol`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  li {
    text-align: center;
    font-family: "Inter";
    font-style: normal; 
    font-weight: 400;
    font-size: 48px;
  }
`;



export const SeatListStyle = styled.ol`
  display: flex;
  list-style: none;
`;
