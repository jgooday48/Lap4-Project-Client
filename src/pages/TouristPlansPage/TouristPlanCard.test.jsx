import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";


import TouristPlanCard from './TouristPlanCard';

describe('Tourist Plan Card functionality', ()=> {
    beforeEach(() => {

        const mockData = {
            guide_id:1,
            place_id:1,
            date_from: '7987',
            status: 'Booked'
        }

        render(
            <MemoryRouter>
                <WelcomeProvider>

                    <TouristProvider>

                    <GuideProvider>

                    <TouristPlanCard plan={mockData}/>
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
        expect(TouristPlanCard).toBeDefined()

    })

})
