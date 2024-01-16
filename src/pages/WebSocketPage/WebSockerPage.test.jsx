import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";


import WebSocketPage from '.';

describe('Web Socket Page functionality', ()=> {
    beforeEach(() => {

        render(
            <MemoryRouter>
                <WelcomeProvider>

                <TouristProvider>

                <GuideProvider>

                <WebSocketPage />
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
        expect(WebSocketPage).toBeDefined()

    })

    it('displays a header', () => {
        const h3 = screen.getByText('Join a chat!')
        expect(h3).toBeInTheDocument()
    })

    it('renders correctly on initial state', () => {
        const { container } = render(<WebSocketPage />)
        expect(container).toBeDefined()
    });

    
    
    
    
    

})
