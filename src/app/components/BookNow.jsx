import React from "react";

const BookNow = () => {
  return (
    <>
      <div>
        <h2>Booking Form</h2>
        <form>
          <div>
            <label>Check-in Date:</label>
            <input type="date" name="checkin" required />
          </div>
          <div>
            <label>Check-out Date:</label>
            <input type="date" name="checkout" required />
          </div>
          <div>
            <label>Guests:</label>
            <input type="number" name="guests" required />
          </div>
          <div>
            <label>Room Type:</label>
            <select name="roomType" required>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default BookNow;
