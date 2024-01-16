import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";
import TouristEachPlanPage from '.';

describe('Tourist Each Plan Page functionality', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/tourist/each-plan']} initialIndex={0}>
                <WelcomeProvider>
                    <TouristProvider>
                        <GuideProvider>
                            <Route
                                path="/tourist/each-plan"
                                render={(props) => (
                                    <TouristEachPlanPage {...props} location={{ state: { plan: { notes: 'Sample notes', activities: [], date_from: new Date(), date_to: new Date() } } }} />
                                )}
                            />
                        </GuideProvider>
                    </TouristProvider>
                </WelcomeProvider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it.skip('is defined', () => {
        expect(TouristEachPlanPage).toBeDefined();
    });
});
