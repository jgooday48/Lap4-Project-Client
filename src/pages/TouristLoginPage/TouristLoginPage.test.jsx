import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TouristLoginPage from '.';

describe('Function', ()=> {
    beforeEach(() => {

        render(
            <MemoryRouter>
                <TouristLoginPage />
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it.skip('is defined', () => {
        expect(TouristLoginPage).toBeDefined()

    })

})
