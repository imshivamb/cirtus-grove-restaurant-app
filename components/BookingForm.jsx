import React, { useState, useEffect } from 'react'
import { submitAPI } from '@/api/api'
import ConfirmedBooking from './ConfirmedBooking';

const BookingForm = ({
  availableTimes,
  date,
  time,
  numberOfGuests,
  occasion,
  onDateChange,
  onTimeChange,
  onNumberOfGuestsChange,
  onOccasionChange,
}) => {
  const [times, setTimes] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Function to update available times based on the selected date
  const updateTimes = () => {
    // Replace this placeholder logic with logic to generate times based on date
    // For now, return the same available times
    setTimes(availableTimes)
  }

  useEffect(() => {
    // Update available times when the date changes
    updateTimes()
  }, [date, availableTimes])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      numberOfGuests,
      occasion,
    };
  
    try {
      // Call the submitAPI function with the form data
      const isSubmitted = await submitAPI(formData);
  
      if (isSubmitted) {
        // Handle success, for example, show a success message
        setIsFormSubmitted(true);
      } else {
        // Handle the case where submission failed
        alert('Booking submission failed.');
      }
    } catch (error) {
      // Handle errors that may occur during the submission
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg  w-full border m-auto shadow-orange shadow-sm rounded-lg py-5">
      { isFormSubmitted ? (
        <ConfirmedBooking />
      ) : (
        <>
      <h1 className="font-league text-orange text-[30px] p-5 mb-5 font-bold leading-3">
        Make your Reservation
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-auto">
        <label
          htmlFor="res-date"
          className="font-league font-bold text-xl text-green leading-none text-center"
        >
          Choose a Date
        </label>
        <input
          type="date"
          name="res-date"
          id="res-date"
          value={date}
          onChange={onDateChange}
          className="w-[300px] h-[50px] rounded-lg text-center text-[20px] font-league bg-[#EDEEEE] px-4"
          aria-label="Choose a Date"
          required
        />
        <label
          htmlFor="res-time"
          className="font-league font-bold text-xl text-green leading-none text-center"
        >
          Set Time
        </label>
        <select
          name="res-time"
          id="res-time"
          value={time}
          onChange={onTimeChange}
          className="w-[300px] h-[50px] rounded-lg text-center text-[20px] font-league leading-relaxed bg-[#EDEEEE] px-4"
          aria-label="Set Time"
        >
          <option value="time">17:00</option>
          <option value="time">18:00</option>
          <option value="time">19:00</option>
          <option value="time">20:00</option>
          <option value="time">21:00</option>
          <option value="time">22:00</option>
        </select>
        <label
          htmlFor="guests"
          className="font-league font-bold text-xl text-green leading-none text-center"
        >
          Number of Guests
        </label>
        <input
          type="number"
          name="guests"
          id="guests"
          placeholder="1"
          min={1}
          max={10}
          value={numberOfGuests}
          onChange={onNumberOfGuestsChange}
          className="w-[300px] h-[50px] rounded-lg text-center text-[20px] font-league leading-relaxed bg-[#EDEEEE]"
          aria-label="Number of Guests"
        />

        <select
          name="occasion"
          id="occasion"
          value={occasion}
          onChange={onOccasionChange}
          className="w-[300px] h-[50px] rounded-lg text-center text-lg font-league leading-relaxed font-bold text-green px-4 bg-[#EDEEEE]"
          aria-label="Select Occasion"
        >
          <option value="" disabled className="">
            Occasion
          </option>
          <option
            value="birthday"
            className="w-[300px] h-[50px] rounded-lg text-center text-lg font-league leading-relaxed font-bold text-green px-4"
          >
            Birthday
          </option>
          <option
            value="engagement"
            className="w-[300px] h-[50px] rounded-lg text-center text-lg font-league leading-relaxed font-bold text-green px-4"
          >
            Engagement
          </option>
          <option
            value="anniversary"
            className="w-[300px] h-[50px] rounded-lg text-center text-lg font-league leading-relaxed font-bold text-green px-4"
          >
            Anniversary
          </option>
        </select>
        <button
          type="submit"
          className="font-league font-bold text-white px-4 py-3 bg-button rounded-xl hover:bg-orange"
          aria-label="Make your Reservation"
        >
          Reserve a Table
        </button>
      </form>
      </>
      )}
    </div>
  )
}

export default BookingForm
