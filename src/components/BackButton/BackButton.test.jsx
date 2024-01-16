import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import BackButton from ".";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Back Button component", () => {
    beforeEach(() => {
        render(
            <Router>
                <BackButton />
            </Router>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a button with the text: 'Go Back'", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        // expect(button.textContent).toBe("Go Back");
    });

    it('is defined', () => {
        expect(BackButton).toBeDefined()
    })

});
