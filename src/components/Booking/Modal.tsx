import React from "react";
import {
  ModelStyle,
  ImageStyles,
  ModelDataFlex,
  ModelScreenStyle,
  HeadingStyle,
  Heading5Style,
  CloseButton,
  SeatHeading,
  SeatHeadingH3,
} from "../Styles/Modal.styles";
import { imgUrl } from "../constants/global";
import { useParams } from "react-router-dom";
import close from '../Assets/Xclose.png'
type Props = {
  SeatTempFun: (arr: string[]) => void;
  ModalVisibleFun: (arr: boolean) => void;
  seatArr: string[];
};


const Modal = ({
  SeatTempFun,
  ModalVisibleFun,
  seatArr,
}: Props) => {

  const state = useParams()
  
  const ImagePath = localStorage.getItem(state.title ||'{}')
  const total = seatArr.length * 250;
  const SGST = (total * 12) / 100;

  const modalClose = () => {
    SeatTempFun([]);
    ModalVisibleFun(false);
  };

  return (
    <ModelScreenStyle>  
    <ModelStyle>
      <CloseButton>
        <img onClick={modalClose} src={close} alt="close" />
      </CloseButton>
      <HeadingStyle>Thank you for booking</HeadingStyle>
      <Heading5Style>Order Summary</Heading5Style>
      <article>
        <ModelDataFlex>
          <article>
            <ImageStyles src={imgUrl+ImagePath} alt="movie" />
          </article>
          <article>
            <SeatHeadingH3>Seats:</SeatHeadingH3>
            <ModelDataFlex>
              {seatArr.map((SeatNo, index) => (
                <SeatHeading key={index}>{SeatNo},</SeatHeading>
              ))}
            </ModelDataFlex>
            <ModelDataFlex>
              <article>
                <SeatHeading>{seatArr.length}*250:</SeatHeading>
                <span>SGST(12%):</span>
                <br />
                <span>CGST(12%):</span>
              </article>
              <article>
                <SeatHeading>{total}</SeatHeading>
                <span>{SGST}</span>
                <br />
                <span>{SGST}</span>
              </article>
            </ModelDataFlex>
            <hr />
            <ModelDataFlex>
              <SeatHeading>Total:</SeatHeading>
              <SeatHeading>{total + SGST * 2}</SeatHeading>
            </ModelDataFlex>
          </article>
        </ModelDataFlex>
      </article>
    </ModelStyle>
    </ModelScreenStyle>  
  );
};

export default Modal;
