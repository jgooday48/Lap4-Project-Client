import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import SearchedGuides from './SearchedGuides';

describe('Searched Guides functionality', ()=> {
    beforeEach(() => {
        const mockGuides = [{
            guide_id: 1,
            name: 'John Doe',
            images: 'mock.jgp',
            tagline: 'Every Little Helps',
            filters: ['MUSIC']
        }]

        const mockSearch = "Tokyo"

        render(
            <MemoryRouter>
                <SearchedGuides searchRes={mockSearch} guides={mockGuides}/>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {
        expect(SearchedGuides).toBeDefined()

    })


    it('displays a h3 element', () => {
        const h3 = screen.getByText('Guides in Tokyo')
        expect(h3).toBeInTheDocument()
    })

})
