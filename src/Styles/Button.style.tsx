
import styled from "styled-components";

export const ButtonStyle = styled.button`
  top: 245px;
  left: 89px;
  right: 87px;
  bottom: 37px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background-color: #352c9a;
  color: white;
  height: 43px;
  border-style: none;
 
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