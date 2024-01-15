import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor, fireEvent, rerender} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import TouristSignupForm from ".";

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";

describe("Tourist Sign up functionality", () => {
    beforeEach(() => {
      render(
        <WelcomeProvider>
        <TouristProvider>
        <MemoryRouter>
          <TouristSignupForm/>
        </MemoryRouter>
        </TouristProvider>
        </WelcomeProvider>
      
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it('is defined', () => {
        expect(TouristSignupForm).toBeDefined()
    })

    it("displays the signup form for tourists", () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()
    })

    it("displays a name input", () =>{
        const name = screen.getByRole("name")
        expect(name).toBeInTheDocument();
    })

    it("displays a username input", () =>{
        const username = screen.getByRole("username")
        expect(username).toBeInTheDocument();
    })

    it("displays an email input", () =>{
        const email = screen.getByRole("email")
        expect(email).toBeInTheDocument();
    })

    it("displays a password input", ()=>{
        const password = screen.getByRole("password")
        expect(password).toBeInTheDocument();
    })

    it("displays a submit button", () =>{
        const submit = screen.getByRole("submit")
        expect(submit).toBeInTheDocument();
        
    })

    it("updates email state on input change", () => {
        const emailInput = screen.getByLabelText(/email/i);
    
        fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    
        expect(emailInput.value).toBe("test@gmail.com");
      });
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

    it("displays a link which brings the user to the user login page", async ()=>{
        const link = screen.getByRole("signup")
        expect(link).toBeInTheDocument();
        expect(link.textContent).toBe("Already have an account With Us? Click here to login!")

        fireEvent.click(link)

        waitFor( async ()=>{
            const logintitle = await screen.getByRole("heading")
            expect(logintitle).toBeInTheDocument();
            expect(logintitle.textContent).toBe("Tourist Log In")
        })
        
    })




    

    
})
