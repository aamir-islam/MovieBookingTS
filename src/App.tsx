import React from 'react';
import MovieHome from './components/MovieList/MovieHome';
import { Route, Routes } from "react-router-dom";
import BookingHome from './components/Booking/BookingHome';



function App() {
  return (
    <div >
      <Routes>
        <Route data-testid="home_route" path="/" element={<MovieHome />} />
        <Route path="/booking/:id/:title" element={<BookingHome />} />
      </Routes>
    </div>
  );
}

export default App;
