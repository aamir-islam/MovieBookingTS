import React from 'react';
import { render, screen } from '@testing-library/react';
import PNF from '../PNF';
import pnf from '../../Assets/pageNotFound.png'

test("Heading testing" , ()=>{
    render(<PNF />)
    const heading = screen.getByText(/Sorry,there is no result for keyword you searched/i)
    expect(heading).toBeInTheDocument()
})
test("Testing for the image" , ()=>{
    render(<PNF />)
    const logo = screen.getByRole<HTMLImageElement>('img') ; 
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('alt', 'pnf');
    expect(logo).toHaveAttribute('src', pnf);
})
