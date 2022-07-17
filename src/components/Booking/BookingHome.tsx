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
  ListStyle,
  SeatListStyle,
  SeatRowStyle,
} from "../Styles/Seat.style";

const ColumnNo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
interface Data {
  id: string[];
  seat: number[];
}
const data: Data = {
  id: ["A", "B", "C", "D"],
  seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const BookingHome = () => {
  const state = useParams();
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

  useEffect(() => {
    if (localStorage.getItem(JSON.stringify(state.id)) !== null) {
      setSelectedSeat(localStorage.getItem(JSON.stringify(state.id)));
    }
  }, [state.id]);

  return (
    <SeatMainDivStyle>
      <SeatImgStyle src={vector} alt="vector" />
      <SeatTableStyle>
        <ListStyle>
          {ColumnNo.map((ColNo) => {
            return <li key={ColNo}>{ColNo}</li>;
          })}
        </ListStyle>
        {data.id.map((item) => {
          return (
            <SeatStyle key={item}>
              <SeatRowStyle>{item}</SeatRowStyle>
              <SeatListStyle>
              {data.seat.map((set: number) => {
                return (
                  <li
                    key={set}
                    onClick={() => {
                      SeatHandler(item + set);
                    }}
                  >
                    {(() => {
                      switch (selectedSeat !== null &&
                        selectedSeat.includes(item + set)) {
                        case true:
                          return <img src={BlackSeat} alt="blackSeat" />;
                        default:
                          switch (tempSeatArr.includes(item + set)) {
                            case true:
                              return <img src={BlueSeat} alt="blueSeat" />;
                            default:
                              return <img src={WhiteSeat} alt="whiteSeat" />;
                          }
                      }
                    })()}
                  </li>
                );
              })}
              </SeatListStyle>
            </SeatStyle>
          );
        })}
        <SeatButtonStyle onClick={ModalHandler}>
          Booking Confirm
        </SeatButtonStyle>
      </SeatTableStyle>

      {visible && (
        <Modal
          ModalVisibleFun={setVisible}
          SeatTempFun={setTempSeatArr}
          seatArr={tempSeatArr}
        />
      )}
    </SeatMainDivStyle>
  );
};

export default BookingHome;
