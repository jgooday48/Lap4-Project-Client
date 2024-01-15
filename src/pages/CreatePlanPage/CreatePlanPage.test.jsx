import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";

import CreatePlanPage from '.';

describe('Function', () => {
    beforeEach(() => {
        const mockGuide = {
            state: {
                guide: {
                    guide_id: 1,
                    name: 'John Doe',
                    images: ['image1.jpg', 'image2.jpg'],
                },
            },
        };

        render(
            <MemoryRouter>
                <WelcomeProvider>
                    <TouristProvider>
                        <GuideProvider>
                            <CreatePlanPage />
                        </GuideProvider>
                    </TouristProvider>
                </WelcomeProvider>
            </MemoryRouter>,
            { wrapperProps: { route: '/create-plan', initialEntries: ['/createPlan/1'], initialIndex: 0, initialIndexSignature: null, location: mockGuide } }
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('is defined', () => {
        expect(CreatePlanPage).toBeDefined();
    });
});
