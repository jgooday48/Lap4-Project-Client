import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TouristGuidePage from '.';

describe('Tourist Guide Page functionality', ()=> {
    beforeEach(() => {

        render(
            <MemoryRouter>
                <TouristGuidePage />
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {
        expect(TouristGuidePage).toBeDefined()

    })

    it('displays a h4 element', () => {
        const h4 = screen.getByText('See the world like a local')
        expect(h4).toBeInTheDocument()
    })

})
