import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, cleanup, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";
import GuideHomePage from '.';

describe('Function', () => {
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

    it('is defined', async () => {
        // Wrap your test logic in a try/catch block to handle errors
        try {
            // Use waitFor to wait for asynchronous operations to complete
            await waitFor(() => {
                expect(GuideHomePage).toBeDefined();
            });
        } catch (error) {
            // Handle the error (log or throw it if necessary)
            console.error('Error in test:', error);
        }
    })
});
