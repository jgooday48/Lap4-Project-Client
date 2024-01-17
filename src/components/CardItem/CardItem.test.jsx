import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";



import CardItem from './CardItem';

describe('Button functionality', ()=> {
    beforeEach(() => {



        render(
            <MemoryRouter>
                <WelcomeProvider>

                <TouristProvider>

                <GuideProvider>

                <CardItem/>
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
        expect(CardItem).toBeDefined()
    })

})
