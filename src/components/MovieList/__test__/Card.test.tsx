import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../Card";
import { BrowserRouter } from "react-router-dom";

const data = [
  {
    id: 507086,
    poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    title: "Jurassic World Dominion",
  },
];
describe("button to the", () => {
  render(<BrowserRouter><Card responseData={data} /></BrowserRouter>);
  it("image should be in Dom", () => {
    const element = screen.getByRole<HTMLImageElement>("img");
    expect(element).toBeInTheDocument();
  })
  it("heading should be in Dom", () => {
    render(<BrowserRouter><Card responseData={data} /></BrowserRouter>);
    const elementAlt = screen.getByText("Jurassic World Dominion");
    expect(elementAlt).toBeInTheDocument();
  })

  it("NavLink should have id and path attribute", () => {
    render(<BrowserRouter><Card responseData={data} /></BrowserRouter>);
    const Nav = screen.getByRole<HTMLAnchorElement>("link");
    expect(Nav).toHaveAttribute("href", "/booking/507086/Jurassic World Dominion")
  })
  it("button click", () => {
    render(<BrowserRouter><Card responseData={data} /></BrowserRouter>);
    const primaryButton = screen.getByRole('button', { name: /Book Now/i })
    fireEvent.click(primaryButton);
  })

})

