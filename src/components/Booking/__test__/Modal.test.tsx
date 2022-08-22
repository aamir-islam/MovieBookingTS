import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../Modal";

const data = ['A1', 'B1', 'C1', 'D1', 'A2', 'B2', 'C3']
const mockSetVisible = jest.fn();
const mockSeatSelector = jest.fn()



describe("Modal test", () => {
    test('should take a snapshot', () => {
        const { container } = render(<Modal SeatTempFun={mockSeatSelector} ModalVisibleFun={mockSetVisible} seatArr={data} />)
        expect(container).toMatchSnapshot()
    })

    test("booking modal SeatTempFu  function", () => {
        render(<Modal SeatTempFun={mockSeatSelector} ModalVisibleFun={mockSetVisible} seatArr={data} />)
        const numberList = screen.getByTestId<HTMLImageElement>("closeFunc")
        fireEvent.click(numberList);
        expect(mockSeatSelector).toHaveBeenCalled()
    })

    test("booking modal ModalVisibleFun", () => {
        render(<Modal SeatTempFun={mockSeatSelector} ModalVisibleFun={mockSetVisible} seatArr={data} />)
        const numberList = screen.getByTestId<HTMLImageElement>("closeFunc")
        fireEvent.click(numberList);
        expect(mockSetVisible).toHaveBeenCalled()

    })

})
