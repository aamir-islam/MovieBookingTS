import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingHome from "../BookingHome";
import vector from "../../Assets/Vector.png";
import Button from "../../Button/Button";
import SeatIcon from "../../../Assets/SeatIcon";

describe("booking  testing", () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
  Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

  test("should take a snapshot", () => {
    const { container } = render(<BookingHome />);
    expect(container).toMatchSnapshot();
  });
  test("booking home vector image", () => {
    render(<BookingHome />);
    const vectorImg = screen.getByRole<HTMLImageElement>("img");
    expect(vectorImg).toBeInTheDocument();
    expect(vectorImg).toHaveAttribute("src", vector);
  });
  test("booking home vector list number", () => {
    render(<BookingHome />);
    const numberList = screen
      .getAllByTestId<HTMLDataListElement>("list-item")
      .map((li) => li.textContent);
    expect(numberList).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ]);
  });

  test("simulates click events on Button components", () => {
    const mockCallBack = jest.fn();
    render(<Button onClick={mockCallBack}>Ok</Button>);
    const numberList = screen.getByTestId<HTMLButtonElement>("closeFunc");
    fireEvent.click(numberList);
    expect(mockCallBack).toHaveBeenCalled();
  });
  test("simulates click events", () => {
    const mockSeatHandler = jest.fn();
    render(<SeatIcon imageColor="white" onClick={mockSeatHandler} />);
    const numberList = screen.getByTestId<HTMLLIElement>("Svg-Item");
    fireEvent.click(numberList);
    expect(mockSeatHandler).toHaveBeenCalled();
  });

  it("calls localStorage.setItem when clicked", () => {
    render(<BookingHome />);
    fireEvent.click(screen.getByRole("button", { name: "Confirm Booking" }));
  });
});
