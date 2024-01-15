import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { TouristProvider } from "../../contexts/touristContext";
import { GuideProvider } from "../../contexts/guideContext";
import { WelcomeProvider } from "../../contexts/welcomeContext";
import io from 'socket.io-client'; // Import the socket.io-client library
import { fireEvent } from '@testing-library/react';
import WebSocketCall from '.';

expect.extend(matchers);

describe('Function', () => {
  let mockSocket

  beforeEach(() => {

    mockSocket = io('http://localhost')

    const user = 'jkl'
    const room = 2

    render(
      <MemoryRouter>
        <WelcomeProvider>
          <TouristProvider>
            <GuideProvider>
              <WebSocketCall socket={mockSocket} username={user} room={room} />
            </GuideProvider>
          </TouristProvider>
        </WelcomeProvider>
      </MemoryRouter>
    );
  });

  afterEach(() => {

    mockSocket.disconnect();
    cleanup();
  });

  it('is defined', () => {
    expect(WebSocketCall).toBeDefined();
  });


});
