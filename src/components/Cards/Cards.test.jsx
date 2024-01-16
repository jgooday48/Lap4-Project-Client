import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Cards from ".";
import { MemoryRouter } from "react-router-dom";

describe("Cards component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Cards />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });



    it('is defined', () => {
        expect(Cards).toBeDefined()
    })

});
