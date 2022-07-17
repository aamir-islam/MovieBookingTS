import React, { useEffect, useState } from "react";
import vector from "../Assets/Vector.png";
import { useParams } from "react-router-dom";
import BlackSeat from "../Assets/BlackSeat.svg";
import WhiteSeat from "../Assets/whiteSeat.svg";
import BlueSeat from "../Assets/blueSeat.svg";
import Modal from "./Modal";
import {
  SeatImgStyle,
  SeatMainDivStyle,
  SeatStyle,
  SeatTableStyle,
  SeatButtonStyle,
  ModelScreenStyle,
  DigitStyle,
  SeatRowStyle,
} from "../Styles/Seat.style";

type Props = {};

const ColumnNo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Data {
  id: string[];
  seat: number[];
}
const data: Data = {
  id: ["A", "B", "C", "D"],
  seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};


const BookingHome = (props: Props) => {
  const state = useParams()
  const [tempSeatArr, setTempSeatArr] = useState<string[]>([]);
  const [visible, setVisible] = useState<Boolean>(false);
  const [selectedSeat, setSelectedSeat] = useState<string | null>("");

  const ModalHandler = () => {
    setVisible(true);
    if (tempSeatArr.length === 0 || tempSeatArr.length > 10) {
      alert("please select the seats in range (1-10) ");
      setVisible(false);
    } else {
      localStorage.setItem(
        JSON.stringify(state.id),
        selectedSeat + tempSeatArr.toString()
      );
      setSelectedSeat(localStorage.getItem(JSON.stringify(state.id)));
      console.log("fun", selectedSeat);
      setVisible(true);
    }
  };

  const SeatHandler = (key: string) => {
    if (tempSeatArr.includes(key)) {
      let newSeat = tempSeatArr.filter((item: string) => {
        return key !== item;
      });
      setTempSeatArr(newSeat);
    } else {
      setTempSeatArr((prvTempSeatArr) => [...prvTempSeatArr, key]);
    }
  };

  let white = {
    backgroundColor: "white",
  };
  let grey = {
    pointerEvents: "none",
    backgroundColor: " rgba(229, 229, 229, 0.6)",
  };

  useEffect(() => {
    if (localStorage.getItem(JSON.stringify(state.id)) !== null) {
      setSelectedSeat(localStorage.getItem(JSON.stringify(state.id)));
    }
  }, [state.id]);

  return (
    <SeatMainDivStyle style={!visible ? white : grey}>
      <SeatImgStyle src={vector} alt="vector" />
      <SeatTableStyle>
        <DigitStyle>
          {ColumnNo.map((ColNo) => {
            return <article key={ColNo}>{ColNo}</article>;
          })}
        </DigitStyle>
        {data.id.map((item) => {
          return (
            <SeatStyle key={item}>
              <SeatRowStyle>{item}</SeatRowStyle>
              {data.seat.map((set: number) => {
                return (
                  <div
                    key={set}
                    onClick={() => {
                      SeatHandler(item + set);
                    }}
                  >
                    {selectedSeat !== null &&
                    selectedSeat.includes(item + set) ? (
                      <img src={BlackSeat} alt="whiteSeat" />
                    ) : tempSeatArr.includes(item + set) ? (
                      <img src={BlueSeat} alt="blackSeat" />
                    ) : (
                      <img src={WhiteSeat} alt="blackSeat" />
                    )}
                  </div>
                );
              })}
            </SeatStyle>
          );
        })}
        <SeatButtonStyle onClick={ModalHandler}>
          Booking Confirm
        </SeatButtonStyle>
      </SeatTableStyle>
      <ModelScreenStyle
        style={visible ? { pointerEvents: "auto" } : { pointerEvents: "none" }}
      >
        {!visible ? (
          ""
        ) : (
          <Modal
            ModalVisibleFun={setVisible}
            SeatTempFun={setTempSeatArr}
            seatArr={tempSeatArr}
          />
        )}
      </ModelScreenStyle>
    </SeatMainDivStyle>
  );
};

export default BookingHome;
