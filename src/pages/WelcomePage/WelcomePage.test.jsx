import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent, waitFor } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";
import WelcomePage from '.';

describe('Welcome Page', () => {
    beforeEach(() => {
        render (
            <BrowserRouter>
                <WelcomeProvider>

                <TouristProvider>

                <GuideProvider>
                <WelcomePage />
                </GuideProvider>
                </TouristProvider>
                </WelcomeProvider>    
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('displays a heading with appropriate text', () => {
        const heading = screen.getByRole("title");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Find a travel guide");
    });

    it("displays a descriptive paragraph", ()=>{
        const paragraph = screen.getByRole("description")
        expect(paragraph).toBeInTheDocument();
        expect(paragraph.textContent).toBe("Making travelling solo relaxing and enjoyable")
    })

    it("displays a button to join", ()=>{
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
        expect(button.textContent).toBe("Join now!")
    })

    it("navigates to the tourist signup page when the button is clicked", async ()=>{
        const button = screen.getByRole("button")

        button.click()

        waitFor(async ()=>{



        const registertext = await screen.getByText("REGISTER")
        expect(registertext).toBeInTheDocument();

        })
    })

});
