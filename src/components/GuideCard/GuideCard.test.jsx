import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import GuideCard from '.';

describe('Function', () => {
  beforeEach(() => {
    const fakeGuide = {
      guide_id: 1,
      name: 'John Doe',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tagline: 'Your friendly local guide!',
      filters: ['Foodie', 'History Enthusiast'],
      images: ['image1.jpg', 'image2.jpg'],
    };

    render(
      <MemoryRouter>
        <GuideCard guide={fakeGuide} placeName="Cityville" />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(GuideCard).toBeDefined();
  });

  it('renders guide information', () => {
    const guideName = screen.getByText(/John Doe/i);
    expect(guideName).toBeInTheDocument();

    const placeName = screen.getByText(/Cityville/i);
    expect(placeName).toBeInTheDocument();

  });


});
