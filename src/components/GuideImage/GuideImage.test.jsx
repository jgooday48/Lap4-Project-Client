import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";

import GuideImage from '.';

describe('Guide Image functionality', ()=> {
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
                    <GuideImage guide={fakeGuide}/>
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
        expect(GuideImage).toBeDefined()

    })

})
