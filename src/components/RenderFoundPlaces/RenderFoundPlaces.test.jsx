import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);



import RenderFoundPlaces from '.';

describe('Render Found Places functionality', ()=> {
    beforeEach(() => {

        render(
            <MemoryRouter>
                <RenderFoundPlaces />
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {
        expect(RenderFoundPlaces).toBeDefined()

    })

    it('handles click event correctly', () => {
        const places = [{ place_id: 1, name: 'Place 1', location: 'Location 1' }];
        const setSearch = vi.fn();
        const setIsSearching = vi.fn();
        const setPlacePicked = vi.fn();
        const { getByText } = render(
            <MemoryRouter>
                <RenderFoundPlaces
                    search="test"
                    places={places}
                    setSearch={setSearch}
                    setIsSearching={setIsSearching}
                    setPlacePicked={setPlacePicked}
                />
            </MemoryRouter>
        );
        // Click on the search result
        getByText('Place 1, Location 1').click();
        // Assert that click event is handled correctly
        expect(setSearch).toHaveBeenCalledWith('Place 1, Location 1');
        expect(setIsSearching).toHaveBeenCalledWith(false);
        expect(setPlacePicked).toHaveBeenCalledWith(1);
    });
    



})
