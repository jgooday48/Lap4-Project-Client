import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";
import TouristEachPlanPage from '.';

describe('Tourist Each Plan Page functionality', () => {
    beforeEach(() => {
        // Mocking the state that would be passed through the location prop
        const locationState = {
            guideName: 'Guide Name',
            image: 'Guide Image URL',
            plan: {
                notes: 'Sample Notes',
                activities: [],
                date_from: new Date(),
                date_to: new Date(),
                guide_id: '123',
                plan_id: '456'
            }
        };

        render(
            <MemoryRouter>
                <WelcomeProvider>
                    <TouristProvider>
                        <GuideProvider>
                            {/* Provide the location state to simulate the component's behavior */}
                            <TouristEachPlanPage location={{ state: locationState }} />
                        </GuideProvider>
                    </TouristProvider>
                </WelcomeProvider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('is defined', () => {
        expect(TouristEachPlanPage).toBeDefined();
    });
});
