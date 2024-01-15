import React from "react";
import { describe, it, expect, beforeEach, afterEach, vitest } from "vitest";
import { screen, render, cleanup, waitFor, fireEvent, rerender} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import TouristLoginForm from ".";

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";

describe("Tourist Log in functionality", () => {
    beforeEach(() => {
      render(
        <WelcomeProvider>
        <TouristProvider>
        <MemoryRouter>
          <TouristLoginForm/>
        </MemoryRouter>
        </TouristProvider>
        </WelcomeProvider>
      
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it("is defined", () => {
      expect(TouristLoginForm).toBeDefined()
    })

    it("displays the login form for tourists", () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()
    })

    it("displays a username input", () =>{
        const email = screen.getByRole("username")
        expect(email).toBeInTheDocument();
    })

    it("displays a password input", ()=>{
        const password = screen.getByRole("password")
        expect(password).toBeInTheDocument();
    })

    it("displays a submit button", () =>{
        const submit = screen.getByRole("submit")
        expect(submit).toBeInTheDocument();
        expect(submit.value).toBe("LOGIN")
        
    })
    it("updates username state on input change", () => {
      const usernameInput = screen.getByLabelText(/username/i);
  
      fireEvent.change(usernameInput, { target: { value: "testuser" } });
  
      expect(usernameInput.value).toBe("testuser");
    });
  
    it("updates password state on input change", () => {
      const passwordInput = screen.getByLabelText(/password/i);
  
      fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  
      expect(passwordInput.value).toBe("testpassword");
    });


    
})
