import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";




import WebSocketCall from '.';

describe('Function', ()=> {
    beforeEach(() => {

        const socket = 'grgr'
        const user = 'jkl'
        const room = 2

        render(
            <MemoryRouter>
                <WelcomeProvider>

                    <TouristProvider>

                    <GuideProvider>

                    <WebSocketCall socket={socket} username={user} room={room}/>
                    </GuideProvider>
                    </TouristProvider>
                    </WelcomeProvider>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it.skip('is defined', () => {
        expect(WebSocketCall).toBeDefined()

    })

})
