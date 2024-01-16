import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";
import GuideHomePage from '.';

describe('Guide Home Page functionality', ()=> {
    beforeEach(() => {

        render(
            <MemoryRouter>
                <WelcomeProvider>
                    <TouristProvider>

                    <GuideProvider>   
                        <GuideHomePage />
                </GuideProvider>
                </TouristProvider>
                </WelcomeProvider>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {
        expect(GuideHomePage).toBeDefined()

    })

    it('displays a h1 element', () => {
        const h1 = screen.getByText('View All Of Your Clients')
        expect(h1).toBeInTheDocument()
    })



})
