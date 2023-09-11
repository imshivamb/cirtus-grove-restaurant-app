import { render, screen } from '@testing-library/react'
// In a test file, e.g., booking.test.js

import { initializeTimes, updateTimes } from '../app/reservations/page' // Import the functions to test

test('initializeTimes should return the expected array of times', async () => {
  // Create a mock implementation for fetchAPI
  jest.mock('../api/api', () => ({
    fetchAPI: jest.fn(() =>
      Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
    ),
  }))

  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const times = await initializeTimes()
  expect(times).toEqual(expectedTimes)
})
test('updateTimes should return the same times provided in the state', () => {
  // Mock the state with some available times
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  // Call updateTimes with the state
  const updatedTimes = updateTimes(state)

  // Assert that the updatedTimes are the same as the state
  expect(updatedTimes).toEqual(state)
})
