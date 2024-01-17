import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import axios from 'axios';
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";
import GuideHomePage from '.';

vi.mock('axios');
describe('Guide Home Page functionality', ()=> {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: { all_activities: [] } });
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
        vi.resetAllMocks();
    })

    it('is defined', () => {
        expect(GuideHomePage).toBeDefined()

    })

    it('displays a h1 element', () => {
        const h1 = screen.getByText('View All Of Your Clients')
        expect(h1).toBeInTheDocument()
    })



})
