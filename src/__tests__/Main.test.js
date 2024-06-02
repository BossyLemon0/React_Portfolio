import React, {lazy, Suspense} from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from "../components/pages/Main";


test('renders lazy-loaded components correctly', async () => {
    render(<Main />);
    
    // Initially, the fallback loader should be in the document
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the lazy-loaded components to be rendered
    const homeElement = await screen.findByText('Omar Ramirez');
    const aboutElement = await screen.findByText(`What I'm About`);
    const projectsElement = await screen.findByText('Weather Dashboard');
    const contactElement = await screen.findByText(/Contact Me/i);
    const footerElement = await screen.findByTestId('footer');

    expect(homeElement).toBeInTheDocument();
    expect(aboutElement).toBeInTheDocument();
    expect(projectsElement).toBeInTheDocument();
    expect(contactElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
});

