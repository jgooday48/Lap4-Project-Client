import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);


import { MemoryRouter } from "react-router-dom";
import CardItem from ".";

describe("Cards component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <CardItem />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });



    it('is defined', () => {
        expect(CardItem).toBeDefined()
    })

});
