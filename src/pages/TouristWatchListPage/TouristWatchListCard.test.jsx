import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";





import TouristWatchListCard from './TouristWatchListCard';

describe('Tourist watch list card functionality', ()=> {


    beforeEach(() => {

        const mockGuide = {
            guide_id: 1,
            images: 'mock.jpg'
        }

        render(
            <MemoryRouter>
                <WelcomeProvider>

                    <TouristProvider>

                    <GuideProvider>

                    <TouristWatchListCard guide={mockGuide}/>
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
        expect(TouristWatchListCard).toBeDefined()

    })

})
