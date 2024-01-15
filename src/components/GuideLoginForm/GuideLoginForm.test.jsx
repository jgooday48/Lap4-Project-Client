import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor, fireEvent, rerender} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import GuideLoginForm from ".";

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";

describe("Tourist Log in functionality", () => {
    beforeEach(() => {
      render(
        <WelcomeProvider>
        <TouristProvider>
            <GuideProvider>

        <MemoryRouter>
          <GuideLoginForm/>
        </MemoryRouter>
            </GuideProvider>
        </TouristProvider>
        </WelcomeProvider>
      
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it("is defined", () => {
      expect(GuideLoginForm).toBeDefined()
    })

    it("displays the login form for tourists", () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()
    })

    it("displays a username input", () =>{
        const username = screen.getByRole("username")
        expect(username).toBeInTheDocument();
    })

    it("displays a password input", ()=>{
        const password = screen.getByRole("password")
        expect(password).toBeInTheDocument();
    })

    it.skip("displays a submit button", () =>{
        const submit = screen.getByRole("button")
        expect(submit).toBeInTheDocument();
        expect(submit.textContent).toBe("LOGIN")
        
    })

    it("updates username state on input change", () => {
      const usernameInput = screen.getByLabelText(/username/i);
  
      fireEvent.change(usernameInput, { target: { value: "testuser" } });
  
      expect(usernameInput.value).toBe("testuser");
    })
  
    it("updates password state on input change", () => {
      const passwordInput = screen.getByLabelText(/password/i);
  
      fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  
      expect(passwordInput.value).toBe("testpassword");
    })

    
})
