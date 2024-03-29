import React, { useEffect, useState } from "react";
import vector from "../../Assets/Vector.png";
import { useParams } from "react-router-dom";
import SeatIcon from "../../Assets/SeatIcon";
import Modal from "./Modal";
import {
  SeatImgStyle,
  SeatMainDivStyle,
  SeatStyle,
  SeatTableStyle,
  ListStyle,
  SeatListStyle,
  SeatRowStyle,
} from "../../Styles/Seat.style";
import Button from "../Button/Button";
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
  const [seatSelector, setSeatSelector] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [bookedSeat, setBookedSeat] = useState<string | null>("");

  const ModalHandler = () => {
    setVisible(true);
    if (seatSelector.length === 0 || seatSelector.length > 10) {
      alert("please select the seats in range (1-10) ");
      setVisible(false);
    } else {
      localStorage.setItem(
        JSON.stringify(state.id),
        bookedSeat + seatSelector.toString()
      );
      setBookedSeat(localStorage.getItem(JSON.stringify(state.id)));
      setVisible(true);
    }
  };

  const SeatHandler = (key: string) => {
    if (seatSelector.includes(key)) {
      let newSeat = seatSelector.filter((item: string) => {
        return key !== item;
      });
      setSeatSelector(newSeat);
    } else {
      setSeatSelector((prvSeatSelector) => [...prvSeatSelector, key]);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(JSON.stringify(state.id)) !== null) {
      setBookedSeat(localStorage.getItem(JSON.stringify(state.id)));
    }
  }, [state.id]);

  return (
    <SeatMainDivStyle>
      <SeatImgStyle src={vector} alt="vector" />
      <SeatTableStyle>
        <ListStyle>
          {ColumnNo.map((ColNo) => {
            return (
              <li data-testid="list-item" key={ColNo}>
                {ColNo}
              </li>
            );
          })}
        </ListStyle>
        {data.id.map((item) => {
          return (
            <SeatStyle key={item}>
              <SeatRowStyle>{item}</SeatRowStyle>
              <SeatListStyle>
                {data.seat.map((set: number) => {
                  return (
                    <li key={set}>
                      {(() => {
                        switch (true) {
                          case bookedSeat !== null &&
                            bookedSeat.includes(item + set):
                            return (
                              <SeatIcon
                                data-testid="Seat-list"
                                imageColor="#626262"
                              />
                            );
                          case seatSelector.includes(item + set):
                            return (
                              <SeatIcon
                                imageColor="#724FD8"
                                onClick={() => {
                                  SeatHandler(item + set);
                                }}
                              />
                            );
                          default:
                            return (
                              <SeatIcon
                                imageColor="#DADADA"
                                onClick={() => {
                                  SeatHandler(item + set);
                                }}
                              />
                            );
                        }
                      })()}
                    </li>
                  );
                })}
              </SeatListStyle>
            </SeatStyle>
          );
        })}
        <Button onClick={ModalHandler}>Confirm Booking</Button>
      </SeatTableStyle>

      {visible && (
        <Modal
          ModalVisibleFun={setVisible}
          SeatTempFun={setSeatSelector}
          seatArr={seatSelector}
        />
      )}
    </SeatMainDivStyle>
  );
};

export default BookingHome;
