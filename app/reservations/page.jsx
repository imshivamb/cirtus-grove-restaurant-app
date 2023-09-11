'use client'

import BookingForm from '@/components/BookingForm'
import { useState, useReducer } from 'react'
import { fetchAPI } from '@/api/api'

const availableTimesReducer = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    // Call the updateTimes function to get the updated times (to be implemented)
    return updateTimes(action.date)
  }
  return state
}

export const initializeTimes = async () => {
  try {
    // Create a Date object to represent today's date
    const today = new Date()

    // Call the API to fetch available times for today
    const availableTimes = await fetchAPI(today)

    return availableTimes
  } catch (error) {
    console.error('Error fetching available times:', error)
    // Handle the error gracefully, e.g., return an empty array
    return []
  }
}

export const updateTimes = async (selectedDate) => {
  try {
    // Call the API to fetch available times for the selected date
    const availableTimes = await fetchAPI(selectedDate)

    return availableTimes
  } catch (error) {
    console.error('Error updating available times:', error)

    return []
  }
}

const BookingPage = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [numberOfGuests, setNumberOfGuests] = useState('1')
  const [occasion, setOccasion] = useState('')
  const [isOptionSelected, setIsOptionSelected] = useState(false)

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes(), // Initially, the availableTimes state is empty
  )

  const handleDateChange = (e) => {
    const newDate = e.target.value
    setDate(newDate)

    dispatch({ type: 'UPDATE_TIMES', date: newDate })
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const handleNumberOfGuests = (e) => {
    setNumberOfGuests(parseInt(e.target.value))
  }

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value)
    const selectedValue = e.target.value
    setIsOptionSelected(selectedValue !== '')
  }
  console.log('isOptionSelected:', isOptionSelected)
  return (
    <main className="flex flex-col items-center justify-center min-h-screen h-auto bg-white">
      <BookingForm
        availableTimes={availableTimes}
        date={date}
        time={time}
        numberOfGuests={numberOfGuests}
        occasion={occasion}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onNumberOfGuestsChange={handleNumberOfGuests}
        onOccasionChange={handleOccasionChange}
      />
    </main>
  )
}

export default BookingPage
