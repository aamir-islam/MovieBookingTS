import React from 'react';
import { render, screen } from '@testing-library/react';
import PNF from '../PNF';
import pnf from '../../Assets/pageNotFound.png'



describe("testing page not found", () => {
    test('snapshot for PageNotFound component', () => {
        const { container } = render(<PNF />);
        expect(container).toMatchSnapshot()
    })

    test("Testing for the image attribute", () => {
        render(<PNF />)
        const logo = screen.getByRole<HTMLImageElement>('img');
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('alt', 'pnf');
        expect(logo).toHaveAttribute('src', pnf);
    })
})

