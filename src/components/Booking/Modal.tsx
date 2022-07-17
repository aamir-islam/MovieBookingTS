import React from "react";
import {
  ModelStyle,
  ImageStyles,
  ModeldataFlex,
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
  let total = seatArr.length * 250;
  let SGST = (total * 12) / 100;

  const modalClose = () => {
    SeatTempFun([]);
    ModalVisibleFun(false);
  };

  return (
    <ModelStyle>
      <CloseButton>
        <img onClick={modalClose} src={close} alt="close" />
      </CloseButton>
      <HeadingStyle>Thank you for booking</HeadingStyle>
      <Heading5Style>Order Summary</Heading5Style>
      <article>
        <ModeldataFlex>
          <article>
            <ImageStyles src={imgUrl+state.path} alt="movie" />
          </article>
          <article>
            <SeatHeadingH3>Seats:</SeatHeadingH3>
            <ModeldataFlex>
              {seatArr.map((SeatNo, index) => (
                <SeatHeading key={index}>{SeatNo},</SeatHeading>
              ))}
            </ModeldataFlex>
            <ModeldataFlex>
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
            </ModeldataFlex>
            <hr />
            <ModeldataFlex>
              <SeatHeading>Total:</SeatHeading>
              <SeatHeading>{total + SGST * 2}</SeatHeading>
            </ModeldataFlex>
          </article>
        </ModeldataFlex>
      </article>
    </ModelStyle>
  );
};

export default Modal;
