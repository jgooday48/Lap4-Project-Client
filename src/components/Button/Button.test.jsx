import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Button from ".";
import { MemoryRouter } from "react-router-dom";

describe("Back Button component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Button />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });



    it('is defined', () => {
        expect(Button).toBeDefined()
    })

});
