import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import SearchedActivities from './SearchedActivities';

describe('Searched Activities functionality', ()=> {
    beforeEach(() => {
        const mockActivities = [{
            name: 'Abseiling',
            images: 'mock.jpg'
        }]

        render(
            <MemoryRouter>
                <SearchedActivities activities={mockActivities}/>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {
        expect(SearchedActivities).toBeDefined()

    })

    it('displays a h3 element', () => {
        const h3 = screen.getByText('Activities')
        expect(h3).toBeInTheDocument()
    })
})
