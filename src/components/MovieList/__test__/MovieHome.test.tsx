import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import MovieHome from '../MovieHome'

afterEach(cleanup);
test("renders Book Tickets heading", () => {
    render(<MovieHome />)
    const linkElement = screen.getByText(/Book Tickets/i);
    expect(linkElement).toBeInTheDocument()
})


test("Check input value", () => {
    render(<MovieHome />)
    const inputValue = screen.getByPlaceholderText<HTMLInputElement>(/Search/i)
    expect(inputValue).toBeInTheDocument()
    fireEvent.change(inputValue, { target: { value: "batman" } })
    expect(inputValue.value).toBe("batman");
})

