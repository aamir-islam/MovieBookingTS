import styled from "styled-components";

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

export const SeatButtonStyle = styled.button`
  width: 190px;
  height: 43px;
  margin: 109 auto 152px auto;
  color: white;
  background-color: #352c9a;
  border: none;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin: 115px 450px 180px 450px;
  &:hover {
    background-color: #724fd8;
  }
  &:active {
    text-decoration: underline;
  }
  &:disabled {
    background-color: #626262;
  }
`;

export const SeatListStyle = styled.ol`
  display: flex;
  list-style: none;
`;
