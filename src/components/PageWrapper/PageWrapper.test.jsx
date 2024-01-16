import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor, fireEvent, rerender} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import PageWrapper from ".";

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";


describe("Page wrapper functionality", () => {
    beforeEach(() => {
      render(
        <WelcomeProvider>
        <GuideProvider>
        <TouristProvider>
        <MemoryRouter>
          <PageWrapper />
        </MemoryRouter>
        </TouristProvider>
        </GuideProvider>
        </WelcomeProvider>
      
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it('is defined', () => {
      expect(PageWrapper).toBeDefined()
    })

    it("displays the footer div", () => {
        const footer = screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
        expect(footer.childNodes[0].textContent).toBe(' Copyright 2024 ')
    })

    it("displays the nav bar", () => {
        const nav = screen.getByRole('navbar')
        expect(nav).toBeInTheDocument()
    })


    it("navigates to correct endpoint when nav element is clicked", async () => {

       const loginNav = screen.getByText('Login')
        
       fireEvent.click(loginNav)
        
      waitFor( async ()=>{

       
       const button = await screen.getByText('No account?')
       expect(button).toBeInTheDocument()
       expect(window.location.pathname).toBe('/touristloginpage')
       })

      
     })


})


