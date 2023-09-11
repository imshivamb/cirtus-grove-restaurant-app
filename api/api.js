// api.js

// Function to fetch available times based on the provided date
const fetchAPI = async (date) => {
  // Mock data (replace with your actual API logic)
  const mockResponse = {
    data: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  }

  return mockResponse.data
}

// Function to submit booking form data
const submitAPI = async (formData) => {
  // Mock response (replace with your actual API logic)
  const mockResponse = {
    success: true,
    message: 'Booking successfully submitted.',
  }

  return mockResponse
}

// Export the functions to make them available for use in your application
export { fetchAPI, submitAPI }
