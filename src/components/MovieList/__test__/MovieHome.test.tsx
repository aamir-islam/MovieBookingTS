import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import MovieHome from '../MovieHome'

afterEach(cleanup);
describe("test for movie card", () => {
    test('should take a snapshot', () => {
        const { container } = render(<MovieHome />);
        expect(container).toMatchSnapshot()
    })


    test("Check input value", () => {
        render(<MovieHome />)
        const inputValue = screen.getByPlaceholderText<HTMLInputElement>(/Search/i)
        expect(inputValue).toBeInTheDocument()
        fireEvent.change(inputValue, { target: { value: "batman" } })
        expect(inputValue.value).toBe("batman");
    })



})


