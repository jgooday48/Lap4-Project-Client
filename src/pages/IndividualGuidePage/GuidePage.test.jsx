import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";

import IndividualGuidePage from '.';

describe('Individual Guide Page functionality', ()=> {
    beforeEach(() => {
        const fakeGuide = {
            guide_id: 1,
            name: 'John Doe',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tagline: 'Your friendly local guide!',
            filters: ['Foodie', 'History Enthusiast'],
            images: ['image1.jpg', 'image2.jpg'],
          };

        render(
            <MemoryRouter>
                <WelcomeProvider>

                <TouristProvider>

                <GuideProvider>                
                <IndividualGuidePage/>
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
        expect(IndividualGuidePage).toBeDefined()

    })

    it('displays one h1 header', () => {
        const h1s = screen.queryAllByRole('heading', {
            level:1
        })

        expect(h1s.length).not.toBeGreaterThan(1)

    })

})
