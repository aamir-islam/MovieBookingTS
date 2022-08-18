import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingHome from '../BookingHome'
import vector from '../../Assets/Vector.png'


test("booking home vector image", () => {
  render(<BookingHome />)
  const vectorImg = screen.getByRole<HTMLImageElement>('img');
  expect(vectorImg).toBeInTheDocument()
  expect(vectorImg).toHaveAttribute('src', vector);

})
test("booking home vector list number", () => {
  render(<BookingHome />)
  const numberList = screen.getAllByTestId<HTMLDataListElement>("list-item").map((li) => li.textContent);
  expect(numberList).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
})

test("confirm booking button", () => {
  render(<BookingHome />)
  const confirmButton = screen.getByRole('button', { name: /Confirm Booking/i })
  fireEvent.click(confirmButton);

})
