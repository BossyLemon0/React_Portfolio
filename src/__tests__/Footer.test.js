import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Footer from '../components/Footer';


test('renders footer with link to GitHub correctly', () => {
    render(<Footer />);
    
    // Find the SVG icon that should trigger the toGitHub function
    const githubIcon = screen.getByTestId("github-icon");

    // Mock the window.open function
    const originalOpen = window.open;
    window.open = jest.fn();

    // Trigger the click event on the SVG icon
    fireEvent.click(githubIcon);

    // Assert that window.open was called with the correct URL and '_blank' target
    expect(window.open).toHaveBeenCalledWith('https://github.com/BossyLemon0', '_blank');

    // Restore the original window.open function
    window.open = originalOpen;
});