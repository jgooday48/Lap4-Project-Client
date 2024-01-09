import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import PageWrapper from ".";

describe("Page wrapper functionality", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <PageWrapper />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it("displays the footer div", () => {
        const footer = screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
        expect(footer.childNodes[0].textContent).toBe(' Copyright 2024 ')
    })

    it("displays the nav bar", () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
    })

    it("displays the nav element", async () => {
        const nav = screen.getByRole('navigation')
        expect(nav.textContent).toBe('Login')
    })

    // it("navigates to correct endpoint when nav element is clickede", async () => {
    //     const loginNav = screen.getByText('Login')
        
    //     loginNav.click()
        
    //     // const button = screen.getByText('No account?')
    //     // expect(button).toBeInTheDocument()
    //     expect(window.location.pathname).toBe('/touristloginpage')
    // })
})

