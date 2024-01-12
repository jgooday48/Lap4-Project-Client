import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import GuideList from '.';

describe('Guides List', ()=> {
    beforeEach(() => {

        render(
            <MemoryRouter>
                <GuideList />
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it.skip('exists', () => {
        const list = screen.getByRole("listcontainer")
        expect(list).toBeInTheDocument(); 

        

    })

})
